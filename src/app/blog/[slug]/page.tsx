import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import SpaceBackground from '@/components/SpaceBackground';
import Navbar from '@/components/Navbar';
import BrowserHeader from '@/components/BrowserHeader';
import { getBlogBySlug } from '@/data/blogs';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return { title: 'Post Not Found' };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const formattedDate = `${blog.date.replace(/-/g, '-')}-blog.pdf`;

  return (
    <main className="relative min-h-screen">
      <SpaceBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary hover:text-foreground transition-colors mb-8 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to blog
          </Link>

          {/* Article card */}
          <article className="border border-card-border bg-card-bg overflow-hidden">
            <BrowserHeader date={formattedDate} />

            {/* Featured image */}
            {blog.image && (
              <div className="relative h-96 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/60 z-10" />
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover grayscale"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-12">
              {/* Title and meta */}
              <div className="mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {blog.title}
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <span className="category-badge">{blog.category}</span>
                  <span className="text-secondary text-sm">{blog.date}</span>
                </div>

                <p className="text-2xl text-secondary font-medium leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>

              {/* Article content */}
              <div className="prose prose-invert prose-lg max-w-none">
                <div
                  className="whitespace-pre-wrap text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.content.replace(/\n/g, '<br />') }}
                />
              </div>
            </div>
          </article>

          {/* Footer navigation */}
          <div className="mt-12 flex items-center justify-between">
            <Link
              href="/blog"
              className="btn-bordered px-6 py-3"
            >
              ← All posts
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
