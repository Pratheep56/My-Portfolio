import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "AI & ML Enthusiast",
  "Creative Problem Solver",
  "Building the future, one line at a time",
];

export default function RoleSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2400);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-8 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={roles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: .35 }}
          className="font-['Space_Grotesk'] text-2xl font-semibold text-violet-300"
        >
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}