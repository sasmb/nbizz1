// @react-three/fiber v8 registers its elements on the global JSX namespace; @types/react 19 reads React.JSX.
import type { ThreeElements } from "@react-three/fiber";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}
