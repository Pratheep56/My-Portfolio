import Background from "./components/three/Background";
import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import useLenis from "./hooks/useLenis";
import Footer from "./components/layout/Footer";


export default function App() {
  useLenis();
  return (
    <>
      <Background />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}