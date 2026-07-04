import { Canvas } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import Effects from "./Effects";
import AICore from "./AICore";

export default function Scene() {
  return (
    <Canvas
    dpr={[1, 2]}
    camera={{
        position: [0, 0, 6],
        fov: 42,
    }}
    gl={{
        alpha: true,
        antialias: true,
    }}
    >
        

        <fog attach="fog" args={["#050816", 8, 18]} />

        <directionalLight position={[3, 3, 3]} intensity={1.2} />

        <directionalLight
        position={[4, 5, 3]}
        intensity={2.5}
        />

        <pointLight
        color="#22D3EE"
        position={[3, 3, 2]}
        intensity={8}
        />

        <pointLight
        color="#8B5CF6"
        position={[-3, -3, 1]}
        intensity={8}
        />

        <Float
        speed={2}
        rotationIntensity={0.4}
        floatIntensity={0.8}
        >
        <AICore />
        </Float>

        

        

        <Effects />
    </Canvas>
  );
}