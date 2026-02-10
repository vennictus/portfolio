'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Post } from 'contentlayer/generated';
import { format } from 'date-fns';
import { SiHashnode } from 'react-icons/si';
import { useState } from 'react';

interface BlogCardProps {
  blog: Post;
  variant?: 'default' | 'grid' | 'stacked';
  index?: number;
}

export default function BlogCard({ blog, variant = 'default', index = 0 }: BlogCardProps) {
  const [copied, setCopied] = useState(false);
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
        className="group blog-card-tilt w-full max-w-md"
      >
        <div className="border border-card-border bg-card-bg overflow-hidden h-full flex flex-col">
          {/* Browser Header - 2 green dots for cards */}
          <div className="bg-linear-to-b from-[#2a2a2a] to-[#1a1a1a] border-b border-card-border px-3 md:px-4 py-2 md:py-2.5">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="text-[10px] md:text-xs text-secondary font-mono">
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                />
              )}
            </div>

            <div className="p-4 md:p-5 lg:p-6 flex-1 flex flex-col">
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-[#28c840] transition-colors lowercase">
                {blog.title}
              </h3>
              <p className="text-secondary text-xs md:text-sm mb-3 md:mb-4 line-clamp-3 lowercase flex-1">{blog.excerpt}</p>
            </div>
          </Link>

          <div className="px-4 md:px-5 lg:px-6 pb-4 md:pb-5 lg:pb-6 flex items-center justify-between text-xs text-secondary">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              {readTime} min read
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://hashnode.com/@vennictus"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-secondary hover:text-[#28c840] transition-colors"
                title="View on Hashnode"
              >
                <SiHashnode className="w-4 h-4" />
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(`${window.location.origin}/blog/${blog.slug}`);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className="flex items-center gap-1 text-secondary hover:text-[#28c840] transition-colors"
                title="Copy link"
              >
                {copied ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                )}
              </button>
            </div>
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
      className="group blog-card-tilt h-full w-full max-w-sm"
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
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
          <div className="flex items-center gap-2">
            <a
              href="https://hashnode.com/@vennictus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-secondary hover:text-[#28c840] transition-colors"
              title="View on Hashnode"
            >
              <SiHashnode className="w-3 h-3" />
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(`${window.location.origin}/blog/${blog.slug}`);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="flex items-center gap-1 text-secondary hover:text-[#28c840] transition-colors"
              title="Copy link"
            >
              {copied ? (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

