import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="
        group
        flex
        flex-col
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-xl
        p-7
        transition-all
        duration-300
        hover:border-cyan-400/30
        hover:shadow-[0_0_30px_rgba(34,211,238,.10)]
      "
    >
      {/* Title */}

      <h3 className="text-center text-2xl font-bold">
        {project.title}
      </h3>

      <p className="mt-2 text-center text-sm font-medium text-cyan-300">
        {project.subtitle}
      </p>

      {/* Description */}

      <p className="mt-6 flex-1 text-center text-sm leading-7 text-slate-300">
        {project.description}
      </p>

      {/* Technologies */}

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-3
              py-1
              text-[11px]
              text-cyan-200
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub */}

      <div className="mt-7 flex justify-end">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            transition-all
            duration-300
            hover:scale-110
            hover:border-cyan-400
            hover:text-cyan-300
          "
        >
          <FaGithub size={18} />
        </a>
      </div>
    </motion.article>
  );
}