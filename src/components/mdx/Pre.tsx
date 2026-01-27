"use client";

import { ComponentPropsWithoutRef, useRef, useState } from "react";

export function Pre({ children, ...props }: ComponentPropsWithoutRef<"pre">) {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (preRef.current) {
      const text = preRef.current.textContent || "";
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 px-2 py-1 text-xs bg-card-bg border border-card-border rounded opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Copy code"
      >
        {copied ? "copied!" : "copy"}
      </button>
      <pre
        ref={preRef}
        {...props}
        className="overflow-x-auto p-4 rounded-lg bg-card-bg border border-card-border"
      >
        {children}
      </pre>
    </div>
  );
}
