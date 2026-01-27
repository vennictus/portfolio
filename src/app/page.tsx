import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';
import BlogPreview from '@/components/BlogPreview';
import ProjectsPreview from '@/components/ProjectsPreview';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Hero />

        <div id="quicklinks" className="max-w-7xl mx-auto px-6">
          <QuickLinks />
        </div>

        <BlogPreview />
        <ProjectsPreview />

        {/* Spacer for bottom */}
        <div className="h-16" />
      </div>
    </main>
  );
}
