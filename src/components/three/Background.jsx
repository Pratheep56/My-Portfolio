import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#050816]">

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-10%] top-[-5%] h-[32rem] w-[32rem] rounded-full bg-violet-600/20 blur-[140px]"
      />

      {/* Cyan Glow */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-10%] bottom-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[130px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(circle at center, black, transparent 90%)",
        }}
      />

    </div>
  );
}