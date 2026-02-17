import Hero from "@/components/Hero";
import AboutQA from "@/components/AboutQA";
import SkillsQA from "@/components/SkillsQA";
import Tools from "@/components/Tools";
import ProjectsQA from "@/components/ProjectsQA";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="font-sans antialiased text-slate-800 bg-[var(--background)]">
      <Hero />
      <AboutQA />
      <SkillsQA />
      <Tools />
      <ProjectsQA />
      <Testimonials />
      <Experience />
      <Certifications />
      <Blog />
      <Contact />
    </main>
  );
}
