'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';

export default function ProjectsPreview() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-end justify-between mb-2">
            <h2 className="text-3xl font-bold lowercase">projects</h2>
            <Link
              href="/projects"
              className="text-secondary hover:text-accent transition-colors flex items-center gap-2 group text-sm"
            >
              <span className="lowercase">view all projects</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <p className="text-secondary text-sm lowercase">things i've built and experiments i've done</p>
        </motion.div>

        {/* Horizontal scrolling cards */}
        <div className="relative -mx-6 px-6 overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            {featuredProjects.map((project, index) => (
              <div key={project.slug} className="snap-start">
                <ProjectCard project={project} variant="horizontal" index={index} />
              </div>
            ))}
          </div>

          {/* Gradient fade on edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
