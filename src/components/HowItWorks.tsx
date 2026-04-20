"use client";

import Image from "next/image";
import { siteImages } from "@/lib/site-images";
import { CreditCard, Sparkles, Droplets, Star } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

const services = [
  {
    icon: CreditCard,
    number: "01",
    title: "Tap to Pay",
    description:
      "A quick, seamless payment experience. Customers simply tap their phone or card for instant access — no app, no hassle.",
    bullets: [
      "Contactless payment via card or mobile wallet",
      "No app download required",
      "Instant access with single tap",
    ],
    image: siteImages.contactlessTapPay,
    imageAlt: "Contactless card or phone tap at a payment terminal",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Select Your Fragrance",
    description:
      "Choose from a curated lineup of premium scents crafted to refresh, energize, or elevate your mood.",
    bullets: [
      "Curated premium fragrance selection",
      "Fresh aquatic, woody, oriental profiles",
      "Seasonal rotation based on preferences",
    ],
    image: siteImages.fragranceCounterDisplay,
    imageAlt: "Retail fragrance display — choosing from a curated lineup of premium scents",
  },
  {
    icon: Droplets,
    number: "03",
    title: "Press to Dispense",
    description:
      "With a single touch, the machine delivers a clean, precise spray designed for long-lasting freshness.",
    bullets: [
      "Single-touch dispensing",
      "Clean, precise spray technology",
      "Long-lasting fragrance release",
    ],
    image: siteImages.fineFragranceMist,
    imageAlt: "Fine fragrance mist from a spray bottle — precise dispensing",
  },
  {
    icon: Star,
    number: "04",
    title: "Enjoy the Experience",
    description:
      "A premium scent experience that leaves you feeling confident and refreshed, anytime and anywhere.",
    bullets: [
      "Confidence-boosting fragrance",
      "Instant refresh after workouts",
      "Premium brand-quality scents",
    ],
    image: siteImages.refreshedAfterUse,
    imageAlt: "Feeling confident and refreshed after a workout",
  },
];

export default function HowItWorks() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-muted-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Services
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              From strategy to execution, we offer thoughtful and tailored fragrance solutions that bring your unique vision to life.
            </p>
          </FadeInUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.number}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      <service.icon size={16} />
                    </div>
                    <span className="text-xl font-bold text-white/40">{service.number}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-3">{service.description}</p>
                  <ul className="space-y-1.5">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-xs text-muted flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
