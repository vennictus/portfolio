import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        {/* Hero + QuickLinks share the same viewport */}
        <div className="relative min-h-screen flex items-center justify-center">
          <Hero />
        </div>
      </div>
    </main>
  );
}
