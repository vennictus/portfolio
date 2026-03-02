"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from "react";
import { Pre } from "./Pre";

// Extract text content from React children for ID generation
function getTextContent(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(getTextContent).join('');
  if (children && typeof children === 'object' && 'props' in children) {
    return getTextContent((children as { props: { children?: ReactNode } }).props.children);
  }
  return '';
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

// Custom Image component for MDX
const MDXImage = (props: ComponentPropsWithoutRef<"img">) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={props.alt || ""}
      className="rounded-lg my-4 w-full object-cover"
      loading="lazy"
    />
  );
};

const mdxComponents = {
  Image: MDXImage,
  img: MDXImage,
  a: (props: ComponentPropsWithoutRef<"a">) => {
    const { rel, ...rest } = props;
    const safeRelParts = new Set(
      `${rel ?? ""} noopener noreferrer`.trim().split(/\s+/)
    );

    return (
      <a
        {...rest}
        target="_blank"
        rel={[...safeRelParts].join(" ")}
        className="text-accent underline underline-offset-4 hover:text-accent-secondary transition-colors"
      />
    );
  },
  pre: Pre,
  h1: (props: ComponentPropsWithoutRef<"h1">) => {
    const id = slugify(getTextContent(props.children));
    return <h1 id={id} {...props} className="text-2xl md:text-3xl lg:text-4xl font-bold mt-6 md:mt-8 mb-3 md:mb-4 lowercase scroll-mt-24 text-accent" />;
  },
  h2: (props: ComponentPropsWithoutRef<"h2">) => {
    const id = slugify(getTextContent(props.children));
    return <h2 id={id} {...props} className="text-xl md:text-2xl lg:text-3xl font-bold mt-5 md:mt-6 mb-2 md:mb-3 lowercase scroll-mt-24 text-accent" />;
  },
  h3: (props: ComponentPropsWithoutRef<"h3">) => {
    const id = slugify(getTextContent(props.children));
    return <h3 id={id} {...props} className="text-lg md:text-xl lg:text-2xl font-bold mt-4 mb-2 lowercase scroll-mt-24 text-accent-secondary" />;
  },
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p {...props} className="my-3 md:my-4 leading-relaxed lowercase" />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul {...props} className="list-disc list-inside my-3 md:my-4 space-y-1.5 md:space-y-2 lowercase" />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol {...props} className="list-decimal list-inside my-3 md:my-4 space-y-1.5 md:space-y-2 lowercase" />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li {...props} className="lowercase" />
  ),
};

function MDXRenderer({
  Component,
}: {
  Component: ComponentType<{ components: typeof mdxComponents }>;
}) {
  return <Component components={mdxComponents} />;
}

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <div className="prose prose-invert max-w-none">
      <MDXRenderer Component={Component} />
    </div>
  );
}
