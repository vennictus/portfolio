import SpaceBackground from '@/components/SpaceBackground';
import Navbar from '@/components/Navbar';
import BlogCard from '@/components/ui/BlogCard';
import { getAllBlogs } from '@/lib/blogs';

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <main className="relative min-h-screen">
      <SpaceBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-secondary">Beep boop bop.</p>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={blog.slug} blog={blog} variant="grid" index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
