"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/Motion";
import { Star, Building2, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Building2, value: "25+", label: "Partner Gyms" },
  { icon: Users, value: "50K+", label: "Monthly Sprays" },
  { icon: TrendingUp, value: "35%", label: "Avg. Revenue Increase" },
  { icon: Star, value: "4.8", label: "Member Rating" },
];

const testimonials = [
  {
    quote: "Scentio has been a game-changer for our member experience. It differentiates us from other gyms and adds a touch of luxury.",
    author: "Marcus Chen",
    role: "Owner, Iron Pump Fitness",
    location: "Miami, FL",
  },
  {
    quote: "The revenue is great, but what surprised me was how much members talk about it. It creates a real buzz.",
    author: "Sarah Williams",
    role: "Manager, Peak Performance Gym",
    location: "Austin, TX",
  },
  {
    quote: "Zero hassle for us. They handle everything, the machine looks sleek, and our members love discovering new scents.",
    author: "David Park",
    role: "Director, Urban Athletics",
    location: "Seattle, WA",
  },
];

const partnerBrands = [
  { name: "Noir Absolu", category: "Woody" },
  { name: "Aqua Sport", category: "Fresh" },
  { name: "Oud Reserve", category: "Oriental" },
  { name: "Citrus Burst", category: "Zesty" },
  { name: "Velvet Night", category: "Spicy" },
  { name: "Coastal Breeze", category: "Aquatic" },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 bg-muted-bg">
          <div className="mx-auto max-w-4xl text-center">
            <FadeInUp>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Our Work
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Gyms that smell
                <br />
                <span className="text-accent">like success.</span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Partnering with high-traffic gyms to deliver premium fragrance experiences. See the impact we&apos;re making.
              </p>
            </FadeInUp>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 px-6 bg-white border-y border-border">
          <div className="mx-auto max-w-6xl">
            <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent mx-auto mb-4">
                      <stat.icon size={22} />
                    </div>
                    <p className="text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted mt-1">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Partner Brands */}
        <section className="py-20 px-6 bg-muted-bg">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <FadeInUp>
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
                  Partner Brands
                </p>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Premium fragrances, curated for gyms
                </h2>
              </FadeInUp>
            </div>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {partnerBrands.map((brand, i) => (
                <StaggerItem key={brand.name}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-border group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={`/images/${i % 2 === 0 ? 'cologne-bottle.jpg' : 'creed-bottle.jpg'}`}
                        alt={brand.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <p className="text-xs font-medium tracking-wider uppercase text-accent-light">
                          {brand.category}
                        </p>
                        <h3 className="text-lg font-semibold text-white">
                          {brand.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 bg-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <FadeInUp>
                <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
                  Testimonials
                </p>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  What gym owners are saying
                </h2>
              </FadeInUp>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <StaggerItem key={testimonial.author}>
                  <div className="bg-muted-bg rounded-2xl p-8 border border-border h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground leading-relaxed flex-1">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted">{testimonial.role}</p>
                      <p className="text-xs text-accent mt-1">{testimonial.location}</p>
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
                Join our growing network
              </h2>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
                Become a Scentio partner gym and start earning while enhancing your member experience.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <a
                href="/contact"
                className="inline-flex items-center justify-center font-medium bg-accent text-white px-8 py-3.5 rounded-full hover:bg-accent-light transition-colors"
              >
                Become a Partner
              </a>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
