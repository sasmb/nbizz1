"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, useGLTF } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { stage, range, easeInOutCubic, easeOutCubic, lerp, T } from "./store";

const N_URL = "/models/nexus-n.glb";
const SHARDS_URL = "/models/nexus-n-shards.glb";

function makeMaterials() {
  const coral = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#ee5a2c"),
    metalness: 0.38,
    roughness: 0.3,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
    specularIntensity: 1,
    side: THREE.DoubleSide,
  });
  const side = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color("#7a1c0a"),
    metalness: 0.45,
    roughness: 0.34,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    side: THREE.DoubleSide,
  });
  const core = new THREE.MeshStandardMaterial({
    color: new THREE.Color("#1c0703"),
    emissive: new THREE.Color("#ff3d0c"),
    emissiveIntensity: 0.9,
    roughness: 0.5,
    side: THREE.DoubleSide,
  });
  const shard = coral.clone();
  shard.color = new THREE.Color("#9c2a10");
  shard.metalness = 0.6;
  shard.roughness = 0.24;
  const glow = new THREE.MeshBasicMaterial({ color: new THREE.Color(4.0, 1.25, 0.32), toneMapped: false, side: THREE.DoubleSide });
  return { coral, side, core, glow, shard };
}

function applyMaterials(root: THREE.Object3D, m: ReturnType<typeof makeMaterials>, shards = false) {
  root.traverse((o) => {
    const mesh = o as THREE.Mesh;
    if (!mesh.isMesh) return;
    const name = (mesh.material as THREE.Material)?.name || "";
    if (name === "CoralSide") mesh.material = m.side;
    else if (name === "Coral") mesh.material = shards ? m.shard : m.coral;
    else if (name === "Core") mesh.material = m.core;
    else if (name === "CoreGlow") mesh.material = m.glow;
    mesh.castShadow = false;
  });
}

/** Full-screen background: ink with a moving ember glow (rendered in-scene so bloom and grading apply). */
function Backdrop() {
  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        depthWrite: false,
        depthTest: false,
        uniforms: {
          uGlow: { value: new THREE.Vector2(0.78, 0.72) },
          uStrength: { value: 1 },
          uAspect: { value: 1 },
          uTime: { value: 0 },
        },
        vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
        fragmentShader: `
          varying vec2 vUv;
          uniform vec2 uGlow; uniform float uStrength; uniform float uAspect; uniform float uTime;
          vec3 toLin(vec3 c){ return pow(c, vec3(2.2)); }
          float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
          void main(){
            vec2 p = vUv; vec2 d = p - uGlow; d.x *= uAspect;
            float g = exp(-dot(d,d) * 2.6) * uStrength;
            float g2 = exp(-dot(d,d) * 9.0) * uStrength;
            vec3 ink = vec3(0.027);
            vec3 ember = vec3(0.176, 0.063, 0.031);
            vec3 hot = vec3(0.36, 0.11, 0.045);
            vec3 col = mix(ink, ember, g);
            col = mix(col, hot, g2 * 0.55);
            // bottom fade to ink
            col = mix(col, ink, smoothstep(0.35, 0.0, p.y) * 0.6);
            col += (hash(p * 800.0 + uTime) - 0.5) * 0.012;
            gl_FragColor = vec4(toLin(col), 1.0);
            #include <colorspace_fragment>
          }`,
      }),
    []
  );
  const { size } = useThree();
  useFrame((s) => {
    const u = stage.u;
    mat.uniforms.uAspect.value = size.width / size.height;
    mat.uniforms.uTime.value = s.clock.elapsedTime % 10;
    // glow drifts from upper-right (hero) to centre (manifesto)
    const k = easeInOutCubic(range(u, T.beliefEnd, T.manifestoStart));
    mat.uniforms.uGlow.value.set(lerp(0.78, 0.5, k), lerp(0.72, 0.5, k));
    mat.uniforms.uStrength.value = lerp(1, 1.25, k);
  });
  return (
    <mesh frustumCulled={false} renderOrder={-1}>
      <planeGeometry args={[2, 2]} />
      <primitive object={mat} attach="material" />
    </mesh>
  );
}

type ShardInfo = {
  obj: THREE.Object3D;
  rest: THREE.Vector3;
  dir: THREE.Vector3;
  dist: number;
  axis: THREE.Vector3;
  spin: number;
  restQ: THREE.Quaternion;
};

function NexusN({ mobile }: { mobile: boolean }) {
  const intact = useGLTF(N_URL);
  const shards = useGLTF(SHARDS_URL);
  const mats = useMemo(makeMaterials, []);
  const group = useRef<THREE.Group>(null);
  const intactRef = useRef<THREE.Group>(null);
  const shardRef = useRef<THREE.Group>(null);
  const smooth = useRef({ u: 0, px: 0, py: 0, intro: 0 });

  const intactScene = useMemo(() => {
    const s = intact.scene.clone(true);
    applyMaterials(s, mats);
    return s;
  }, [intact.scene, mats]);

  const { shardScene, infos } = useMemo(() => {
    const s = shards.scene.clone(true);
    applyMaterials(s, mats, true);
    const infos: ShardInfo[] = [];
    let seed = 7;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    s.traverse((o) => {
      if (!/_shard_/.test(o.name)) return;
      const rest = o.position.clone();
      // radial, mostly in the picture plane, so the centre clears for the manifesto copy
      const ang = Math.atan2(rest.y, rest.x) + (rnd() - 0.5) * 0.9;
      const dir = new THREE.Vector3(Math.cos(ang), Math.sin(ang) * 0.8, 0);
      dir.z = (rnd() - 0.58) * 1.5; // most fall back into depth, a few fly at the viewer
      infos.push({
        obj: o,
        rest,
        dir,
        dist: 1.5 + Math.pow(rnd(), 0.8) * 3.6,
        axis: new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize(),
        spin: 1.5 + rnd() * 5,
        restQ: o.quaternion.clone(),
      });
    });
    return { shardScene: s, infos };
  }, [shards.scene, mats]);

  const q = useMemo(() => new THREE.Quaternion(), []);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;
    const sm = smooth.current;
    // a touch of extra damping on top of Lenis so the object feels weighty
    sm.u += (stage.u - sm.u) * Math.min(1, dt * 7);
    sm.px += (state.pointer.x - sm.px) * Math.min(1, dt * 2.5);
    sm.py += (state.pointer.y - sm.py) * Math.min(1, dt * 2.5);
    sm.intro += ((stage.live ? 1 : 0) - sm.intro) * Math.min(1, dt * 1.6);
    const u = sm.u;
    const t = state.clock.elapsedTime;

    // --- pose keyframes ---
    const a = easeInOutCubic(range(u, 0, T.heroEnd)); // hero -> belief
    const b = easeInOutCubic(range(u, T.beliefEnd - 0.4, T.shatter)); // belief -> centre
    const hero = mobile ? { x: 0.55, y: 1.45, s: 0.95 } : { x: -2.05, y: 0.95, s: 1.95 };
    const belief = mobile ? { x: 0.2, y: -1.35, s: 0.62 } : { x: -1.75, y: -0.05, s: 1.15 };
    const centre = { x: 0, y: 0, s: mobile ? 0.75 : 1.0 };
    let x = lerp(lerp(hero.x, belief.x, a), centre.x, b);
    let y = lerp(lerp(hero.y, belief.y, a), centre.y, b);
    let s = lerp(lerp(hero.s, belief.s, a), centre.s, b);
    // intro: slides up into place after the loader cut
    y -= (1 - easeOutCubic(sm.intro)) * 0.6;
    s *= 0.94 + 0.06 * sm.intro;
    g.position.set(x + sm.px * 0.08, y + sm.py * 0.06, 0);
    g.scale.setScalar(s);

    const rx = -0.1 + sm.py * -0.12 + Math.sin(t * 0.5) * 0.025;
    const ry = -0.42 + a * 0.95 + b * (Math.PI * 2 - 0.53) + sm.px * 0.22 + Math.sin(t * 0.35) * 0.05 + u * 0.12;
    const rz = lerp(-0.47, -0.2, a) * (1 - b);
    g.rotation.set(rx, ry, rz);

    // --- shatter ---
    const e = range(u, T.shatter, T.manifestoStart + 0.6);
    const drift = Math.max(0, u - (T.manifestoStart + 0.6)) * 0.22;
    const shattered = e > 0.0005;
    if (intactRef.current) intactRef.current.visible = !shattered;
    if (shardRef.current) shardRef.current.visible = shattered;
    if (shattered) {
      const k = easeOutCubic(e);
      for (const sh of infos) {
        const d = sh.dist * (k + drift);
        sh.obj.position.set(sh.rest.x + sh.dir.x * d, sh.rest.y + sh.dir.y * d, sh.rest.z + sh.dir.z * d);
        q.setFromAxisAngle(sh.axis, sh.spin * (k + drift * 0.6) + t * 0.08 * sh.spin * Math.min(1, e * 2));
        sh.obj.quaternion.copy(sh.restQ).premultiply(q);
        sh.obj.scale.setScalar(1 - 0.28 * k);
      }
    }
    // emissive core brightens just before the break, like pressure building
    const pressure = range(u, T.sweepStart, T.shatter);
    mats.glow.color.setRGB(4 + pressure * 6, 1.25 + pressure * 1.6, 0.32 + pressure * 0.3);
    mats.core.emissiveIntensity = 0.9 + (1 - e) * 1.2;

    // camera pushes in through the shatter
    const cam = state.camera;
    cam.position.z = lerp(7, mobile ? 7.2 : 6.1, easeOutCubic(range(u, T.shatter, T.manifestoStart + 0.6)));
  });

  return (
    <group ref={group}>
      <group ref={intactRef}>
        <primitive object={intactScene} />
      </group>
      <group ref={shardRef} visible={false}>
        <primitive object={shardScene} />
      </group>
    </group>
  );
}

function KeyGlow() {
  const l = useRef<THREE.PointLight>(null);
  useFrame(() => {
    if (l.current) l.current.intensity = 6 * (1 - range(stage.u, T.shatter, T.manifestoStart) * 0.85);
  });
  return <pointLight ref={l} position={[0, 0, 2.5]} intensity={6} distance={6} color="#ff6a2a" />;
}

function Ready({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    onReady();
  }, [onReady]);
  return null;
}

export default function Scene({ onReady }: { onReady: () => void }) {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(true);
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const set = () => setMobile(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  // stop rendering when the stage is off-screen
  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const io = new IntersectionObserver(([en]) => setActive(en.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={host} className="absolute inset-0">
      <Canvas
        frameloop={active ? "always" : "never"}
        dpr={[1, mobile ? 1.5 : 1.75]}
        camera={{ position: [0, 0, 7], fov: 35, near: 0.1, far: 60 }}
        gl={{ antialias: true, powerPreference: "high-performance", alpha: false }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
        }}
      >
        <Backdrop />
        <ambientLight intensity={0.15} />
        <directionalLight position={[4, 5, 6]} intensity={2.2} color="#ffd9c4" />
        <directionalLight position={[-6, -2, 2]} intensity={0.7} color="#5b7bff" />
        <KeyGlow />
        <Suspense fallback={null}>
          <Environment resolution={256} frames={1}>
            <Lightformer form="rect" intensity={3} color="#ffffff" position={[0, 5, -4]} scale={[10, 2, 1]} />
            <Lightformer form="rect" intensity={2.2} color="#ffb48a" position={[5, 1, 2]} rotation-y={-Math.PI / 2} scale={[6, 2, 1]} />
            <Lightformer form="rect" intensity={1.2} color="#7d95ff" position={[-5, -1, 1]} rotation-y={Math.PI / 2} scale={[6, 3, 1]} />
            <Lightformer form="ring" intensity={2} color="#ff7a3d" position={[0, 0, 6]} scale={3} />
          </Environment>
          <NexusN mobile={mobile} />
          <Ready onReady={onReady} />
        </Suspense>
        <EffectComposer multisampling={mobile ? 0 : 4} enableNormalPass={false}>
          <Bloom mipmapBlur intensity={0.85} luminanceThreshold={0.82} luminanceSmoothing={0.2} radius={0.7} />
          <Vignette eskil={false} offset={0.22} darkness={0.72} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

useGLTF.preload(N_URL);
useGLTF.preload(SHARDS_URL);
