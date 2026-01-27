'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Post } from 'contentlayer/generated';
import { format } from 'date-fns';
import { SiHashnode } from 'react-icons/si';

interface BlogCardProps {
  blog: Post;
  variant?: 'default' | 'grid' | 'stacked';
  index?: number;
}

export default function BlogCard({ blog, variant = 'default', index = 0 }: BlogCardProps) {
  const formattedDate = `${format(new Date(blog.date), 'yyyy-MM-dd')}-${blog.slug}.pdf`;

  // Calculate read time
  const wordsPerMinute = 200;
  const words = blog.body.raw.split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);

  if (variant === 'grid') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group blog-card-tilt"
      >
        <div className="border border-card-border bg-card-bg overflow-hidden h-full flex flex-col">
          {/* Browser Header - 2 green dots for cards */}
          <div className="bg-linear-to-b from-[#2a2a2a] to-[#1a1a1a] border-b border-card-border px-4 py-2.5">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="text-xs text-secondary font-mono">
                {formattedDate}
              </div>
            </div>
          </div>

          <Link href={`/blog/${blog.slug}`} className="flex-1 flex flex-col">
            {/* Image with 16:9 aspect ratio (more horizontal, smaller) */}
            <div className="relative w-full aspect-video bg-muted overflow-hidden">
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              )}
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#28c840] transition-colors lowercase">
                {blog.title}
              </h3>
              <p className="text-secondary text-sm mb-4 line-clamp-3 lowercase flex-1">{blog.excerpt}</p>
            </div>
          </Link>

          <div className="px-6 pb-6 flex items-center justify-between text-xs text-secondary">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {readTime} min read
            </span>
            <a
              href="https://hashnode.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-secondary hover:text-[#28c840] transition-colors"
            >
              <SiHashnode className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.article>
    );
  }

  // Default variant for home page preview - Shows date-blog.pdf
  const homeDateFormat = `${format(new Date(blog.date), 'yyyy-MM-dd')}-blog.pdf`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group blog-card-tilt h-full"
    >
      <div className="h-full flex flex-col border border-card-border bg-card-bg overflow-hidden">
        {/* Browser Header - 2 green dots, shows date-blog.pdf */}
        <div className="bg-linear-to-b from-[#2a2a2a] to-[#1a1a1a] border-b border-card-border px-4 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="text-xs text-secondary font-mono">
              {homeDateFormat}
            </div>
          </div>
        </div>

        <Link href={`/blog/${blog.slug}`} className="flex-1 flex flex-col">
          {/* Image with 16:9 aspect ratio */}
          <div className="relative w-full aspect-video bg-muted overflow-hidden">
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            )}
          </div>

          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-lg font-bold mb-2 group-hover:text-[#28c840] transition-colors lowercase">
              {blog.title}
            </h3>
            <p className="text-secondary text-xs mb-3 line-clamp-2 lowercase flex-1">{blog.excerpt}</p>
          </div>
        </Link>

        <div className="px-5 pb-5 flex items-center justify-between text-xs">
          <span className="text-secondary flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {readTime} min
          </span>
          <a
            href="https://hashnode.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-secondary hover:text-[#28c840] transition-colors"
          >
            <SiHashnode className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

