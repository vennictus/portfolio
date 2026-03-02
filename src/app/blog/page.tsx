'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import BlogCard from '@/components/BlogCard';
import { allPosts } from 'contentlayer/generated';

export default function BlogPage() {
  const blogs = allPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const featuredBlogs = blogs.filter(post => post.featured);
  const recentBlogs = blogs.filter(post => !post.featured);

  // Total reading time across all posts
  const totalReadTime = blogs.reduce((acc, blog) => {
    const words = blog.body.raw.split(/\s+/).length;
    return acc + Math.ceil(words / 200);
  }, 0);

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <PageHeader
            title="blog"
            description="thoughts, deep dives, and things i figured out the hard way."
            stats={[
              { label: 'articles', value: blogs.length },
              { label: 'min total read', value: totalReadTime },
            ]}
            actionButton={{
              label: 'view on hashnode',
              url: 'https://hashnode.com/@vennictus',
              icon: 'hashnode',
            }}
          />

          {/* Featured Blogs */}
          {featuredBlogs.length > 0 && (
            <div className="mb-16 md:mb-20">
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {featuredBlogs.map((blog, index) => (
                  <div key={blog.slug} className="w-full max-w-md">
                    <BlogCard blog={blog} variant="grid" index={index} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Blogs */}
          {recentBlogs.length > 0 && (
            <div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {recentBlogs.map((blog, index) => (
                  <div key={blog.slug} className="w-full max-w-md">
                    <BlogCard
                      blog={blog}
                      variant="grid"
                      index={index + featuredBlogs.length}
                    />
                  </div>
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

          {/* End of file */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 text-muted/30 text-[10px] font-mono">
              <div className="w-8 h-px bg-card-border" />
              eof
              <div className="w-8 h-px bg-card-border" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
