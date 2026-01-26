import SpaceBackground from '@/components/SpaceBackground';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjects } from '@/data/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="relative min-h-screen">
      <SpaceBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-3 lowercase">projects</h1>
            <p className="text-lg text-secondary lowercase">beep boop bop.</p>
          </div>

          {/* Projects stacked layout */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} variant="stacked" index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
