import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

import ProjectsHero from "@/components/projects/ProjectsHero";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F2E9E3] pt-20">
        <ProjectsHero />
        <FeaturedProject />
        <ProjectsGrid />
      </main>

      <Footer />
    </>
  );
}