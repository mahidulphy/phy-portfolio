import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

import ContactHero from "@/components/contact/ContactHero";
import ContactLinks from "@/components/contact/ContactLinks";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F2E9E3] pt-20">

        <ContactHero />
        <ContactLinks />

      </main>

      <Footer />
    </>
  );
}