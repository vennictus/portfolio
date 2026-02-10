'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

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
    { name: 'about', href: '/' },
    { name: 'blog', href: '/blog' },
    { name: 'projects', href: '/projects' },
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
      className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        layout
        className="flex items-center gap-1 bg-card-bg/80 backdrop-blur-xl border border-card-border rounded-full px-3 md:px-4 py-1.5 md:py-2 shadow-2xl"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative px-2.5 md:px-4 py-1.5 md:py-2 group flex items-center"
          >
              <motion.span
                className={`relative z-10 font-medium transition-colors duration-300 text-xs md:text-sm ${isActive(item.href)
                    ? 'text-foreground'
                    : 'text-secondary group-hover:text-accent'
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
                  className="absolute inset-0 bg-accent/20 rounded-full"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              {/* Hover effect */}
              <div className="absolute inset-0 bg-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
      </motion.div>

      {/* Subtle glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-white/5 rounded-full blur-xl -z-10"
      />
    </motion.nav>
  );
}
