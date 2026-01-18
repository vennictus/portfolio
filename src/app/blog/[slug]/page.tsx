import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MDXComponents";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-black/80 backdrop-blur-sm border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/#blog"
            className="text-sm text-neutral-500 hover:text-white transition-colors"
          >
            ← Back to blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Meta */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
              <span>{post.frontmatter.date}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
              {post.frontmatter.hashnodeUrl && (
                <>
                  <span>·</span>
                  <a
                    href={post.frontmatter.hashnodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 hover:underline"
                  >
                    Read on Hashnode ↗
                  </a>
                </>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.frontmatter.title}
            </h1>
            <p className="text-xl text-neutral-400">
              {post.frontmatter.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {post.frontmatter.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-mono text-neutral-400 bg-neutral-900 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeHighlight],
                },
              }}
            />
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-neutral-800">
            <Link
              href="/#blog"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
