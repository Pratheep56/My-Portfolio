import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer>

      <Bloom
        intensity={0}
        luminanceThreshold={0.15}
        luminanceSmoothing={0.9}
        mipmapBlur
      />

      <Vignette
        eskil={false}
        offset={0.08}
        darkness={0.45}
      />

    </EffectComposer>
  );
}