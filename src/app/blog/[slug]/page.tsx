import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import BrowserHeader from '@/components/BrowserHeader';
import { MDXContent } from '@/components/mdx/MDXContent';
import { allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'post not found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  // Calculate read time
  const wordsPerMinute = 200;
  const words = post.body.raw.split(/\s+/).length;
  const readTime = Math.ceil(words / wordsPerMinute);

  const formattedDate = `${format(new Date(post.date), 'yyyy-MM-dd')}-${post.title.toLowerCase().replace(/\s+/g, '-')}.pdf`;

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary hover:text-[#28c840] transition-colors mb-6 group"
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
          <article className="bg-gradient-to-br from-[#0d0d0d] via-[#0a0a0a] to-[#050505] overflow-hidden terminal-editor shadow-[0_0_120px_rgba(40,200,64,0.2)] border border-[#28c840]/20">
            <BrowserHeader date={formattedDate} />

            {/* Terminal header bar */}
            <div className="bg-[#1a1a1a] border-b border-[#28c840]/20 px-6 py-3 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-[#28c840] font-mono text-xs">◆</span>
                <span className="text-[#28c840]/70 font-mono text-xs uppercase tracking-wider">reading mode</span>
              </div>
              <div className="flex-1 flex items-center justify-end gap-4 text-xs font-mono text-secondary">
                <span className="flex items-center gap-1">
                  <span className="text-[#28c840]">⚡</span>
                  {readTime} min
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-[#28c840]">◉</span>
                  {format(new Date(post.date), 'MMM dd, yyyy')}
                </span>
              </div>
            </div>

            {/* Featured image with terminal frame */}
            {post.image && (
              <div className="relative h-96 bg-[#000] overflow-hidden border-b border-[#28c840]/20">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#0a0a0a] z-10" />
                <div className="absolute inset-0 bg-[#28c840]/5 mix-blend-overlay" />
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover opacity-90"
                />
                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none opacity-10"
                     style={{
                       backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(40, 200, 64, 0.03) 2px, rgba(40, 200, 64, 0.03) 4px)'
                     }}
                />
              </div>
            )}

            {/* Content with terminal styling */}
            <div className="p-12 relative">
              {/* Title and meta */}
              <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#28c840] drop-shadow-[0_0_15px_rgba(40,200,64,0.5)] font-mono">
                  {post.title}
                </h1>

                <div className="flex items-center gap-4 text-sm font-mono">
                  <span className="text-secondary">{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
                  <span className="text-[#28c840]">◆</span>
                  <span className="text-secondary">{readTime} min read</span>
                  <span className="text-[#28c840]">◆</span>
                  <span className="text-[#28c840]/60">{post.category}</span>
                </div>

                <div className="mt-6 pl-4 border-l-2 border-[#28c840]/30">
                  <p className="text-lg text-secondary/90 font-mono leading-relaxed italic">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Separator */}
              <div className="mb-12 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#28c840]/30 to-transparent" />
                <span className="text-[#28c840]/50 text-xs font-mono">◆ ◆ ◆</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#28c840]/30 to-transparent" />
              </div>

              {/* Article content with enhanced styling */}
              <div className="font-mono text-base leading-loose blog-content">
                <MDXContent code={post.body.code} />
              </div>
            </div>

            {/* Terminal footer */}
            <div className="bg-[#1a1a1a] border-t border-[#28c840]/20 px-6 py-4 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2 font-mono text-xs text-[#28c840]/60">
                <span>◆</span>
                <span>END OF DOCUMENT</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-secondary">
                <span className="text-[#28c840]">✓</span>
                <span>100% LOADED</span>
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
