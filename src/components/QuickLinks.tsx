'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const links = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/vennictus',
    external: true,
    label: 'code & projects',
  },
  {
    name: 'X',
    icon: FaXTwitter,
    href: 'https://x.com/vennictus',
    external: true,
    label: 'thoughts & updates',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/ishjaap-singh-1094b3320',
    external: true,
    label: 'professional profile',
  },
];

export default function QuickLinks() {
  return (
    <section className="py-4 md:py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3">
          {links.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative flex items-center gap-3 md:gap-4 p-3 md:p-4 border border-card-border bg-card-bg hover:border-[#28c840] transition-all duration-300 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-[#28c840]/0 group-hover:bg-[#28c840]/5 transition-colors duration-300" />

                {/* Icon */}
                <div className="relative z-10 shrink-0">
                  <Icon className="text-xl md:text-2xl text-secondary group-hover:text-[#28c840] transition-colors duration-300" />
                </div>

                {/* Text content */}
                <div className="relative z-10 flex-1 min-w-0">
                  <div className="font-medium text-xs md:text-sm text-foreground group-hover:text-[#28c840] lowercase transition-colors duration-300">
                    {link.name}
                  </div>
                  <div className="text-[10px] md:text-xs text-secondary/60 lowercase truncate">
                    {link.label}
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  className="relative z-10 w-3 h-3 md:w-4 md:h-4 text-secondary/40 group-hover:text-[#28c840] shrink-0 group-hover:translate-x-0.5 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
