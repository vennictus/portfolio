"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about", section: "about" },
  { label: "Blog", href: "#blog", section: "blog" },
  { label: "Projects", href: "#projects", section: "projects" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.section);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            return;
          }
        }
      }

      // If at top of page, no section is active
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center justify-center gap-12">
          {navItems.map((item) => (
            <li key={item.section}>
              <Link
                href={item.href}
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeSection === item.section
                    ? "text-red-500 nav-glow"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
