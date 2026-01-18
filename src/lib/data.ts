import { Project, BlogPost } from "@/types";

export const projects: Project[] = [
  {
    id: "distributed-cache",
    name: "Distributed Cache",
    hook: "Redis-compatible cache that scales horizontally without coordination",
    techStack: ["Go", "gRPC", "Raft", "Docker"],
    whyItMatters:
      "Built to understand consensus algorithms at the implementation level. Most developers use distributed systems without knowing how they fail.",
    designDecisions:
      "Chose Raft over Paxos for understandability. Implemented consistent hashing for partition tolerance. Used gRPC for efficient inter-node communication.",
    tradeoffs:
      "Sacrificed some write performance for stronger consistency guarantees. No support for complex data structures—strings and hashes only.",
    constraints:
      "Single-threaded per partition to avoid lock contention. Memory-only, no persistence layer.",
    github: "https://github.com/yourusername/distributed-cache",
    demo: "https://cache-demo.yoursite.com",
  },
  {
    id: "realtime-collab",
    name: "Realtime Collaboration Engine",
    hook: "CRDT-based sync engine for building multiplayer apps",
    techStack: ["TypeScript", "WebSocket", "Yjs", "PostgreSQL"],
    whyItMatters:
      "Conflict-free replication is the future of local-first software. This was my deep dive into operational transforms vs CRDTs.",
    designDecisions:
      "Yjs for the CRDT implementation—battle-tested and performant. WebSocket with reconnection logic and offline queue.",
    tradeoffs:
      "Memory overhead from CRDT metadata. Eventually consistent, not strongly consistent.",
    constraints: "Browser-first. Server is just a relay, not source of truth.",
    github: "https://github.com/yourusername/realtime-collab",
  },
  {
    id: "type-safe-api",
    name: "TypeSafe API Generator",
    hook: "Generate fully typed API clients from OpenAPI specs at build time",
    techStack: ["TypeScript", "Node.js", "Zod", "OpenAPI"],
    whyItMatters:
      "Runtime type safety is not enough. This generates compile-time guarantees for API contracts.",
    designDecisions:
      "Zod for runtime validation with inferred types. Tree-shaking friendly output. No decorators or reflection.",
    tradeoffs:
      "Build step required. Generated code can be large for complex APIs.",
    github: "https://github.com/yourusername/typesafe-api",
  },
  {
    id: "perf-monitor",
    name: "Zero-Overhead Profiler",
    hook: "Production performance monitoring without the 5% overhead tax",
    techStack: ["Rust", "eBPF", "Prometheus", "Grafana"],
    whyItMatters:
      "Most APM tools add latency. Built this to prove you can have observability without compromise.",
    designDecisions:
      "eBPF for kernel-level tracing. Rust for the userspace daemon. Lock-free ring buffers for data collection.",
    tradeoffs: "Linux only. Requires kernel 5.4+. Some metrics need root.",
    constraints: "Must add less than 1% overhead in p99 latency.",
    github: "https://github.com/yourusername/perf-monitor",
    demo: "https://demo.perf-monitor.dev",
  },
];

// Set to true to show "Coming Soon" message instead of blog posts
export const blogComingSoon = true;

export const blogPosts: BlogPost[] = [
  {
    slug: "test-post",
    title: "Test Post",
    description: "This is a test post to verify MDX rendering works correctly.",
    date: "2024-01-01",
    readingTime: "1 min",
    tags: ["test"],
  },
];

export const siteConfig = {
  name: "Your Name",
  headline: "I build systems that don't break at 3am.",
  subheadline: "Engineer. Systems thinker. Occasionally writes.",
  about: [
    "I think in systems, not features. Every line of code is a liability.",
    "Currently obsessed with distributed systems and developer tooling.",
    "I optimize for learning velocity and shipping things that matter.",
    "Strong opinions, loosely held. Always happy to be proven wrong.",
  ],
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "you@example.com",
  },
};
