'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export default function SectionDivider({ title, variant = 'primary' }: SectionDividerProps) {
  const color = variant === 'primary' ? '#28c840' : '#888888';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="my-12"
    >
      <div className="flex items-center gap-4">
        {/* Left bracket */}
        <div className="text-xl font-mono" style={{ color }}>
          {'['}
        </div>

        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold lowercase font-mono" style={{ color }}>
          {title}
        </h2>

        {/* Line that extends to the right */}
        <div className="flex-1 h-px" style={{ backgroundColor: color, opacity: 0.3 }} />

        {/* Right bracket */}
        <div className="text-xl font-mono" style={{ color }}>
          {']'}
        </div>
      </div>
    </motion.div>
  );
}
