import { blogPosts, blogComingSoon } from "@/lib/data";
import BlogCard from "@/components/ui/BlogCard";

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Blog</h2>

        {blogComingSoon ? (
          <div className="text-center py-16">
            <p className="text-2xl text-neutral-500 mb-4">Coming Soon</p>
            <p className="text-neutral-600">
              Writing in progress. Check back later.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-neutral-800">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
