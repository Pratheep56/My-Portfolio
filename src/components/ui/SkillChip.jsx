import { motion } from "framer-motion";

export default function SkillChip({ name, icon }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 18,
      }}
      className="
        group
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-xl
        px-4
        py-3
        cursor-default
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:bg-white/[0.08]
        hover:shadow-[0_0_20px_rgba(34,211,238,.2)]
      "
    >
      <img
        src={`https://cdn.simpleicons.org/${icon}`}
        alt={name}
        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
      />

      <span className="text-sm font-medium text-slate-200">
        {name}
      </span>
    </motion.div>
  );
}