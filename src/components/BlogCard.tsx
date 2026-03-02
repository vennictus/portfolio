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

  const wordsPerMinute = 200;
  const words = blog.body.raw.split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);

  const dateFormatted = format(new Date(blog.date), 'MMM dd, yyyy');
  const formattedFilename = `${format(new Date(blog.date), 'yyyy-MM-dd')}-${blog.slug}.md`;

  if (variant === 'grid') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group w-full"
      >
        <Link href={`/blog/${blog.slug}`} className="block">
          <div className="border border-card-border bg-card-bg overflow-hidden hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            {/* Mac window bar */}
            <div className="bg-background border-b border-card-border px-3 md:px-4 py-2 md:py-2.5 flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/40" />
              </div>
              <span className="text-[10px] md:text-xs text-muted font-mono truncate">
                {formattedFilename}
              </span>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-video bg-background overflow-hidden">
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-500"
                />
              )}
              <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-[10px] text-accent-secondary font-mono px-2 py-1 border border-card-border">
                {readTime} min
              </div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-muted mb-3">
                <span>{dateFormatted}</span>
                <span className="text-card-border">·</span>
                <span className="text-accent-secondary/80">{readTime} min read</span>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-2 text-secondary group-hover:text-accent transition-colors lowercase leading-snug">
                {blog.title}
              </h3>
              <p className="text-muted text-xs md:text-sm line-clamp-2 lowercase leading-relaxed">{blog.excerpt}</p>
            </div>

            {/* Footer */}
            <div className="px-5 md:px-6 pb-4 md:pb-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className="text-muted hover:text-accent-secondary transition-colors cursor-pointer"
                  title="View on Hashnode"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    window.open('https://hashnode.com/@vennictus', '_blank');
                  }}
                >
                  <SiHashnode className="w-3.5 h-3.5" />
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigator.clipboard.writeText(`${window.location.origin}/blog/${blog.slug}`);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="text-muted hover:text-accent-secondary transition-colors"
                  title="Copy link"
                >
                  {copied ? (
                    <svg className="w-3.5 h-3.5 text-selection" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  )}
                </button>
              </div>
              <span className="text-accent-secondary/60 group-hover:text-accent-secondary font-mono text-xs transition-colors">
                read ↗
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  // Default variant for home page preview
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group h-full w-full max-w-sm"
    >
      <Link href={`/blog/${blog.slug}`} className="block h-full">
        <div className="h-full flex flex-col border border-card-border bg-card-bg overflow-hidden hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
          {/* Mac window bar */}
          <div className="bg-background border-b border-card-border px-4 py-2.5 flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#ff5f57]/30" />
              <span className="w-2 h-2 rounded-full bg-[#febc2e]/30" />
              <span className="w-2 h-2 rounded-full bg-[#28c840]/30" />
            </div>
            <span className="text-xs text-muted font-mono truncate">
              {formattedFilename}
            </span>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-video bg-background overflow-hidden">
            {blog.image && (
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
            )}
          </div>

          <div className="p-5 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-[10px] font-mono text-muted mb-2">
              <span>{dateFormatted}</span>
              <span className="text-card-border">·</span>
              <span className="text-accent-secondary/80">{readTime} min</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-secondary group-hover:text-accent transition-colors lowercase">
              {blog.title}
            </h3>
            <p className="text-muted text-xs mb-3 line-clamp-2 lowercase flex-1">{blog.excerpt}</p>
            <span className="text-accent-secondary/60 group-hover:text-accent-secondary font-mono text-xs transition-colors">
              read ↗
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

