"use client";

import { Star, Quote } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Our members love the convenience. The machine looks premium, and the fragrance quality is genuinely impressive.",
    author: "Nadia Thompson",
    role: "Operations Manager, Elevate Fitness",
    rating: 5,
  },
  {
    quote:
      "Setup was seamless and hands-off for our team. It quickly became one of the most talked-about amenities in our facility.",
    author: "Jason Patel",
    role: "Owner, Core Strength Gym",
    rating: 5,
  },
  {
    quote:
      "The extra monthly revenue is a win, but the biggest impact is the elevated member experience after workouts.",
    author: "Elena Rodriguez",
    role: "General Manager, Momentum Athletics",
    rating: 5,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="review" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-14 sm:mb-16">
          <FadeInUp>
            <p className="text-xs font-medium tracking-[0.28em] uppercase text-accent mb-3">
              Testimonials
            </p>
          </FadeInUp>
          <FadeInUp delay={0.08}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              What partners are saying
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.16}>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Feedback from partner gyms using Scentio to add convenience,
              elevate the brand experience, and generate incremental revenue.
            </p>
          </FadeInUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <figure className="group relative h-full rounded-2xl border border-border bg-muted-bg p-8 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                <Quote
                  size={28}
                  className="absolute top-6 right-6 text-accent/30 transition-colors group-hover:text-accent/60"
                  aria-hidden
                />
                <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed text-[15px] sm:text-base">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent text-sm font-semibold"
                  >
                    {initials(t.author)}
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground text-sm">
                      {t.author}
                    </span>
                    <span className="block text-xs text-muted">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
