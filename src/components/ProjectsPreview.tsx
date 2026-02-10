'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';

export default function ProjectsPreview() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <section className="py-6 md:py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <div className="flex items-end justify-between mb-2">
            <h2 className="text-2xl md:text-3xl font-bold lowercase">projects</h2>
            <Link
              href="/projects"
              className="text-secondary hover:text-[#28c840] transition-colors flex items-center gap-1.5 md:gap-2 group text-xs md:text-sm"
            >
              <span className="lowercase hidden sm:inline">view all projects</span>
              <span className="lowercase inline sm:hidden">view all</span>
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
          <p className="text-secondary text-xs md:text-sm lowercase">things i've built and experiments i've done</p>
        </motion.div>

        {/* Projects grid - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} variant="horizontal" index={index} />
          ))}
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
