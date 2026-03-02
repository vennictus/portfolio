'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

interface PageHeaderProps {
  title: string;
  description: string;
  stats?: { label: string; value: string | number }[];
  actionButton?: {
    label: string;
    url: string;
    icon: 'github' | 'external' | 'hashnode';
  };
}

export default function PageHeader({ title, description, stats, actionButton }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-mono lowercase mb-3 md:mb-4 text-accent">
        <span className="opacity-40">// </span>{title}
      </h1>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-6">
        <p className="text-sm sm:text-base md:text-lg text-secondary lowercase max-w-lg">
          {description}
        </p>

        {actionButton && (
          <a
            href={actionButton.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm lowercase font-mono font-medium text-accent border border-accent/50 bg-accent/10 hover:bg-accent/20 hover:border-accent transition-all duration-200 shrink-0"
          >
            {actionButton.icon === 'github' ? (
              <FaGithub className="w-3.5 h-3.5" />
            ) : actionButton.icon === 'hashnode' ? (
              <SiHashnode className="w-3.5 h-3.5" />
            ) : (
              <FaExternalLinkAlt className="w-3 h-3" />
            )}
            {actionButton.label} ↗
          </a>
        )}
      </div>

      {stats && stats.length > 0 && (
        <div className="flex gap-6 md:gap-8 mt-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-baseline gap-1.5">
              <span className="text-lg md:text-xl font-bold text-foreground font-mono">
                {stat.value}
              </span>
              <span className="text-xs text-muted lowercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="h-px bg-card-border mt-6" />
    </motion.div>
  );
}
