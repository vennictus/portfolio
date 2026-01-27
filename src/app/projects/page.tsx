'use client';

import PageHeader from '@/components/PageHeader';
import SectionDivider from '@/components/SectionDivider';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/data/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Window-style Header */}
          <PageHeader
            title="projects"
            description="building cool stuff, one commit at a time."
            stats={[
              { label: 'featured', value: 4 },
            ]}
            actionButton={{
              label: 'view on github',
              url: 'https://github.com/yourusername',
              icon: 'github',
            }}
          />

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <SectionDivider title="featured" variant="primary" />
              <div className="space-y-8">
                {featuredProjects.map((project, index) => (
                  <div key={project.slug} id={project.slug} className="scroll-mt-32">
                    <ProjectCard project={project} variant="stacked" index={index} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <SectionDivider title="more_projects" variant="secondary" />
              <div className="space-y-8">
                {otherProjects.map((project, index) => (
                  <div key={project.slug} id={project.slug} className="scroll-mt-32">
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
        </div>
      </div>
    </main>
  );
}
