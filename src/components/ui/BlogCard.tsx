'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BrowserHeader from '../BrowserHeader';
import { Blog } from '@/lib/blogs';

interface BlogCardProps {
  blog: Blog;
  variant?: 'default' | 'grid' | 'stacked';
  index?: number;
}

export default function BlogCard({ blog, variant = 'default', index = 0 }: BlogCardProps) {
  const formattedDate = `${blog.date.replace(/-/g, '-')}-blog.pdf`;

  if (variant === 'grid') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group card-tilt"
      >
        <Link href={`/blog/${blog.slug}`} className="block border border-card-border bg-card-bg overflow-hidden">
          <BrowserHeader date={formattedDate} />

          <div className="relative h-64 bg-muted overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60" />
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
            )}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 group-hover:text-hover-border transition-colors">
              {blog.title}
            </h3>
            <p className="text-secondary text-sm mb-4 line-clamp-3">{blog.excerpt}</p>

            <div className="flex items-center justify-between">
              <button className="btn-bordered text-sm px-4 py-2">
                Read article
              </button>
              <span className="category-badge">{blog.category}</span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Stacked/overlapping variant for home page preview
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
      whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? 2 : -2 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        zIndex: 50,
        transition: { duration: 0.3 }
      }}
      className="group relative"
      style={{
        transformOrigin: 'center',
      }}
    >
      <Link
        href={`/blog/${blog.slug}`}
        className="block border border-card-border bg-card-bg overflow-hidden shadow-2xl"
      >
        <BrowserHeader date={formattedDate} />

        <div className="relative h-48 bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60 z-10" />
          {blog.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          )}
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-hover-border transition-colors">
            {blog.title}
          </h3>
          <p className="text-secondary text-xs mb-3 line-clamp-2">{blog.excerpt}</p>

          <div className="flex items-center justify-between">
            <button className="btn-bordered text-xs px-3 py-1.5">
              Read article
            </button>
            <span className="category-badge text-xs py-1 px-2">{blog.category}</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

