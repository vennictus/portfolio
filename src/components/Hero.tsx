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

  const gamerTag = 'vennictus';
  const realName = 'ishjaap singh';
  const email = 'ishjaap@example.com'; // Replace with your actual email

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

  const handleResumeDownload = () => {
    // Replace with your actual resume path
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Add your resume file to public folder
    link.download = 'ishjaap-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-24 pb-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-left"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              hello.
              <br />
              <span className="inline-flex items-baseline gap-2">
                <span>i'm</span>
                <span
                  className="inline-block cursor-pointer relative font-mono overflow-hidden"
                  onMouseEnter={() => setIsHoveringName(true)}
                  onMouseLeave={() => setIsHoveringName(false)}
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
                      className="inline-flex text-[#28c840]"
                    >
                      {currentName.split('').map((char, index) => (
                        <motion.span
                          key={`${currentName}-${index}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.05,
                            delay: index * 0.015,
                            ease: [0.4, 0.0, 0.2, 1]
                          }}
                          className="inline-block"
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                      ))}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed lowercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              a developer, designer, and creator. welcome to my corner of the internet
              where i document my journey through code, design, and discovery.
            </motion.p>
          </motion.div>

          {/* Circular Profile Picture with Flip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex-shrink-0 cursor-pointer"
            onMouseEnter={() => setIsHoveringProfile(true)}
            onMouseLeave={() => setIsHoveringProfile(false)}
            onClick={() => setIsHoveringProfile(!isHoveringProfile)}
            style={{ perspective: '1000px' }}
          >
            <motion.div
              className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72"
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
                  <div className="relative w-full h-full bg-muted flex items-center justify-center">
                    {/* Placeholder - replace with actual image */}
                    <svg
                      className="w-24 h-24 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    {/* Uncomment when you have an image */}
                    {/* <Image
                      src="/path-to-your-image.jpg"
                      alt="Profile"
                      fill
                      className="object-cover"
                    /> */}
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
                  <div className="flex flex-col gap-4">
                    {/* Resume Download Button */}
                    <button
                      onClick={handleResumeDownload}
                      className="group flex items-center justify-center gap-2 border border-card-border hover:border-[#28c840] bg-transparent hover:bg-[#28c840]/10 text-foreground hover:text-[#28c840] px-6 py-3 text-sm lowercase transition-all duration-300"
                    >
                      <FaDownload className="w-4 h-4" />
                      <span>resume</span>
                    </button>

                    {/* Email Copy Button */}
                    <button
                      onClick={handleEmailCopy}
                      className="group relative flex items-center justify-center gap-2 border border-card-border hover:border-[#28c840] bg-transparent hover:bg-[#28c840]/10 text-foreground hover:text-[#28c840] px-6 py-3 text-sm lowercase transition-all duration-300"
                    >
                      <AnimatePresence mode="wait">
                        {emailCopied ? (
                          <motion.div
                            key="copied"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-2"
                          >
                            <FaCheck className="w-4 h-4 text-[#28c840]" />
                            <span className="text-[#28c840]">copied!</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="email"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="flex items-center gap-2"
                          >
                            <FaEnvelope className="w-4 h-4" />
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
