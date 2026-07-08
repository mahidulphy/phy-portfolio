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

        

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-2xl text-[#895A47]">
           ↓
          </div>

      </section>
  );
}