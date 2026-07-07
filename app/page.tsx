import Image from "next/image";
import Link from "next/link";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import DesignCard from "@/components/DesignCard";
import {
  Code,
  Palette,
  ChartColumn,
  Atom,
} from "lucide-react";
export default function Home() {
  return (
   <>
    <header className="sticky z-50 top-0 bg-[#f2E9E3] border-b border-[#E5DDD6] ">
      <div className="max-w-7xl mx-auto px-6">
      <nav className="flex justify-between items-center py-0">
        <div> <Link href="/">
         <Image src="/logo-dark.svg" alt="mahidulphy logo" width={70} height={70} loading="eager" />
         </Link></div>
     
        <div className="flex items-center gap-6">
         <a href="#about" className="transition-colors duration-300 hover:text-[#E5A1B1]" >About</a>
         <a href="#skills" className="transition-colors duration-300 hover:text-[#E5A1B1]">Skills</a>
         <a href="#projects" className="transition-colors duration-300 hover:text-[#E5A1B1]" >Projects</a>
         <a href="#research" className="transition-colors duration-300 hover:text-[#E5A1B1]" >Research</a>
         <a href="#design" className="transition-colors duration-300 hover:text-[#E5A1B1]" >Design</a>
         <a href="#contact" className="transition-colors duration-300 hover:text-[#E5A1B1]" >Contact</a>
        </div>

      </nav>
      </div>
    </header>
    
    




    <main>
      <section className="relative min-h-screen flex flex-col justify-center items-center gap-6 px-6">

        <p className="text-sm tracking-widest uppercase text-[#895A47]">
          Hello, I'm
        </p>

        <h1 className="text-4xl md:text-7xl mt-2 font-bold text-[#241D1C]">
          Mahidul Islam
        </h1>

        <p className="text-center text-base md:text-lg max-w-xl mt-2 text-[#895A47]">
          Where design, code, and science connect.
        </p>

        <div className="flex mt-4 gap-4">

          <a href="#projects" className="bg-[#E5A1B1] text-[#241D1C] px-6 py-3 rounded-full hover:bg-[#D999A9] transition-all duration-300 hover:scale-105">
            View Projects
          </a>

          <a href="#contact" className="border border-[#241D1C] text-[#241D1C] px-6 py-3 rounded-full hover:bg-[#241D1C] hover:text-[#F2E9E3] transition-all duration-300">
            Contact Me
          </a>

        </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-2xl text-[#895A47]">
           ↓
          </div>

      </section>








      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <p className="uppercase tracking-widest text-[#895A47]">
         About
        </p>

        <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
         Building skills. Exploring ideas.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#895A47]">
         I'm Mahidul, a student exploring frontend development, UI design,
         artificial intelligence, and nuclear physics. I enjoy turning ideas
         into clean digital experiences while constantly learning and improving.
        </p>

        <Link href="/about" className="inline-block mt-8 rounded-full border border-[#241D1C] px-6 py-3 transition-all duration-300 hover:bg-[#241D1C] hover:text-[#F2E9E3]">
         Read More →
        </Link>
      </section>

      
      
      
      
      
      
      
      
      
      
      
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24">
       <p className="uppercase tracking-widest text-[#895A47]">
          Skills
       </p>

       <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
         My Technical Skills
       </h2>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> 
         
          <SkillCard
           icon={Code}
           title="Development"
           description="Building responsive and modern web applications."
           skills={[
             "HTML",
             "Tailwind CSS",
             "Next.js",
           ]}
          />

          <SkillCard
           icon={Palette}
           title="Design"
           description="Creating clean and modern user interfaces."
           skills={[
             "Canva",
             "Adobe Photoshop",
           ]}
          />

          <SkillCard
           icon={ChartColumn}
           title="Marketing"
            description="Running and optimizing digital advertising campaigns."
           skills={[
             "Google Ads",
             "Meta Ads",
           ]}
          />

          <SkillCard
           icon={Atom}
           title="Research"
           description="Exploring AI and nuclear science concepts."
           skills={[
             "Artificial Intelligence",
             "Nuclear Physics",
           ]}
          />
        </div>
      </section>














      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">

        <p className="uppercase tracking-widest text-[#895A47]">
          Projects
        </p>

        <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
          Things I'm Building
        </h2>
  
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#895A47]">
          A collection of projects where I explore frontend development,
          design, and modern web technologies.
        </p>

        <div className="mt-12">
          <ProjectCard
             image="/projects/phy-portfolio.png"
             title="PHY Portfolio"
             description="A modern portfolio website built with Next.js, React, and Tailwind CSS."
             technologies={[
               "Next.js",
               "React",
               "Tailwind CSS",
             ]}
             
             github="#"
             live="#"
             status=" In Progress"
          />
       </div>

      </section>











<section id="research" className="max-w-7xl mx-auto px-6 py-24">

  <p className="uppercase tracking-widest text-[#895A47]">
    Research & Learning
  </p>

  <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
    Exploring ideas beyond the classroom.
  </h2>

  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#895A47]">
    I'm currently building this section.
    It will showcase my learning journey, research interests,
    future goals, and the ideas I'm exploring.
  </p>

  <div className="mt-12 rounded-3xl border border-dashed border-[#E5A1B1] bg-[#FCF8F5] p-12 text-center">

    <div className="text-6xl">
      🚀
    </div>

    <h3 className="mt-6 text-3xl font-bold text-[#241D1C]">
      Coming Soon
    </h3>

    <p className="mt-4 max-w-xl mx-auto leading-7 text-[#895A47]">
      This section is under development.
      I'll soon be sharing my learning journey,
      research interests, and future projects here.
    </p>
    
  </div>
  <Link
    href="/research"
    className="inline-block mt-8 rounded-full border border-[#241D1C] px-6 py-3 transition-all duration-300 hover:bg-[#241D1C] hover:text-[#F2E9E3]"
  >
    Read More →
  </Link>

</section>



      <section id="design" className="max-w-7xl mx-auto px-6 py-24">

  <p className="uppercase tracking-widest text-[#895A47]">
    Design
  </p>

  <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
    Featured Designs
  </h2>

  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#895A47]">
    A selection of my favorite creative works in branding,
    social media, posters, and digital design.
  </p>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    <DesignCard
      image="/design/amr-poster.jpg"
      title="AMR Awareness Poster"
      description="Designed for a college presentation to explain antimicrobial resistance."
      category="Educational Poster"
    />

    <DesignCard
      image="/design/argentina-offer.jpg"
      title="Argentina Victory Campaign"
      description="Social media promotional design created for a restaurant campaign."
      category="Social Media"
    />

    <DesignCard
      image="/design/hoodie.jpg"
      title="College Hoodie Design"
      description="A custom hoodie concept created for my college."
      category="Branding"
    />

  </div>

  <Link
    href="/design"
    className="inline-block mt-10 rounded-full border border-[#241D1C] px-6 py-3 transition-all duration-300 hover:bg-[#241D1C] hover:text-[#F2E9E3]"
  >
    View All Designs →
  </Link>

</section>













<section id="contact" className="max-w-7xl mx-auto px-6 py-24">

  <p className="uppercase tracking-widest text-[#895A47]">
    Contact
  </p>

  <h2 className="mt-3 text-4xl font-bold text-[#241D1C]">
    Let's Connect
  </h2>

  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#895A47]">
    Whether you have a project, collaboration, or simply want to say hello,
    feel free to reach out. I'm always happy to connect.
  </p>

  <div className="mt-12 rounded-xl border border-[#E5DDD6]  p-10">

    <div className="grid gap-8 md:grid-cols-2">

      <div>
        <p className="text-sm uppercase tracking-widest text-[#895A47]">
          Email
        </p>

        <a
          href="mailto:your@email.com"
          className="mt-2 inline-block text-xl font-semibold text-[#241D1C] hover:text-[#E5A1B1]"
        >
          mahidulphy@yahoo.com
        </a>
      </div>

      <div>
        <p className="text-sm uppercase tracking-widest text-[#895A47]">
          Location
        </p>

        <p className="mt-2 text-xl font-semibold text-[#241D1C]">
          Bangladesh
        </p>
      </div>

      <div>
        <p className="text-sm uppercase tracking-widest text-[#895A47]">
          GitHub
        </p>

        <a
          href="https://github.com/mahidulphy"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-xl font-semibold text-[#241D1C] hover:text-[#E5A1B1]"
        >
          github.com/mahidulphy
        </a>
      </div>

      <div>
        <p className="text-sm uppercase tracking-widest text-[#895A47]">
          Status
        </p>

        <p className="mt-2 text-xl font-semibold text-[#241D1C]">
          Open to Learning & Collaboration
        </p>
      </div>

    </div>

    <div className="mt-10 flex flex-wrap gap-4">

      <a
        href="mailto:your@email.com"
        className="rounded-full bg-[#E5A1B1] px-6 py-3 font-semibold text-[#241D1C] transition-all duration-300 hover:bg-[#D999A9]"
      >
        Send Email
      </a>

      <a
        href="https://github.com/mahidulphy"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#241D1C] px-6 py-3 font-semibold transition-all duration-300 hover:bg-[#241D1C] hover:text-[#FCF8F5]"
      >
        Visit GitHub
      </a>

    </div>

  </div>

</section>

    </main>


 







    <footer className="border-t border-[#E5DDD6] bg-[#FCF8F5]">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="flex flex-col md:flex-row items-center justify-between gap-10">

      {/* Left */}

      <div>
        <Image
  src="/logo-dark.svg"
  alt="Mahidul PHY"
  width={80}
  height={80}
/>
        <h2 className="text-3xl font-bold text-[#241D1C]">
          Mahidul PHY
        </h2>

        <p className="mt-4 max-w-md leading-7 text-[#895A47]">
          Building skills, exploring ideas,
          and creating meaningful digital experiences.
        </p>

      </div>

      {/* Right */}

      <div className="flex gap-6">

        <Link href="/about" className="hover:text-[#E5A1B1]">
          About
        </Link>

        <Link href="/projects" className="hover:text-[#E5A1B1]">
          Projects
        </Link>

        <Link href="/design" className="hover:text-[#E5A1B1]">
          Design
        </Link>

        <Link href="/research" className="hover:text-[#E5A1B1]">
          Research
        </Link>

      </div>

    </div>

    <div className="mt-12 border-t border-[#E5DDD6] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-[#895A47]">
        © 2026 Mahidul PHY. All rights reserved.
      </p>

      <p className="text-[#895A47]">
        Designed & Developed by Mahidul Islam.
      </p>

    </div>

  </div>

</footer>









   </> 
  );
}