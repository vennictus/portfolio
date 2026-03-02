import Hero from '@/components/Hero';
import QuickLinks from '@/components/QuickLinks';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        {/* Hero + QuickLinks share the same viewport */}
        <div className="relative min-h-screen flex items-center justify-center">
          <Hero />
          <QuickLinks />
        </div>
      </div>
    </main>
  );
}
