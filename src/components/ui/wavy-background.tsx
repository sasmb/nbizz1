"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  position = "50",
  height,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  position?: string;
  height?: number;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  const canvasCtxRef = useRef<CanvasRenderingContext2D | null>(null);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const noiseRef = useRef(createNoise3D());

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvasCtxRef.current = canvas.getContext('2d');
    const ctx = canvasCtxRef.current;
    if (!ctx) return;

    dimensionsRef.current = {
      width: canvas.offsetWidth,
      height: canvas.offsetHeight
    };

    canvas.width = dimensionsRef.current.width;
    canvas.height = dimensionsRef.current.height;

    ctx.filter = `blur(${blur}px)`;
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, dimensionsRef.current.width, dimensionsRef.current.height);

    render();
  }, [blur, waveOpacity]);

  const waveColors = colors ?? [
    "#0164D1 ",
    "#FE5D35",
    "#0143A3",
    "#59A4F7 ",
    "#FF8C63", 
    
  ];
  const drawWave = useCallback((v: number) => {
    const ctx = canvasCtxRef.current;
    if (!ctx || !canvasRef.current) return;

    const { width: w, height: h } = dimensionsRef.current;

    let nt = 0;
    const speed = getSpeed();
    for (let i = 0; i < v; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        var y = noiseRef.current(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
      nt += speed;
    }
  }, [waveWidth, colors]);

  const render = useCallback(() => {
    const ctx = canvasCtxRef.current;
    if (!ctx || !canvasRef.current) return;

    const { width: w, height: h } = dimensionsRef.current;

    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);

    animationFrameId.current = requestAnimationFrame(render);
  }, [backgroundFill, waveOpacity, drawWave]);

  useEffect(() => {
    init();
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [init]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
