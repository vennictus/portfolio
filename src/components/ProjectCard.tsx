'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TechBadge from './TechBadge';
import ImageViewer from './ImageViewer';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'horizontal' | 'stacked';
  index?: number;
}

export default function ProjectCard({ project, variant = 'horizontal', index = 0 }: ProjectCardProps) {
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const ext = project.fileExt || '.ts';
  const formattedDate = `${project.date}-${project.slug}${ext}`;

  // Extension color based on language
  const extColorMap: Record<string, string> = {
    '.ts': 'text-[#3178c6]',
    '.tsx': 'text-[#3178c6]',
    '.c': 'text-[#a8b9cc]',
    '.cpp': 'text-[#f34b7d]',
    '.py': 'text-[#3572a5]',
    '.rs': 'text-[#dea584]',
    '.go': 'text-[#00add8]',
  };
  const extColor = extColorMap[ext] || 'text-muted';

  if (variant === 'stacked') {
    return (
      <>
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="group relative"
        >
          <div className="border border-card-border bg-card-bg overflow-hidden hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
            {/* Terminal bar header */}
            <div className="bg-background border-b border-card-border px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Traffic light dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/40" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/40" />
                </div>
                <span className="text-xs text-muted font-mono">
                  {formattedDate.split(ext)[0]}<span className={extColor}>{ext}</span>
                </span>
              </div>

              {/* GitHub icon — sleek, top-right */}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors duration-200"
                  title="View source on GitHub"
                >
                  <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              )}
            </div>

            {/* Split Layout: Image Left, Content Right */}
            <div className="flex flex-col md:flex-row">
              {/* Left: Image — clickable */}
              <div
                className="relative w-full md:w-2/5 bg-background flex items-center justify-center p-4 md:p-6 lg:p-8 cursor-zoom-in"
                onClick={() => project.image && setImageViewerOpen(true)}
              >
                {project.image && (
                  <div className="relative w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
                    />
                    {/* Zoom hint overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-background/80 backdrop-blur-sm text-xs text-muted font-mono px-3 py-1.5 border border-card-border">
                        click to expand
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Content */}
              <div className="flex-1 p-5 md:p-6 lg:p-8 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-accent group-hover:text-accent transition-colors lowercase">
                  {project.title}
                </h3>

                <p className="text-secondary text-xs md:text-sm mb-4 md:mb-5 lowercase leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Live link if available */}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent-secondary hover:text-accent text-xs font-mono lowercase transition-colors duration-200 mb-4"
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    live demo ↗
                  </a>
                )}

                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 md:gap-2 pt-3 border-t border-card-border">
                    {project.techStack.map((tech, i) => (
                      <TechBadge key={tech} tech={tech} index={i} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.article>

        {/* Image Viewer Modal */}
        {project.image && (
          <ImageViewer
            src={project.image}
            alt={project.title}
            isOpen={imageViewerOpen}
            onClose={() => setImageViewerOpen(false)}
          />
        )}
      </>
    );
  }

  // Horizontal variant for home page preview
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group h-full"
    >
      <Link href={`/projects#${project.slug}`} className="flex flex-col border border-card-border bg-card-bg overflow-hidden h-full hover:border-accent hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
        {/* Terminal bar header */}
        <div className="bg-background border-b border-card-border px-3 md:px-4 py-2 md:py-2.5 flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57]/30" />
            <span className="w-2 h-2 rounded-full bg-[#febc2e]/30" />
            <span className="w-2 h-2 rounded-full bg-[#28c840]/30" />
          </div>
          <span className="text-[10px] md:text-xs text-muted font-mono">
            {project.slug}<span className={extColor}>{ext}</span>
          </span>
        </div>

        {/* Image */}
        <div className="relative w-full bg-background flex items-center justify-center p-4 md:p-6">
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>

        <div className="p-4 md:p-5 flex-1 flex flex-col">
          <h3 className="text-base md:text-lg font-bold mb-2 text-accent lowercase">
            {project.title}
          </h3>
          <p className="text-muted text-xs mb-3 line-clamp-2 lowercase flex-1">{project.description}</p>

          <span className="text-xs text-accent-secondary/60 group-hover:text-accent-secondary lowercase inline-flex items-center gap-1 font-mono transition-colors">
            view project ↗
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
