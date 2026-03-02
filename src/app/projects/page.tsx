'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/data/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  // Unique languages used
  const languages = [...new Set(projects.flatMap(p => p.techStack || []))];

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <PageHeader
            title="projects"
            description="systems built from scratch, because abstractions make me nervous."
            stats={[
              { label: 'projects', value: projects.length },
              { label: 'technologies', value: languages.length },
            ]}
            actionButton={{
              label: 'view on github',
              url: 'https://github.com/vennictus',
              icon: 'github',
            }}
          />

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16 md:mb-20">
              <div className="space-y-8 md:space-y-10">
                {featuredProjects.map((project, index) => (
                  <div key={project.slug} id={project.slug} className="scroll-mt-32 relative">
                    {/* Project index number */}
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hidden md:block absolute -left-10 top-10 text-2xl font-bold font-mono text-card-border/40 select-none"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.span>
                    <ProjectCard project={project} variant="stacked" index={index} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <div className="space-y-8 md:space-y-10">
                {otherProjects.map((project, index) => (
                  <div key={project.slug} id={project.slug} className="scroll-mt-32 relative">
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="hidden md:block absolute -left-10 top-10 text-2xl font-bold font-mono text-card-border/40 select-none"
                    >
                      {String(featuredProjects.length + index + 1).padStart(2, '0')}
                    </motion.span>
                    <ProjectCard
                      project={project}
                      variant="stacked"
                      index={index + featuredProjects.length}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* End of file */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-20 text-center"
          >
            <div className="inline-flex items-center gap-3 text-muted/30 text-[10px] font-mono">
              <div className="w-8 h-px bg-card-border" />
              eof
              <div className="w-8 h-px bg-card-border" />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
