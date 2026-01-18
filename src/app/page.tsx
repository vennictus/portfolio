import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Projects />
      <Footer />
    </main>
  );
}
