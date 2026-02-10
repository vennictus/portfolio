"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import type { ComponentPropsWithoutRef, ComponentType } from "react";
import { Pre } from "./Pre";

// Custom Image component for MDX
const MDXImage = (props: ComponentPropsWithoutRef<"img">) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={props.alt || ""}
      className="rounded-lg my-4 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
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
        className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
      />
    );
  },
  pre: Pre,
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 {...props} className="text-2xl md:text-3xl lg:text-4xl font-bold mt-6 md:mt-8 mb-3 md:mb-4 lowercase" />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 {...props} className="text-xl md:text-2xl lg:text-3xl font-bold mt-5 md:mt-6 mb-2 md:mb-3 lowercase" />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 {...props} className="text-lg md:text-xl lg:text-2xl font-bold mt-4 mb-2 lowercase" />
  ),
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
