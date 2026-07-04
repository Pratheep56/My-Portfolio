import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import Button from "../ui/Button";
import RoleSwitcher from "./RoleSwitcher";

export default function HeroContent() {
  return (
    <div className="flex flex-col">

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .1 }}
        className="mb-4 font-medium uppercase tracking-[0.35em] text-cyan-400"
      >
        Hello, There!
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .2 }}
        className="font-['Space_Grotesk'] text-5xl font-bold leading-none text-white sm:text-6xl lg:text-8xl"
      >
        Pratheep
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .35 }}
        className="mt-5 h-8"
      >
        <RoleSwitcher />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .45 }}
        className="mt-8 max-w-xl text-lg leading-8 text-slate-400"
      >
        Passionate about Artificial Intelligence, Machine Learning, and Software Engineering, 
        building intelligent solutions that combine modern development practices with impactful real-world applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .55 }}
        className="mt-10 flex flex-wrap gap-5"
      >
        <Button
          as="a"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </Button>

        <Button
          as="a"
          href="#contact"
          className="bg-white/5 hover:bg-white/10"
        >
          Contact Me
        </Button>

      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .7 }}
        className="mt-12 flex items-center gap-6"
      >
        <a
          href="https://github.com/Pratheep56"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 transition hover:-translate-y-1 hover:text-white"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="https://linkedin.com/pratheep05/"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 transition hover:-translate-y-1 hover:text-white"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="mailto:pratheep0610@gmail.com"
          className="text-slate-400 transition hover:-translate-y-1 hover:text-white"
        >
          <FaEnvelope size={22} />
        </a>

      </motion.div>

    </div>
  );
}