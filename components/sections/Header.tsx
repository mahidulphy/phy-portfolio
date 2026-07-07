import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
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
  );
}