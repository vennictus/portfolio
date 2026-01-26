'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-left"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-float"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hello.
              <br />
              I'm{' '}
              <span className="inline-block border-b-4 border-foreground">
                [Your Name]
              </span>
              .
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I'm a developer, designer, and creator. Welcome to my corner of the internet
              where I document my journey through code, design, and discovery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8"
            >
              <a
                href="#quicklinks"
                className="btn-bordered inline-block px-6 py-3"
              >
                Explore my work
              </a>
            </motion.div>
          </motion.div>

          {/* Circular Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-card-border animate-pulse-glow"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

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
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          className="w-[1px] h-16 bg-linear-to-b from-transparent via-secondary to-transparent"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>
    </section>
  );
}
