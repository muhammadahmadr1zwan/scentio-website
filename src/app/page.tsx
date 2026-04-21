import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SelectedWorks from "@/components/SelectedWorks";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import ReadyCTA from "@/components/ReadyCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <SelectedWorks />
        <About />
        <FAQ />
        <ReadyCTA />
      </main>
      <Footer />
    </>
  );
}
