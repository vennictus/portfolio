'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Projects', href: '/projects' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'top-4' : 'top-8'
      }`}
    >
      <motion.div
        layout
        className={`flex items-center gap-1 transition-all duration-500 ${
          isScrolled
            ? 'bg-card-bg/80 backdrop-blur-xl border border-card-border rounded-full px-6 py-3 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <AnimatePresence mode="wait">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-6 py-2 group"
            >
              <motion.span
                className={`relative z-10 font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-foreground'
                    : 'text-secondary group-hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.span>

              {/* Active indicator */}
              {isActive(item.href) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-hover-border/20 rounded-full"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              {/* Hover effect */}
              <div className="absolute inset-0 bg-hover-border/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Subtle glow effect when scrolled */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-white/5 rounded-full blur-xl -z-10"
        />
      )}
    </motion.nav>
  );
}
