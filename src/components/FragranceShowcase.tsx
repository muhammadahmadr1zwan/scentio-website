"use client";

import Image from "next/image";
import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

const fragrances = [
  {
    name: "Noir Absolu",
    category: "Woody & Warm",
    image: "/images/cologne-bottle.jpg",
  },
  {
    name: "Aqua Sport",
    category: "Fresh & Aquatic",
    image: "/images/perfume-1.jpg",
  },
  {
    name: "Oud Reserve",
    category: "Oriental & Rich",
    image: "/images/creed-bottle.jpg",
  },
  {
    name: "Citrus Burst",
    category: "Light & Zesty",
    image: "/images/perfume-display.jpg",
  },
];

export default function FragranceShowcase() {
  return (
    <section id="collection" className="py-24 sm:py-32 bg-muted-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <FadeInUp>
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
              The Collection
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Premium scents, one spray away
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Every Scentio machine carries a curated rotation of premium
              fragrances — from fresh aquatic to deep oud. Something for every
              preference.
            </p>
          </FadeInUp>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {fragrances.map((fragrance) => (
            <StaggerItem key={fragrance.name}>
              <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-muted-bg cursor-pointer">
                <Image
                  src={fragrance.image}
                  alt={fragrance.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <p className="text-xs font-medium tracking-wider uppercase text-accent-light mb-1">
                    {fragrance.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {fragrance.name}
                  </h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.3}>
          <p className="mt-8 text-center text-sm text-muted">
            Fragrance selection rotates seasonally · Licensed brand partnerships ·
            All scents are authentic and premium-grade
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
