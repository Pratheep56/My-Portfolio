import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10">
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        py-6
        flex
        flex-col
        gap-6
        md:flex-row
        md:items-center
        md:justify-between
        "
      >
        {/* Left */}

        <div className="text-center md:text-left">

          <p className="text-sm text-slate-400">
            Designed &amp; Developed by
          </p>

          <h3 className="font-semibold text-white">
            Pratheep Senthilkumar
          </h3>

        </div>

        {/* Center */}

        <div className="text-center">

          <p className="text-sm text-slate-400 flex items-center justify-center gap-2">

            © {year}

            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              to-indigo-400
              bg-clip-text
              text-transparent
              font-bold
              text-lg
              "
            >
              PS
            </span>

          </p>

        </div>

        {/* Right */}

        <div className="flex justify-center gap-4">

          <motion.a
            whileHover={{ y: -3, scale: 1.08 }}
            href="https://github.com/Pratheep56"
            target="_blank"
            rel="noreferrer"
            className="
            h-10
            w-10
            rounded-full
            border
            border-white/10
            flex
            items-center
            justify-center
            transition
            hover:border-cyan-400/40
            hover:bg-cyan-400/10
            "
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ y: -3, scale: 1.08 }}
            href="https://www.linkedin.com/in/pratheep05/"
            target="_blank"
            rel="noreferrer"
            className="
            h-10
            w-10
            rounded-full
            border
            border-white/10
            flex
            items-center
            justify-center
            transition
            hover:border-cyan-400/40
            hover:bg-cyan-400/10
            "
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ y: -3, scale: 1.08 }}
            href="mailto:pratheep0610@gmail.com"
            className="
            h-10
            w-10
            rounded-full
            border
            border-white/10
            flex
            items-center
            justify-center
            transition
            hover:border-cyan-400/40
            hover:bg-cyan-400/10
            "
          >
            <MdEmail />
          </motion.a>

        </div>

      </div>
    </footer>
  );
}