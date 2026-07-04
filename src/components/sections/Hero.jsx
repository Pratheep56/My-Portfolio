import HeroContent from "../hero/HeroContent";
import HeroVisual from "../hero/HeroVisual";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-12 lg:px-16"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr]">

        <HeroContent />

        <HeroVisual />

      </div>
    </section>
  );
}