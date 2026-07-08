import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

import DesignHero from "@/components/design/DesignHero";
import DesignShowcase from "@/components/design/DesignShowcase";

export default function DesignPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F2E9E3] pt-20">

        <DesignHero />
        <DesignShowcase />
        
      </main>

      <Footer />

    </>
  );
}