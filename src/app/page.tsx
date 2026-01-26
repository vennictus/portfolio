import SpaceBackground from '@/components/SpaceBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import QuickLinks from '@/components/QuickLinks';
import BlogPreview from '@/components/sections/BlogPreview';
import ProjectsPreview from '@/components/sections/ProjectsPreview';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <SpaceBackground />
      <Navbar />

      <div className="relative z-10">
        <Hero />

        <div id="quicklinks" className="max-w-7xl mx-auto px-6">
          <QuickLinks />
        </div>

        <BlogPreview />
        <ProjectsPreview />

        {/* Spacer for bottom */}
        <div className="h-32" />
      </div>
    </main>
  );
}
