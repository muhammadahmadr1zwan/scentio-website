import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndustriesMarquee from "@/components/IndustriesMarquee";
import SelectedWorks from "@/components/SelectedWorks";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import FragranceShowcase from "@/components/FragranceShowcase";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ReadyCTA from "@/components/ReadyCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IndustriesMarquee />
        <SelectedWorks />
        <HowItWorks />
        <Stats />
        <FragranceShowcase />
        <About />
        <Testimonials />
        <FAQ />
        <ReadyCTA />
      </main>
      <Footer />
    </>
  );
}
