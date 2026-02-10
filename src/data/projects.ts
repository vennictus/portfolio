export interface Project {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  image: string;
  techStack: string[];
  featured: boolean;
  liveLink?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'orion-wasm-compiler',
    title: 'ORION: WebAssembly Compiler + ASTRA Language',
    description: 'A compiler written in TypeScript that compiles a custom low-level language, ASTRA, directly into raw WebAssembly binary modules without relying on existing toolchains, intermediate WAT representations, or runtime interpreters.',
    content: `# ORION: WebAssembly Compiler + ASTRA Language

## Project Overview

ORION is a compiler written in TypeScript that compiles a custom low-level language, ASTRA, directly into raw WebAssembly binary modules. The project was built to understand how real programs are lowered into WebAssembly and executed by the VM without relying on existing toolchains, intermediate WAT representations, or runtime interpreters.

## Language Design

ASTRA itself is an expression-based language designed around explicit execution semantics, deterministic behavior, and minimal abstraction so every feature can be traced directly to its WebAssembly output.

## Compiler Architecture

The compiler follows a full multi-stage pipeline consisting of:

- **Tokenization**: Lexical analysis of source code
- **Recursive Descent Parsing**: Syntax analysis and validation
- **AST Construction**: Building the abstract syntax tree
- **Bytecode Emission**: Direct WebAssembly binary generation

## Technical Implementation

The backend manually encodes WebAssembly sections, instructions, and numeric formats including LEB128 and IEEE754 representations. Memory layout, control flow structures, and local variable indexing are all handled explicitly.

## Validation

To validate correctness, the compiler was tested using a full Mandelbrot renderer written entirely in ASTRA. The workload stresses nested control flow, floating-point arithmetic, stack discipline, and linear memory indexing, making visual output correctness a strong signal that execution semantics are implemented properly.

## Key Learnings

- WebAssembly binary format internals
- Compiler pipeline design
- Manual bytecode encoding
- Stack-based execution models
- Memory management at the VM level`,
    date: '2026-01-02',
    image: '/images/projects/orion.png',
    techStack: ['TypeScript', 'WebAssembly', 'Compiler Design', 'Binary Encoding', 'Language Design'],
    featured: true,
    githubUrl: 'https://github.com/vennictus/orion',
  },
  {
    slug: 'benz-graph-engine',
    title: 'benz: Graph Query Execution Engine',
    description: 'An in-memory graph query execution engine designed to demonstrate how modern query engines actually evaluate traversal pipelines internally using a lazy, pull-based Volcano-style execution model.',
    content: `# benz: Graph Query Execution Engine

## Project Overview

benz is an in-memory graph query execution engine designed to demonstrate how modern query engines actually evaluate traversal pipelines internally. Instead of building a full database system, the project focuses specifically on the execution layer, implementing a lazy, pull-based Volcano-style execution model inspired by real database engines and graph traversal frameworks.

## Graph Representation

The engine represents graphs using index-free adjacency, where vertices directly own incoming and outgoing edges to eliminate lookup overhead. This design choice mirrors how modern graph databases optimize for traversal performance.

## Query Execution Model

Queries are executed through an interpreter-driven pipeline that uses execution tokens similar to Gremlin traversals. Each pipeline stage is implemented as a composable pipetype such as:

- Vertex selection
- Directional traversal
- Filtering
- Uniqueness enforcement
- Result limiting

## Execution Characteristics

Execution is deterministic and resumable, meaning queries can be partially consumed and resumed without recomputation. The system also exposes query plans through an explain interface, making execution behavior visible and easier to reason about.

## Purpose

The goal of the project is to make database execution models concrete and understandable rather than hidden behind optimizers and abstractions. It serves as both a learning platform and a reference implementation for understanding how real database engines work internally.

## Technical Highlights

- Volcano-style iterator model
- Lazy evaluation and pull-based execution
- Gremlin-inspired traversal semantics
- Deterministic and resumable execution
- Query plan visualization`,
    date: '2026-01-05',
    image: '/images/projects/benz.png',
    techStack: ['Graph Databases', 'Query Engines', 'Gremlin', 'Execution Models', 'Data Structures'],
    featured: true,
    githubUrl: 'https://github.com/vennictus/benz',
  },
  {
    slug: 'kilo-txt-editor',
    title: 'kilo-txt-editor: Terminal Text Editor in Pure C',
    description: 'A lightweight text editor implemented entirely in pure C using raw terminal control, ANSI escape sequences, and low-level file operations, with zero external libraries.',
    content: `# kilo-txt-editor: Terminal Text Editor in Pure C

## Project Overview

kilo-txt-editor is a lightweight text editor implemented entirely in pure C using raw terminal control, ANSI escape sequences, and low-level file operations. The project avoids all external libraries and frameworks, forcing direct interaction with terminal input modes, rendering logic, and memory-managed text buffers.

## Purpose

The goal was to understand how interactive terminal applications function at a systems level rather than relying on existing editor frameworks.

## Core Features

The editor implements:

- Character insertion and deletion
- Newline handling with row splitting and merging
- Smooth horizontal and vertical scrolling
- Accurate cursor positioning across tab-expanded content
- Incremental search with live highlighting
- Syntax highlighting for C and C++
- Dirty state tracking
- Status bar and message bar UI components

## Technical Implementation

Rendering is performed through a custom buffer system optimized to minimize terminal redraw cost. The project required careful handling of:

- Raw input streams
- Real-time rendering constraints
- Memory-safe text manipulation
- Terminal escape sequence management

## Result

A fully usable terminal editor built entirely from low-level primitives, demonstrating deep understanding of systems programming, terminal control, and memory management.

## Key Challenges

- Direct terminal I/O without libraries
- Efficient screen rendering
- Memory-safe buffer management
- Syntax highlighting implementation
- Cross-platform terminal compatibility`,
    date: '2025-11-17',
    image: '/images/projects/kilo.jpg',
    techStack: ['C', 'Systems Programming', 'Terminal Control', 'ANSI Escape Sequences', 'Low-level I/O'],
    featured: true,
    githubUrl: 'https://github.com/vennictus/kilo-txt-editor',
  },
  {
    slug: 'schlussel-object-storage',
    title: 'Schlussel: Object Storage Engine',
    description: 'A minimal object storage server that provides a binary-safe HTTP interface for storing, retrieving, listing, and deleting objects using filesystem-backed persistence.',
    content: `# Schlussel: Object Storage Engine

## Project Overview

Schlussel is a minimal object storage server implemented in Node.js and TypeScript that provides a binary-safe HTTP interface for storing, retrieving, listing, and deleting objects using filesystem-backed persistence. The system models object storage semantics using path-like keys, allowing arbitrarily nested namespaces while maintaining direct mapping to filesystem structures.

## API Design

The server exposes REST endpoints for:

- Object upload (PUT)
- Object retrieval (GET)
- Prefix-based listing (LIST)
- Object deletion (DELETE)

## Storage Architecture

Storage is designed to be binary-safe and supports large arbitrary payloads without transformation. Security is handled through path traversal protection and strict key validation.

The storage layout mirrors real-world object storage systems by mapping logical keys directly to disk hierarchy, allowing predictable persistence behavior.

## Use Cases

The project focuses on implementing core storage layer mechanics without introducing distributed complexity, making it useful as:

- A learning platform for understanding object storage internals
- A local storage backend for deployment experiments
- A foundation for building more complex storage systems

## Technical Highlights

- Binary-safe storage and retrieval
- Path-based key addressing
- Recursive prefix listing
- Filesystem-backed persistence
- Security through traversal protection
- REST API design

## Current Usage

Currently used as a storage layer in deployment tooling experiments, demonstrating practical applicability beyond educational purposes.`,
    date: '2025-12-25',
    image: '/images/projects/schlussel.png',
    techStack: ['Node.js', 'TypeScript', 'Object Storage', 'REST API', 'Filesystem'],
    featured: true,
    githubUrl: 'https://github.com/vennictus/schlussel',
  },
  {
    slug: 'cslipy-cpp-toolchain',
    title: 'cslipy: C++ Toolchain Automation',
    description: 'A Windows-focused automation tool that eliminates the friction involved in setting up a working C++ development environment, reducing multi-hour manual setup into a single command.',
    content: `# cslipy: C++ Toolchain Automation

## Project Overview

cslipy is a Windows-focused automation tool designed to eliminate the friction involved in setting up a working C++ development environment. The tool automates installation and configuration of MSYS2, MinGW-w64 compilers, debugging tools, and build utilities, reducing multi-hour manual setup processes into a single command workflow.

## Automation Pipeline

The installer coordinates:

- MSYS2 bootstrapping
- Package installation through pacman
- Environment PATH configuration
- Toolchain verification through test builds
- Detection of existing installations to avoid duplication

## Features

The tool ensures that compilers and debuggers are globally accessible across terminal sessions and development environments. It handles:

- Automatic dependency resolution
- Version compatibility checking
- Environment variable management
- Verification builds to confirm setup
- Idempotent installation (safe to re-run)

## Purpose

The project focuses on developer experience engineering, reproducibility, and environment reliability, ensuring that new development environments can be provisioned quickly and consistently.

## Impact

Eliminates the common pain point of C++ environment setup on Windows, which typically involves:

- Multiple manual downloads
- Complex PATH configuration
- Compiler compatibility issues
- Missing dependencies
- Hours of troubleshooting

All reduced to a single command execution.

## Technical Highlights

- Automated package management
- Environment configuration
- Cross-session persistence
- Installation verification
- Error handling and recovery`,
    date: '2025-08-31',
    image: '/images/projects/cslipy.png',
    techStack: ['C++', 'MSYS2', 'MinGW', 'Windows', 'Automation', 'Developer Tools'],
    featured: true,
    githubUrl: 'https://github.com/vennictus/cslipy',
  },
  {
    slug: 'tetris-production',
    title: 'Tetris: Production Web Application',
    description: 'A fully playable browser-based Tetris implementation with smooth rendering, responsive controls, and stable gameplay. Handled 1500+ simultaneous players during a live college event.',
    content: `# Tetris: Production Web Application

## Project Overview

This project is a fully playable browser-based Tetris implementation built using React, Next.js, and Tailwind CSS. The game was designed to replicate classic Tetris mechanics while maintaining smooth rendering, responsive controls, and stable gameplay across devices.

## Deployment

The application was deployed using a GitHub-integrated Vercel pipeline, allowing continuous deployment and real-time updates. Every push to the main branch triggers automatic deployment, demonstrating modern CI/CD practices.

## Core Gameplay Systems

The implementation includes:

- Piece generation with proper randomization
- Rotation logic with wall kicks
- Collision detection
- Line clearing with animation
- Scoring system with combo multipliers
- Timer-based session control
- Progressive difficulty scaling

## Technical Implementation

The game uses state-driven rendering and efficient update loops to maintain responsive gameplay even during fast drop sequences. Key technical features include:

- React hooks for game state management
- RequestAnimationFrame for smooth rendering
- Keyboard event handling with debouncing
- Local storage for high score persistence
- Responsive design for mobile and desktop

## Real-World Usage

The application was used in a college technology fair where it was **played by over 1500 people** during the event, demonstrating the application's stability, performance, and appeal.

This real-world deployment validated:

- Stability of the deployment infrastructure
- Consistent performance across devices
- Reliability of the game logic
- User engagement and gameplay quality

## Technical Highlights

- Production-ready React application
- Vercel deployment with CI/CD
- State management and game loops
- Performance optimization
- Real-world load testing`,
    date: '2025-06-09',
    image: '/images/projects/tetris.png',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Game Development'],
    featured: true,
    liveLink: 'https://tetris-nine-amber.vercel.app/',
    githubUrl: 'https://github.com/vennictus/tetris',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured).slice(0, 6);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
