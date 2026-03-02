'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export default function SectionDivider({ title, variant = 'primary' }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="my-10 md:my-12"
    >
      <div className="flex items-center gap-4">
        <span className={`text-xs md:text-sm font-mono ${
          variant === 'primary' ? 'text-accent' : 'text-accent-secondary/70'
        }`}>
          // {title}
        </span>
        <div className="flex-1 h-px bg-card-border" />
      </div>
    </motion.div>
  );
}
