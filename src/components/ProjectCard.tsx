'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TechBadge from './TechBadge';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'horizontal' | 'stacked';
  index?: number;
}

export default function ProjectCard({ project, variant = 'horizontal', index = 0 }: ProjectCardProps) {
  const formattedDate = `${project.date}-${project.slug}.html`;

  if (variant === 'stacked') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group project-card-tilt"
      >
        <div className="border border-card-border bg-card-bg overflow-hidden">
          {/* Browser Header - 2 green dots for cards */}
          <div className="bg-linear-to-b from-[#2a2a2a] to-[#1a1a1a] border-b border-card-border px-4 py-2.5">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="text-xs text-secondary font-mono">
                {formattedDate}
              </div>
            </div>
          </div>

          {/* Split Layout: Image Left, Content Right */}
          <div className="flex flex-col md:flex-row">
            {/* Left: Image (3:2 aspect ratio) */}
            <div className="relative w-full md:w-2/5 aspect-3/2 bg-muted overflow-hidden">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              )}
            </div>

            {/* Right: Content */}
            <div className="flex-1 p-6 flex flex-col">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors lowercase">
                {project.title}
              </h3>

              <p className="text-secondary text-sm mb-4 lowercase flex-1">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 mb-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-card-border hover:border-[#28c840] bg-transparent hover:bg-[#28c840]/10 text-foreground hover:text-[#28c840] px-4 py-2 text-sm lowercase transition-all duration-300"
                  >
                    <FaGithub className="w-4 h-4" />
                    github
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#28c840] bg-[#28c840]/10 hover:bg-[#28c840] text-[#28c840] hover:text-background px-4 py-2 text-sm lowercase transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    live demo
                  </a>
                )}
              </div>

              {/* Tech Stack */}
              {project.techStack && project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <TechBadge key={tech} tech={tech} index={i} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
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
      className="group project-card-tilt h-full"
    >
      <Link href={`/projects#${project.slug}`} className="flex flex-col border border-card-border bg-card-bg overflow-hidden h-full">
        {/* Browser Header - 2 green dots for cards */}
        <div className="bg-linear-to-b from-[#2a2a2a] to-[#1a1a1a] border-b border-card-border px-4 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="text-xs text-secondary font-mono">
              {formattedDate}
            </div>
          </div>
        </div>

        {/* Image with 3:2 aspect ratio */}
        <div className="relative w-full aspect-3/2 bg-muted overflow-hidden">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          )}
        </div>

        <div className="p-5 flex-1 flex flex-col">
          <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors lowercase">
            {project.title}
          </h3>
          <p className="text-secondary text-xs mb-3 line-clamp-2 lowercase flex-1">{project.description}</p>

          <span className="text-xs text-[#28c840] lowercase inline-flex items-center gap-1">
            view project
            <FaExternalLinkAlt className="w-2.5 h-2.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
