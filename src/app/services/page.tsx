"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInUp, StaggerContainer, StaggerItem, SlideInLeft, SlideInRight } from "@/components/Motion";
import { Package, Droplets, Sparkles, Wrench, Truck, ShieldCheck, Clock, CreditCard } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Package,
    title: "Free Installation",
    description: "We handle everything from delivery to setup. No cost to you, no disruption to your gym.",
  },
  {
    icon: Wrench,
    title: "Full Maintenance",
    description: "Regular restocking, cleaning, and technical support. We keep the machine running 24/7.",
  },
  {
    icon: ShieldCheck,
    title: "Licensing & Compliance",
    description: "All necessary permits, insurance, and regulatory compliance handled by our team.",
  },
  {
    icon: CreditCard,
    title: "Revenue Sharing",
    description: "Transparent revenue split on every transaction. Monthly reports and direct deposits.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service for gym owners and members alike.",
  },
  {
    icon: Truck,
    title: "Brand Partnerships",
    description: "Access to premium fragrance brands. We negotiate deals so you don't have to.",
  },
];

const machines = [
  {
    name: "Scentio Standard",
    sprays: "Up to 500 sprays",
    brands: "4 premium brands",
    price: "Pay-per-spray",
    image: "/images/creed-bottle.jpg",
  },
  {
    name: "Scentio Pro",
    sprays: "Up to 1000 sprays",
    brands: "8 premium brands",
    price: "Pay-per-spray",
    image: "/images/cologne-bottle.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-muted-bg">
          <div className="mx-auto max-w-4xl text-center">
            <FadeInUp>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Our Services
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Everything handled.
                <br />
                <span className="text-accent">You just say yes.</span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                From installation to maintenance, licensing to restocking — we manage every detail so you can focus on running your gym.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-white">
          <div className="mx-auto max-w-6xl">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <div className="group p-6 rounded-2xl hover:bg-muted-bg transition-colors border border-border">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                      <service.icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* How It Works Detailed */}
        <section className="py-20 px-6 bg-muted-bg">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <FadeInUp>
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
                  The Process
                </p>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  From first call to first spray
                </h2>
              </FadeInUp>
            </div>

            <div className="space-y-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <SlideInLeft>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/creed-bottle.jpg"
                      alt="Consultation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </SlideInLeft>
                <SlideInRight>
                  <div>
                    <span className="text-5xl font-bold text-accent/20">01</span>
                    <h3 className="text-2xl font-semibold text-foreground mt-2 mb-4">Consultation & Site Assessment</h3>
                    <p className="text-muted leading-relaxed">
                      We visit your gym, assess foot traffic, and identify the optimal location for the Scentio machine. We discuss your goals, answer questions, and provide a detailed proposal.
                    </p>
                  </div>
                </SlideInRight>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <SlideInLeft className="order-2 lg:order-1">
                  <div>
                    <span className="text-5xl font-bold text-accent/20">02</span>
                    <h3 className="text-2xl font-semibold text-foreground mt-2 mb-4">Installation & Setup</h3>
                    <p className="text-muted leading-relaxed">
                      Our team handles delivery, installation, and calibration. We train your staff on the basics and ensure everything is working perfectly before we leave.
                    </p>
                  </div>
                </SlideInLeft>
                <SlideInRight className="order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/perfume-spray.jpg"
                      alt="Installation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </SlideInRight>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <SlideInLeft>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/perfume-display.jpg"
                      alt="Ongoing Management"
                      fill
                      className="object-cover"
                    />
                  </div>
                </SlideInLeft>
                <SlideInRight>
                  <div>
                    <span className="text-5xl font-bold text-accent/20">03</span>
                    <h3 className="text-2xl font-semibold text-foreground mt-2 mb-4">Ongoing Management & Support</h3>
                    <p className="text-muted leading-relaxed">
                      We monitor usage, restock fragrances, handle maintenance, and provide monthly revenue reports. You get passive income without lifting a finger.
                    </p>
                  </div>
                </SlideInRight>
              </div>
            </div>
          </div>
        </section>

        {/* Machine Options */}
        <section className="py-20 px-6 bg-white">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <FadeInUp>
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
                  Machine Options
                </p>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Choose the right fit for your gym
                </h2>
              </FadeInUp>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {machines.map((machine) => (
                <StaggerItem key={machine.name}>
                  <div className="bg-muted-bg rounded-2xl overflow-hidden border border-border">
                    <div className="relative h-48">
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">{machine.name}</h3>
                      <ul className="space-y-2 text-muted text-sm">
                        <li className="flex items-center gap-2">
                          <Droplets size={16} className="text-accent" />
                          {machine.sprays}
                        </li>
                        <li className="flex items-center gap-2">
                          <Sparkles size={16} className="text-accent" />
                          {machine.brands}
                        </li>
                        <li className="flex items-center gap-2">
                          <CreditCard size={16} className="text-accent" />
                          {machine.price}
                        </li>
                      </ul>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-foreground text-background">
          <div className="mx-auto max-w-4xl text-center">
            <FadeInUp>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Ready to get started?
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
                Book a free consultation and site assessment. No commitment required.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <a
                href="/contact"
                className="inline-flex items-center justify-center font-medium bg-accent text-white px-8 py-3.5 rounded-full hover:bg-accent-light transition-colors"
              >
                Book a Free Call
              </a>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
