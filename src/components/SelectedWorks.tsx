"use client";

import Image from "next/image";
import Link from "next/link";
import { siteImages } from "@/lib/site-images";
import { ArrowRight } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

const venues = [
  {
    name: "Gyms & Fitness Clubs",
    description:
      "Post-workout refresh that members ask for by name. Works well in locker rooms, front desks, and retail counters.",
    image: siteImages.gymInterior,
    span: "sm:col-span-2 sm:row-span-2",
    aspect: "sm:aspect-auto",
  },
  {
    name: "Hotels & Lobbies",
    description: "Signature scent touchpoint for guests during check-in or on departure.",
    image: siteImages.airportTerminal,
    span: "",
    aspect: "aspect-[4/3] sm:aspect-auto",
  },
  {
    name: "Retail & Lifestyle",
    description: "Adds a premium feel to stores, increases dwell, and creates a talking point.",
    image: siteImages.mallRetailInterior,
    span: "",
    aspect: "aspect-[4/3] sm:aspect-auto",
  },
  {
    name: "Custom placements",
    description: "Private clubs, studios, offices, lounges. If your space has the right traffic, Scentio fits.",
    image: siteImages.customVenueConcept,
    span: "sm:col-span-2",
    aspect: "aspect-[4/3] sm:aspect-[2/1]",
  },
];

export default function SelectedWorks() {
  return (
    <section id="venues" className="py-24 sm:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 sm:mb-14 max-w-2xl">
          <FadeInUp>
            <p className="text-xs font-medium tracking-[0.24em] uppercase text-accent mb-3">
              Where Scentio fits
            </p>
          </FadeInUp>
          <FadeInUp delay={0.08}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Built for high-traffic venues.
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.16}>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Scentio works best where people move through premium spaces every
              day. If your venue sees steady traffic, it&apos;s a fit.
            </p>
          </FadeInUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 auto-rows-[220px]">
          {venues.map((venue) => (
            <StaggerItem key={venue.name} className={venue.span}>
              <div
                className={`group relative h-full overflow-hidden rounded-2xl shadow-sm transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-xl ${venue.aspect}`}
              >
                <Image
                  src={venue.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {venue.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/75 max-w-md">
                    {venue.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeInUp delay={0.24}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Not sure if it fits? Ask us.
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
