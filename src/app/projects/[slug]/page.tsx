import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SpaceBackground from '@/components/SpaceBackground';
import Navbar from '@/components/Navbar';
import BrowserHeader from '@/components/BrowserHeader';
import TechBadge from '@/components/TechBadge';
import { getProjectBySlug } from '@/lib/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const formattedDate = `${project.date.replace(/-/g, '-')}-project.html`;

  return (
    <main className="relative min-h-screen">
      <SpaceBackground />
      <Navbar />

      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back button */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-secondary hover:text-foreground transition-colors mb-8 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to projects
          </Link>

          {/* Project card */}
          <article className="border border-card-border bg-card-bg overflow-hidden">
            <BrowserHeader date={formattedDate} />

            {/* Featured image */}
            {project.image && (
              <div className="relative h-96 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-background/60 z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-12">
              {/* Title and meta */}
              <div className="mb-12">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {project.title}
                </h1>

                <p className="text-2xl text-secondary font-medium leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <TechBadge key={tech} tech={tech} index={index} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Project links */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-bordered px-6 py-3 inline-flex items-center gap-2"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        View Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-bordered px-6 py-3 inline-flex items-center gap-2"
                      >
                        <FaGithub className="text-lg" />
                        View Code
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="prose prose-invert prose-lg max-w-none border-t border-card-border pt-12">
                <div
                  className="whitespace-pre-wrap text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br />') }}
                />
              </div>
            </div>
          </article>

          {/* Footer navigation */}
          <div className="mt-12 flex items-center justify-between">
            <Link
              href="/projects"
              className="btn-bordered px-6 py-3"
            >
              ← All projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
