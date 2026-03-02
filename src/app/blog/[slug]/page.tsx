import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ReadingProgress from '@/components/ReadingProgress';
import TableOfContents from '@/components/TableOfContents';
import { MDXContent } from '@/components/mdx/MDXContent';
import { allPosts } from 'contentlayer/generated';
import { format } from 'date-fns';
import ShareButton from '@/components/ShareButton';

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

// Extract headings from raw MDX for TOC
function extractHeadings(raw: string) {
  return raw
    .split('\n')
    .filter((line) => /^#{2,3}\s/.test(line))
    .map((line) => {
      const level = line.match(/^(#+)/)?.[1].length || 2;
      const text = line.replace(/^#+\s+/, '').trim();
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return { level, text, id };
    });
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

  const headings = extractHeadings(post.body.raw);

  return (
    <main className="relative min-h-screen">
      <ReadingProgress />

      <div className="relative z-10 pt-20 md:pt-28 pb-16 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-muted hover:text-accent transition-colors mb-8 md:mb-10 font-mono"
          >
            ← back
          </Link>

          <article>
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-accent font-mono lowercase">
              {post.title}
            </h1>

            {/* Meta strip */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs font-mono text-muted mb-6">
              <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
              <span className="text-card-border">·</span>
              <span>{readTime} min read</span>
              <span className="text-card-border">·</span>
              <span className="text-accent-secondary">{post.category}</span>
              <span className="ml-auto">
                <ShareButton title={post.title} excerpt={post.excerpt} />
              </span>
            </div>

            {/* Excerpt */}
            <p className="text-secondary text-sm md:text-base leading-relaxed mb-8 italic border-l-2 border-accent pl-4">
              {post.excerpt}
            </p>

            {/* Featured image */}
            {post.image && (
              <div className="relative w-full aspect-video overflow-hidden mb-10 border border-card-border bg-card-bg p-1">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Separator */}
            <div className="h-px bg-card-border mb-8" />

            {/* Article content */}
            <div className="blog-content text-sm md:text-base">
              <MDXContent code={post.body.code} />
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-card-border">
              <div className="flex items-center justify-between mb-8">
                <a
                  href="https://thestoryofcodeing.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted hover:text-accent-secondary transition-colors font-mono"
                  title="Read on Hashnode"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
                  </svg>
                  also on hashnode ↗
                </a>
                <ShareButton title={post.title} excerpt={post.excerpt} />
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors font-mono group"
              >
                <span className="group-hover:-translate-x-1 transition-transform">←</span>
                all posts
              </Link>
            </div>
          </article>
        </div>

        {/* Table of contents — fixed sidebar */}
        <aside className="hidden lg:block fixed top-28 right-[max(1.5rem,calc((100vw-42rem)/2-14rem))] w-44">
          <TableOfContents headings={headings} />
        </aside>
      </div>
    </main>
  );
}
