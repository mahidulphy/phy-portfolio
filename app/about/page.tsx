import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

import AboutHero from "@/components/about/AboutHero";
import MyStory from "@/components/about/MyStory";
import QuickFacts from "@/components/about/QuickFacts";
import FindMeOnline from "@/components/about/FindMeOnline";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F2E9E3]">

        <AboutHero />
        <MyStory />
        <QuickFacts />
        <FindMeOnline />

      </main>

      <Footer />
    </>
  );
}