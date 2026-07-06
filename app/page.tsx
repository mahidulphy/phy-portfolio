import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
   <>
    <header className="sticky z-50 top-0 bg-[#f2E9E3] border-b border-[#E5DDD6] ">
      <div className="max-w-7xl mx-auto px-6">
      <nav className="flex justify-between items-center py-0">
        <div> <Link href="/">
         <Image src="/logo-dark.svg" alt="mahidulphy logo" width={70} height={70} />
         </Link></div>
     
        <div className="flex items-center gap-6">
         <a href="#about" className="transition-colors duration-300 hover:text-[#E5A1B1]" >About</a>
         <a href="#skills" className="transition-colors duration-300 hover:text-[#E5A1B1]">Skills</a>
         <a href="#projects" className="transition-colors duration-300 hover:text-[#E5A1B1]" >Projects</a>
         <a href="#research" className="transition-colors duration-300 hover:text-[#E5A1B1]" >Research Lab</a>
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

          <button className="bg-[#E5A1B1] text-[#241D1C] px-6 py-3 rounded-full hover:bg-[#D999A9] transition-all duration-300 hover:scale-105">
            View Projects
          </button>

          <button className="border border-[#241D1C] text-[#241D1C] px-6 py-3 rounded-full hover:bg-[#241D1C] hover:text-[#F2E9E3] transition-all duration-300 hover:scale-100">
            Contact Me
          </button>

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

      
      
      
      
      
      
      
      
      
      
      
      <section id="skills">
        <h2>Skills</h2>
      </section>














      <section id="projects">
        <h2>Projects</h2>
      </section>

      <section id="research">
        <h2>Research Lab</h2>
      </section>

      <section id="contact">
        <h2>Contact</h2>
      </section>

    </main>
   </> 
  );
}