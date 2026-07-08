import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export default function ResearchPage() {
  return (
    <>
    <Header />
    <main className="max-w-5xl mx-auto px-6 py-24">

      <p className="uppercase tracking-widest text-[#895A47]">
        Research & Learning
      </p>

      <h1 className="mt-3 text-5xl font-bold text-[#241D1C]">
        Coming Soon
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#895A47]">
        I'm currently building this page.
        Here I'll share my learning journey,
        research interests, notes, and future goals.
      </p>

    </main>
    
    <Footer />
    </>
  );
}