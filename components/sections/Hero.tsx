export default function Hero() {
  return (
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
  );
}