import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function Button({
  children,
  className,
  as = "button",
  ...props
}) {
  const MotionComponent =
    as === "a" ? motion.a : motion.button;

  return (
    <MotionComponent
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "inline-flex items-center justify-center",
        "rounded-full",
        "px-7",
        "py-3",
        "font-medium",
        "text-white",
        "bg-gradient-to-r",
        "from-violet-600",
        "to-cyan-500",
        "transition-all",
        "shadow-lg",
        "hover:shadow-cyan-500/30",
        className
      )}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}