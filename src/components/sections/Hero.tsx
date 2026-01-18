import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
          {siteConfig.headline}
        </h1>
        <p className="text-lg md:text-xl text-neutral-400">
          {siteConfig.subheadline}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-neutral-600 to-transparent" />
      </div>
    </section>
  );
}
