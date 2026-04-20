import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import HowItWorks from "@/components/HowItWorks";
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
        <SelectedWorks />
        <HowItWorks />
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
