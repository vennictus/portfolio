'use client';

import { motion } from 'framer-motion';

interface TechBadgeProps {
  tech: string;
  index?: number;
}

export default function TechBadge({ tech, index = 0 }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex items-center px-3 py-1.5 text-xs font-medium tracking-wider uppercase border border-card-border bg-card-bg text-secondary hover:text-foreground hover:border-hover-border hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
    >
      {tech}
    </motion.span>
  );
}
