import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function AICore() {
  const group = useRef();
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();
  const core = useRef();

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();

    // Whole system follows mouse slightly
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.x * 0.45,
      0.05
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -mouse.y * 0.25,
      0.05
    );

    // Floating
    group.current.position.y = Math.sin(t) * 0.18;

    // Independent ring rotations
    ring1.current.rotation.y += 0.004;

    ring2.current.rotation.x -= 0.006;

    ring3.current.rotation.z += 0.008;

    // Core pulse
    const s = 1 + Math.sin(t * 2.4) * 0.06;
    core.current.scale.set(s, s, s);
  });

  return (
    <group ref={group}>

      {/* Outer Ring */}

      <Torus
        ref={ring1}
        args={[1.9, 0.025, 32, 180]}
      >
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={0.8}
        />
      </Torus>

      {/* Middle Ring */}

      <Torus
        ref={ring2}
        rotation={[Math.PI / 2, 0, 0]}
        args={[1.5, 0.025, 32, 180]}
      >
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.8}
        />
      </Torus>

      {/* Inner Ring */}

      <Torus
        ref={ring3}
        rotation={[0, Math.PI / 2, 0]}
        args={[1.05, 0.025, 32, 180]}
      >
        <meshStandardMaterial
          color="#22D3EE"
          emissive="#22D3EE"
          emissiveIntensity={1}
        />
      </Torus>

      {/* Core */}

    {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, index) => (
        <mesh key={index} position={[Math.cos(angle) * 1.9, Math.sin(angle) * 2.2, 0,]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#67E8F9" />
        </mesh>
    ))}

    <mesh ref={core}>
        <icosahedronGeometry args={[0.62, 2]} />

        <meshPhysicalMaterial
        color="#9AE6FF"
        emissive="#67E8F9"
        emissiveIntensity={1.2}
        transmission={1}
        thickness={1.5}
        roughness={0}
        metalness={0.15}
        clearcoat={1}
        clearcoatRoughness={0}
        ior={1.45}
    />
    </mesh>

    </group>
  );
}