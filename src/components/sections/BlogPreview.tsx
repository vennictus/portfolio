'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogCard from '../ui/BlogCard';
import { getFeaturedBlogs } from '@/lib/blogs';

export default function BlogPreview() {
  const featuredBlogs = getFeaturedBlogs();

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-4xl font-bold">From the blog</h2>
            <Link
              href="/blog"
              className="text-secondary hover:text-foreground transition-colors flex items-center gap-2 group"
            >
              <span>View all blog posts</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <p className="text-secondary">Thoughts, ideas, and explorations</p>
        </motion.div>

        {/* Stacked/overlapping cards layout */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {featuredBlogs.map((blog, index) => (
              <div key={blog.slug} className="relative" style={{ zIndex: 40 - index }}>
                <BlogCard blog={blog} variant="default" index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
