import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-neutral-600">
          © {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-8">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-white transition-colors"
          >
            X
          </a>
          <a
            href={`mailto:${siteConfig.social.email}`}
            className="text-sm text-neutral-500 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
