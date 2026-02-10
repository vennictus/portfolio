'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { allPosts } from 'contentlayer/generated';

export default function BlogPreview() {
  const featuredBlogs = allPosts
    .filter((post) => post.published && post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <section className="py-6 md:py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <div className="flex items-end justify-between mb-2">
            <h2 className="text-2xl md:text-3xl font-bold lowercase">from the blog</h2>
            <Link
              href="/blog"
              className="text-secondary hover:text-[#28c840] transition-colors flex items-center gap-1.5 md:gap-2 group text-xs md:text-sm"
            >
              <span className="lowercase hidden sm:inline">view all posts</span>
              <span className="lowercase inline sm:hidden">view all</span>
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
          <p className="text-secondary text-xs md:text-sm lowercase">thoughts, ideas, and explorations</p>
        </motion.div>

        {/* Stacked/overlapping cards layout */}
        <div className="relative flex justify-center">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-6">
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
