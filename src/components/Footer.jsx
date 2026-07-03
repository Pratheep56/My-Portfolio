import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative z-10 py-8 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Hidden on mobile to keep copyright center */}
        <div className="hidden md:block w-1/3" />

        {/* Center: Copyright */}
        <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()} <span className="text-white font-medium">PS</span>. All rights reserved.
          </p>
        </div>

        {/* Right Side: Social Profiles */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-8">
          <a href="https://github.com/Pratheep56" target="_blank" className="text-gray-400 hover:text-white transition-all hover:scale-110">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:pratheep0610@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-all hover:scale-110">
            <FaEnvelope size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}