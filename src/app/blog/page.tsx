'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import SectionDivider from '@/components/SectionDivider';
import BlogCard from '@/components/BlogCard';
import { allPosts } from 'contentlayer/generated';

export default function BlogPage() {
  const blogs = allPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredBlogs = blogs.filter(post => post.featured);
  const recentBlogs = blogs.filter(post => !post.featured);

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Window-style Header */}
          <PageHeader
            title="blog"
            description="thoughts, tutorials, and random musings on code."
            stats={[
              { label: 'featured', value: 1 },
            ]}
            actionButton={{
              label: 'view on hashnode',
              url: 'https://hashnode.com/@vennictus',
              icon: 'hashnode',
            }}
          />

          {/* Featured Blogs */}
          {featuredBlogs.length > 0 && (
            <div className="mb-12 md:mb-16">
              <SectionDivider title="featured_reads" variant="primary" />
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {featuredBlogs.map((blog, index) => (
                  <BlogCard key={blog.slug} blog={blog} variant="grid" index={index} />
                ))}
              </div>
            </div>
          )}

          {/* All Blogs */}
          {recentBlogs.length > 0 && (
            <div>
              <SectionDivider
                title={featuredBlogs.length > 0 ? 'all_posts' : 'recent_posts'}
                variant="secondary"
              />
              <div className="flex flex-wrap justify-center gap-6">
                {recentBlogs.map((blog, index) => (
                  <BlogCard
                    key={blog.slug}
                    blog={blog}
                    variant="grid"
                    index={index + featuredBlogs.length}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {blogs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="border border-card-border bg-card-bg p-12">
                <p className="text-secondary text-lg lowercase font-mono">
                  {'>'} no posts found_
                </p>
                <p className="text-secondary text-sm lowercase mt-2">check back soon!</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
