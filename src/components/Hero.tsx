'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { FaDownload, FaEnvelope, FaCheck } from 'react-icons/fa';

export default function Hero() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHoveringProfile, setIsHoveringProfile] = useState(false);
  const [isHoveringName, setIsHoveringName] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [hasAutoFlipped, setHasAutoFlipped] = useState(false);
  const [currentName, setCurrentName] = useState('vennictus');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const gamerTag = 'vennictus';
  const realName = 'ishjaap singh';
  const email = 'ishjaap.singh07@gmail.com';

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Auto-flip animation on component mount
  useEffect(() => {
    if (!hasAutoFlipped) {
      const timer = setTimeout(() => {
        setIsFlipped(true);
        setCurrentName(realName);
        setTimeout(() => {
          setIsFlipped(false);
          setCurrentName(gamerTag);
          setHasAutoFlipped(true);
        }, 2000);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [hasAutoFlipped]);

  // Handle hover/click state changes
  const shouldFlip = isFlipped || isHoveringProfile || isHoveringName;

  useEffect(() => {
    if (hasAutoFlipped) {
      if (shouldFlip && currentName !== realName) {
        setIsAnimating(true);
        setCurrentName(realName);
        setTimeout(() => setIsAnimating(false), 300);
      } else if (!shouldFlip && currentName !== gamerTag) {
        setIsAnimating(true);
        setCurrentName(gamerTag);
        setTimeout(() => setIsAnimating(false), 300);
      }
    }
  }, [shouldFlip, hasAutoFlipped]);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleResumeOpen = () => {
    window.open('/resume/Ishjaap Singh CV Jan 2026.pdf', '_blank');
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-4 md:px-6 pt-20 md:pt-24 pb-6 md:pb-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              hello
              <br />
              <span className="inline-flex items-baseline gap-2 flex-wrap">
                <span>i'm</span>
                <span
                  className="relative cursor-pointer font-mono"
                  style={{ display: 'inline-block', minWidth: '13ch' }}
                  onMouseEnter={() => !isTouchDevice && setIsHoveringName(true)}
                  onMouseLeave={() => !isTouchDevice && setIsHoveringName(false)}
                  onClick={() => setIsHoveringName(!isHoveringName)}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentName}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 30, opacity: 0 }}
                      transition={{
                        duration: 0.15,
                        ease: [0.4, 0.0, 0.2, 1]
                      }}
                      className="inline-block text-[#28c840]"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {currentName}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </motion.h1>

            <motion.div
              className="text-base sm:text-lg md:text-xl text-secondary max-w-2xl leading-relaxed space-y-3 md:space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="lowercase">
                <span className="text-[#28c840] font-semibold">19 y/o developer</span> pursuing{' '}
                <span className="text-[#28c840] font-semibold">computer engineering</span> at{' '}
                <span className="text-[#28c840] font-semibold">tiet patiala</span>.
              </p>

              <p className="lowercase">
                focused on <span className="text-[#28c840] font-semibold">backend engineering</span>,{' '}
                <span className="text-[#28c840] font-semibold">system design</span>, and execution-level behavior across{' '}
                <span className="text-[#28c840] font-semibold">typescript</span>,{' '}
                <span className="text-[#28c840] font-semibold">go</span>, and low-level{' '}
                <span className="text-[#28c840] font-semibold">c/c++</span> systems.
              </p>

              <p className="lowercase">
                currently exploring <span className="text-[#28c840] font-semibold">ai agents</span> and{' '}
                <span className="text-[#28c840] font-semibold">data-driven architectures</span>.
              </p>

              <p className="lowercase italic text-secondary/80">
                i learn by building systems from scratch until everything makes sense.
              </p>
            </motion.div>
          </motion.div>

          {/* Circular Profile Picture with Flip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative shrink-0 cursor-pointer"
            onMouseEnter={() => !isTouchDevice && setIsHoveringProfile(true)}
            onMouseLeave={() => !isTouchDevice && setIsHoveringProfile(false)}
            onClick={() => setIsHoveringProfile(!isHoveringProfile)}
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
              animate={{
                rotateY: shouldFlip ? 180 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Front Side - Profile Image */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full border border-card-border opacity-30" />

                {/* Middle ring */}
                <motion.div
                  className="absolute inset-4 rounded-full border border-hover-border/50"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Profile image */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-foreground shadow-2xl bg-card-bg">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/profile/pfp.jpeg"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full border border-card-border bg-card-bg flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-foreground animate-pulse" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full border border-card-border bg-card-bg" />
              </div>

              {/* Back Side - Action Buttons */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full border border-[#28c840] opacity-50" />

                {/* Middle ring */}
                <motion.div
                  className="absolute inset-4 rounded-full border border-[#28c840]/70"
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* Action buttons container */}
                <div className="absolute inset-8 rounded-full border-2 border-[#28c840] shadow-2xl bg-card-bg flex items-center justify-center">
                  <div className="flex flex-col gap-2 md:gap-4">
                    {/* Resume Open Button */}
                    <button
                      onClick={handleResumeOpen}
                      className="group flex items-center justify-center gap-1.5 md:gap-2 border border-card-border hover:border-[#28c840] bg-transparent hover:bg-[#28c840]/10 text-foreground hover:text-[#28c840] px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm lowercase transition-all duration-300"
                    >
                      <FaDownload className="w-3 h-3 md:w-4 md:h-4" />
                      <span>resume</span>
                    </button>

                    {/* Email Copy Button */}
                    <button
                      onClick={handleEmailCopy}
                      className="group relative flex items-center justify-center gap-1.5 md:gap-2 border border-card-border hover:border-[#28c840] bg-transparent hover:bg-[#28c840]/10 text-foreground hover:text-[#28c840] px-3 py-2 md:px-4 md:py-2.5 text-xs md:text-sm lowercase transition-all duration-300"
                    >
                      <AnimatePresence mode="wait">
                        {emailCopied ? (
                          <motion.div
                            key="copied"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-1.5 md:gap-2"
                          >
                            <FaCheck className="w-3 h-3 md:w-4 md:h-4 text-[#28c840]" />
                            <span className="text-[#28c840]">copied!</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="email"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-1.5 md:gap-2"
                          >
                            <FaEnvelope className="w-3 h-3 md:w-4 md:h-4" />
                            <span>email</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </div>

                {/* Decorative dots (mirrored) */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full border border-[#28c840] bg-card-bg flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#28c840] animate-pulse" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 rounded-full border border-[#28c840] bg-card-bg" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
