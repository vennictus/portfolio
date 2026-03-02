'use client';

import { useState, useEffect } from 'react';

interface Heading {
  level: number;
  text: string;
  id: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-20" aria-label="Table of contents">
      <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-4">
        on this page
      </div>
      <div className="space-y-0.5">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`toc-link ${heading.level === 3 ? 'pl-5' : ''} ${
              activeId === heading.id ? 'active' : ''
            }`}
          >
            {heading.text.toLowerCase()}
          </a>
        ))}
      </div>
    </nav>
  );
}
