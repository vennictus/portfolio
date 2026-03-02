'use client';

// Muted type color mapping for tech — desaturated palette
const typeColors: Record<string, string> = {
  // Fire type — compilers, low-level, WASM
  'webassembly': '#c0764a',
  'compiler design': '#c0764a',
  'binary encoding': '#c0764a',
  'game development': '#c0764a',
  // Water type — frontend frameworks, web
  'react': '#5a7ab8',
  'next.js': '#5a7ab8',
  'tailwind css': '#5a7ab8',
  'vercel': '#5a7ab8',
  'rest api': '#5a7ab8',
  // Electric type — languages, scripting
  'typescript': '#bfa840',
  'javascript': '#bfa840',
  'node.js': '#bfa840',
  // Grass type — systems, runtime
  'go': '#6a9e50',
  'filesystem': '#6a9e50',
  'object storage': '#6a9e50',
  // Steel type — C/C++, low-level I/O
  'c': '#9090a4',
  'c++': '#9090a4',
  'systems programming': '#9090a4',
  'terminal control': '#9090a4',
  'ansi escape sequences': '#9090a4',
  'low-level i/o': '#9090a4',
  // Dragon type — language design, advanced CS
  'language design': '#7a5ab8',
  'execution models': '#7a5ab8',
  'data structures': '#7a5ab8',
  // Psychic type — query engines, graph, data
  'graph databases': '#b86080',
  'query engines': '#b86080',
  'gremlin': '#b86080',
  // Ghost type — automation, tooling
  'automation': '#7a6a8e',
  'developer tools': '#7a6a8e',
  'msys2': '#7a6a8e',
  'mingw': '#7a6a8e',
  'windows': '#7a6a8e',
};

function getTypeColor(tech: string): string | undefined {
  return typeColors[tech.toLowerCase()];
}

interface TechBadgeProps {
  tech: string;
  index?: number;
}

export default function TechBadge({ tech, index = 0 }: TechBadgeProps) {
  const color = getTypeColor(tech);

  return (
    <span
      className="inline-flex items-center px-2.5 py-1 text-[10px] md:text-xs font-mono tracking-wider uppercase border transition-colors duration-200"
      style={{
        borderColor: color ? `${color}25` : 'var(--card-border)',
        color: color ? `${color}cc` : 'var(--secondary)',
        background: color ? `${color}06` : 'transparent',
      }}
    >
      {tech}
    </span>
  );
}
