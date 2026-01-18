import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-white mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-white mt-6 mb-3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-white mt-4 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="text-neutral-300 leading-relaxed mb-4">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-red-500 hover:underline"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-neutral-300 mb-4 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-neutral-300 mb-4 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="text-neutral-300">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-red-500 pl-4 italic text-neutral-400 my-4">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-neutral-800 px-1.5 py-0.5 rounded text-sm font-mono text-red-400">
          {children}
        </code>
      );
    }
    return <code className={className}>{children}</code>;
  },
  pre: ({ children }) => (
    <pre className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 overflow-x-auto my-4">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-neutral-800 my-8" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-neutral-300">{children}</em>,
};
