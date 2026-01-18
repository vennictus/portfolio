import { projects } from "@/lib/data";
import WindowCard from "@/components/ui/WindowCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <WindowCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
