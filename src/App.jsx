import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StarBackground from './components/StarBackground'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer  from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <div className="relative z-10">
        {/* All sections will go here */}
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App