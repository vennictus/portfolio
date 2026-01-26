'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BrowserHeader from './BrowserHeader';
import TechBadge from './TechBadge';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'horizontal' | 'stacked';
  index?: number;
}

export default function ProjectCard({ project, variant = 'horizontal', index = 0 }: ProjectCardProps) {
  const formattedDate = `${project.date.replace(/-/g, '-')}-project.html`;

  if (variant === 'stacked') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group card-tilt"
      >
        <Link href={`/projects/${project.slug}`} className="block border border-card-border bg-card-bg overflow-hidden">
          <BrowserHeader date={formattedDate} />

          <div className="relative h-72 bg-muted overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/60 z-10" />
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
            )}
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-hover-border transition-colors">
              {project.title}
            </h3>
            <p className="text-secondary text-sm mb-4 line-clamp-3">{project.description}</p>

            <button className="btn-bordered text-sm px-4 py-2 mb-4">
              View project
            </button>

            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.techStack.slice(0, 5).map((tech, i) => (
                  <TechBadge key={tech} tech={tech} index={i} />
                ))}
              </div>
            )}
          </div>
        </Link>
      </motion.article>
    );
  }

  // Horizontal variant for home page preview
  return (
    <motion.article
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-tilt flex-shrink-0 w-80"
    >
      <Link href={`/projects/${project.slug}`} className="block border border-card-border bg-card-bg overflow-hidden h-full">
        <BrowserHeader date={formattedDate} />

        <div className="relative h-48 bg-muted overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/60 z-10" />
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          )}
        </div>

        <div className="p-5">
          <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-hover-border transition-colors">
            {project.title}
          </h3>
          <p className="text-secondary text-xs mb-3 line-clamp-3">{project.description}</p>

          <button className="btn-bordered text-xs px-3 py-1.5 mb-3">
            View project
          </button>

          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <TechBadge key={tech} tech={tech} index={i} />
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
