import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 text-center"
    >
      <p className="uppercase tracking-[.35em] text-cyan-400 text-sm mb-3">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl mx-auto text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}