import Link from "next/link";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group py-6 border-b border-neutral-800 last:border-b-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-lg font-semibold text-white group-hover:text-red-500 transition-colors mb-2">
              {post.title}
            </h3>
          </Link>
          <p className="text-neutral-500 text-sm mb-3">{post.description}</p>
          <div className="flex flex-wrap items-center gap-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-neutral-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 md:min-w-[140px]">
          <span className="text-xs text-neutral-600">{post.date}</span>
          <span className="text-xs text-neutral-600">{post.readingTime}</span>
          <div className="flex gap-3 mt-2">
            <Link
              href={`/blog/${post.slug}`}
              className="text-xs text-neutral-400 hover:text-white transition-colors"
            >
              Read →
            </Link>
            {post.hashnodeUrl && (
              <a
                href={post.hashnodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-500 hover:text-red-500 transition-colors"
              >
                Hashnode ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
