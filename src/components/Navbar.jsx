import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ['Home', 'Skills', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0d0d1a]/90 backdrop-blur-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* LOGO: PS */}
        <a href="#home" className="text-white text-2xl font-bold tracking-tighter hover:text-blue-400 transition-colors">
          PS<span className="text-blue-500">.</span>
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white text-sm font-medium transition-colors uppercase tracking-widest">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE HAMBURGER */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white flex flex-col gap-1.5 z-50">
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div className={`fixed inset-0 bg-[#05050f] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-gray-300 hover:text-white uppercase tracking-[0.2em]"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}