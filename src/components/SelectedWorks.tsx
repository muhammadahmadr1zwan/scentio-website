"use client";

import Image from "next/image";
import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

const venues = [
  {
    name: "Gyms & Fitness Centers",
    description: "Post-workout refreshment for members",
    image: "/images/gym-environment.jpg",
    span: "sm:col-span-2 sm:row-span-2",
    aspect: "sm:aspect-auto",
  },
  {
    name: "Malls & Retail Spaces",
    description: "Impulse fragrance experiences for shoppers",
    image: "/images/perfume-display.jpg",
    span: "",
    aspect: "aspect-[4/3] sm:aspect-auto",
  },
  {
    name: "Airports & Hotel Lobbies",
    description: "Travel-ready scents on the go",
    image: "/images/creed-bottle.jpg",
    span: "",
    aspect: "aspect-[4/3] sm:aspect-auto",
  },
  {
    name: "Horizon",
    description: "Custom solutions for unique spaces",
    image: "/images/cologne-bottle.jpg",
    span: "sm:col-span-2",
    aspect: "aspect-[4/3] sm:aspect-[2/1]",
  },
];

export default function SelectedWorks() {
  return (
    <section id="works" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Selected Works
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Discover curated works that inspire and deliver impact, showcasing creativity, functionality, and design excellence.
            </p>
          </FadeInUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 auto-rows-[200px]">
          {venues.map((venue) => (
            <StaggerItem key={venue.name} className={venue.span}>
              <div className={`group relative rounded-2xl overflow-hidden cursor-pointer h-full ${venue.aspect}`}>
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-semibold text-white mb-0.5">
                    {venue.name}
                  </h3>
                  <p className="text-sm text-white/60">
                    {venue.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
