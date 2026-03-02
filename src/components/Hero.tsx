'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const lineNumbers = Array.from({ length: 18 }, (_, i) => i + 1);

export default function Hero() {
  const [currentName, setCurrentName] = useState('vennictus');
  const [isHoveringName, setIsHoveringName] = useState(false);
  const [hasAutoFlipped, setHasAutoFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const gamerTag = 'vennictus';
  const realName = 'ishjaap singh';

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (!hasAutoFlipped) {
      const timer = setTimeout(() => {
        setCurrentName(realName);
        setTimeout(() => {
          setCurrentName(gamerTag);
          setHasAutoFlipped(true);
        }, 2000);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [hasAutoFlipped]);

  const shouldShowReal = isHoveringName;

  useEffect(() => {
    if (hasAutoFlipped) {
      setCurrentName(shouldShowReal ? realName : gamerTag);
    }
  }, [shouldShowReal, hasAutoFlipped]);

  return (
    <section className="relative w-full px-4 md:px-6">
      <div className="max-w-3xl w-full mx-auto relative">
        {/* Decorative line numbers — left gutter */}
        <div className="hidden md:flex absolute -left-14 top-0 bottom-0 flex-col items-end pt-1 select-none">
          {lineNumbers.map((n) => (
            <motion.span
              key={n}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * n }}
              className="text-[11px] font-mono text-card-border/40 leading-[2.15] tabular-nums"
            >
              {n}
            </motion.span>
          ))}
        </div>

        {/* Left accent bar */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="hidden md:block absolute -left-6 top-0 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent origin-top"
        />

        <div className="flex flex-col items-start gap-5 md:gap-6">
          {/* Comment header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] md:text-xs font-mono text-card-border/50"
          >
            {'/**'}
          </motion.div>

          {/* Status line */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden border border-card-border">
              <Image
                src="/images/profile/pfp.jpeg"
                alt="Ishjaap Singh"
                width={48}
                height={48}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-selection animate-pulse" />
              <span className="text-[10px] md:text-xs text-muted font-mono">19 · cs engineer @ tiet patiala</span>
            </div>
          </motion.div>

          {/* Name — with ambient glow */}
          <div className="relative">
            {/* Glow behind name */}
            <div className="absolute -inset-x-8 -inset-y-4 bg-accent/[0.03] blur-3xl rounded-full pointer-events-none" />

            <motion.h1
              className="relative font-bold tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block text-sm sm:text-base md:text-lg font-mono text-muted font-normal mb-1 md:mb-2">hi, i&apos;m</span>
              <span
                className="relative cursor-pointer font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ display: 'inline-block', minWidth: '10ch' }}
                onMouseEnter={() => !isTouchDevice && setIsHoveringName(true)}
                onMouseLeave={() => !isTouchDevice && setIsHoveringName(false)}
                onClick={() => setIsHoveringName(!isHoveringName)}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentName}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className={`inline-block ${currentName === gamerTag ? 'text-accent' : 'text-foreground'}`}
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {currentName}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
          </div>

          {/* Tags + Resume */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="-mt-2 space-y-3"
          >
            <div className="text-[10px] md:text-xs font-mono text-card-border/50">
              {' * @role backend engineer'}
            </div>
            <div className="flex flex-wrap items-center gap-2 pl-3">
              {['TypeScript', 'Go', 'Systems Internals', 'Distributed Systems'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-[10px] md:text-xs font-mono text-secondary border border-card-border/60 bg-card-bg/40 shadow-[0_0_10px_rgba(251,146,60,0.06)] hover:border-accent/40 hover:text-foreground hover:shadow-[0_0_16px_rgba(251,146,60,0.12)] transition-all duration-200">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="text-sm md:text-base text-secondary max-w-lg leading-relaxed space-y-2.5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              i focus on correctness, performance, and understanding systems from first principles.
            </p>
            <p>
              i&apos;m interested in the mechanics beneath software — execution, state, and failure — and
              in the moments where abstractions reveal their limits. building is how i think.
            </p>
          </motion.div>

          {/* Currently line */}
          <motion.p
            className="text-xs md:text-sm text-muted font-mono"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <span className="text-accent/40">{'>'}</span>{' '}
            currently training:{' '}
            <span className="text-accent-secondary">distributed systems</span>{' '}
            &{' '}
            <span className="text-accent-secondary">data-intensive design</span>
            <span className="inline-block w-1.5 h-3.5 bg-accent/40 ml-1 animate-pulse align-middle" />
          </motion.p>

          {/* Comment footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="text-[10px] md:text-xs font-mono text-card-border/50"
          >
            {' */'}
          </motion.div>

          {/* Bottom decoration — function close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-[10px] md:text-xs font-mono text-card-border/30 pt-2"
          >
            {'};'}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
