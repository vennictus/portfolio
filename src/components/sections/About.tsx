import { siteConfig } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">About</h2>

        <ul className="space-y-4">
          {siteConfig.about.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-4 text-neutral-400"
            >
              <span className="text-red-500 mt-1">→</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
