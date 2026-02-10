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
  // Get current date in YYYY-MM-DD format
  const today = new Date();
  const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="border border-card-border bg-card-bg overflow-hidden">
        {/* Browser Header */}
        <div className="bg-linear-to-b from-[#2a2a2a] to-[#1a1a1a] border-b border-card-border px-3 md:px-4 py-2 md:py-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="text-[10px] md:text-xs text-secondary font-mono truncate ml-2">
              {dateString}-{title}.html
            </div>
          </div>
        </div>

        <div className="p-4 md:p-8 lg:p-12">
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Top: Title and Description */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#28c840] lowercase mb-3 md:mb-4">
                {title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-secondary lowercase">
                {description}
              </p>
            </div>

            {/* Bottom: Stats and Action Button */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
              {/* Stats */}
              {stats && stats.length > 0 && (
                <div className="flex gap-6 md:gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col items-start">
                      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#28c840]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-secondary lowercase mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Button */}
              {actionButton && (
                <a
                  href={actionButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 md:gap-2 border border-card-border hover:border-[#28c840] bg-transparent hover:bg-[#28c840]/10 text-foreground hover:text-[#28c840] px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm lowercase transition-all duration-300"
                >
                  {actionButton.icon === 'github' ? (
                    <FaGithub className="w-3 h-3 md:w-4 md:h-4" />
                  ) : actionButton.icon === 'hashnode' ? (
                    <SiHashnode className="w-3 h-3 md:w-4 md:h-4" />
                  ) : (
                    <FaExternalLinkAlt className="w-3 h-3 md:w-4 md:h-4" />
                  )}
                  {actionButton.label}
                  <span className="text-[#28c840]">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
