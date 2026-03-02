'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck, FaArrowRight, FaDownload } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiHashnode } from 'react-icons/si';
import { useState, useEffect, useRef } from 'react';

const links = [
  {
    name: 'github',
    icon: FaGithub,
    href: 'https://github.com/vennictus',
    external: true,
  },
  {
    name: 'x',
    icon: FaXTwitter,
    href: 'https://x.com/vennictus',
    external: true,
  },
  {
    name: 'linkedin',
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/ishjaap-singh-1094b3320',
    external: true,
  },
  {
    name: 'hashnode',
    icon: SiHashnode,
    href: 'https://hashnode.com/@vennictus',
    external: true,
  },
  {
    name: 'email',
    icon: FaEnvelope,
    href: 'mailto:ishjaap.singh07@gmail.com',
    external: false,
  },
];

const arcPositions = [
  { x: 30, y: -180 },
  { x: 70, y: -95 },
  { x: 85, y: 0 },
  { x: 70, y: 95 },
  { x: 30, y: 180 },
];

export default function QuickLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const shouldAnimate = useRef(
    typeof window !== 'undefined' ? !sessionStorage.getItem('ql-loaded') : true
  );

  useEffect(() => {
    sessionStorage.setItem('ql-loaded', '1');
  }, []);

  const handleResumeOpen = () => {
    window.open('/resume/Ishjaap Singh CV Jan 2026.pdf', '_blank');
  };

  const handleClick = (link: typeof links[0]) => {
    if (link.name === 'email') {
      navigator.clipboard.writeText('ishjaap.singh07@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1500);
      return;
    }
    window.open(link.href, link.external ? '_blank' : '_self');
  };

  return (
    <>
      {/* Desktop: reverse-C arc */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-40" style={{ right: 'max(2rem, calc((100% - 42rem) / 2 - 8rem))' }}>
        <div className="relative">
          {links.map((link, index) => {
            const Icon = link.icon;
            const pos = arcPositions[index];
            const isHovered = hoveredIndex === index;
            const isEmail = link.name === 'email';

            return (
              <motion.a
                key={link.name}
                href={isEmail ? undefined : link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (isEmail) {
                    e.preventDefault();
                    handleClick(link);
                  }
                }}
                initial={shouldAnimate.current ? { opacity: 0, scale: 0 } : false}
                animate={{ opacity: 1, scale: 1 }}
                transition={shouldAnimate.current ? {
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 18,
                } : { duration: 0 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="absolute flex items-center h-12 rounded-full border border-card-border/60 bg-card-bg/60 backdrop-blur-sm text-muted hover:text-accent hover:border-accent hover:shadow-lg hover:shadow-accent/15 transition-all duration-150 cursor-pointer overflow-hidden"
                style={{
                  right: -pos.x,
                  top: pos.y - 24,
                  width: isHovered ? 'auto' : 48,
                  paddingLeft: isHovered ? 14 : 0,
                  paddingRight: isHovered ? 16 : 0,
                  justifyContent: isHovered ? 'flex-start' : 'center',
                  minWidth: 48,
                  borderRadius: 24,
                }}
              >
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12">
                  {isEmail && emailCopied ? (
                    <FaCheck className="w-[18px] h-[18px] text-selection" />
                  ) : (
                    <Icon className="w-[18px] h-[18px]" />
                  )}
                </span>

                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 'auto' }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.1 }}
                      className="flex items-center gap-1.5 whitespace-nowrap overflow-hidden"
                    >
                      <span className="text-[11px] font-mono text-foreground">
                        {isEmail && emailCopied ? 'copied!' : link.name}
                      </span>
                      {!(isEmail && emailCopied) && (
                        <FaArrowRight className="w-2 h-2 text-accent/60" />
                      )}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.a>
            );
          })}

          {/* Resume button — always visible, left of LinkedIn */}
          <motion.button
            onClick={handleResumeOpen}
            initial={shouldAnimate.current ? { opacity: 0, scale: 0 } : false}
            animate={{ opacity: 1, scale: 1 }}
            transition={shouldAnimate.current ? {
              duration: 0.5,
              delay: 1.2,
              type: 'spring',
              stiffness: 200,
              damping: 18,
            } : { duration: 0 }}
            className="absolute flex items-center gap-2 h-10 rounded-md border border-accent/40 bg-accent text-background font-mono text-xs font-semibold tracking-wide uppercase px-4 shadow-[0_0_18px_rgba(251,146,60,0.25)] hover:shadow-[0_0_28px_rgba(251,146,60,0.4)] hover:brightness-110 transition-all duration-200 cursor-pointer"
            style={{
              right: 60,
              top: -20,
            }}
          >
            <FaDownload className="w-3 h-3" />
            résumé
          </motion.button>

          {/* Faint connecting arc line */}
          <svg
            className="absolute pointer-events-none opacity-[0.06]"
            width="120"
            height="400"
            style={{ right: -100, top: -200 }}
            viewBox="0 0 120 400"
            fill="none"
          >
            <path
              d="M 30 20 Q 100 100 100 200 Q 100 300 30 380"
              stroke="currentColor"
              strokeWidth="1"
              className="text-accent"
            />
          </svg>
        </div>
      </div>

      {/* Mobile: horizontal row pinned to bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-card-border bg-background/90 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2 py-3 px-4">
          {links.map((link, index) => {
            const Icon = link.icon;
            const isEmail = link.name === 'email';
            return (
              <motion.a
                key={link.name}
                href={isEmail ? undefined : link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (isEmail) {
                    e.preventDefault();
                    handleClick(link);
                  }
                }}
                initial={shouldAnimate.current ? { opacity: 0, y: 10 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={shouldAnimate.current ? { duration: 0.3, delay: 0.4 + index * 0.05 } : { duration: 0 }}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-card-border bg-card-bg text-muted hover:text-accent hover:border-accent transition-all duration-200 cursor-pointer"
                title={link.name}
              >
                {isEmail && emailCopied ? (
                  <FaCheck className="w-4 h-4 text-selection" />
                ) : (
                  <Icon className="w-4 h-4" />
                )}
              </motion.a>
            );
          })}
          {/* Mobile resume button */}
          <motion.button
            onClick={handleResumeOpen}
            initial={shouldAnimate.current ? { opacity: 0, y: 10 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={shouldAnimate.current ? { duration: 0.3, delay: 0.7 } : { duration: 0 }}
            className="flex items-center justify-center gap-1.5 h-10 px-3.5 rounded-full border border-accent/50 bg-accent/[0.08] text-accent shadow-[0_0_12px_rgba(251,146,60,0.12)] hover:shadow-[0_0_20px_rgba(251,146,60,0.2)] transition-all duration-200 cursor-pointer"
          >
            <FaDownload className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono">resume</span>
          </motion.button>
        </div>
      </div>
    </>
  );
}
