'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: '~/vennictus', href: '/' },
    { name: 'blog', href: '/blog' },
    { name: 'projects', href: '/projects' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-card-border/30 bg-background/40 backdrop-blur-md"
    >
      <div className="flex items-center justify-center h-10 md:h-12 gap-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative px-3 md:px-4 py-1.5 text-xs md:text-sm font-mono transition-colors duration-200 ${
              isActive(item.href)
                ? 'text-accent'
                : 'text-muted hover:text-secondary'
            }`}
          >
            {isActive(item.href) && (
              <motion.div
                layoutId="activeNav"
                className="absolute bottom-0 left-0 right-0 h-px bg-accent"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
