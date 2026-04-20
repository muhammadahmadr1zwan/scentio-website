"use client";

import { Star } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

const testimonials = [
  {
    quote: "Our members love the convenience. The machine looks premium, and the fragrance quality is genuinely impressive.",
    author: "Nadia Thompson",
    role: "Operations Manager, Elevate Fitness",
    rating: 5,
  },
  {
    quote: "Setup was seamless and hands-off for our team. It quickly became one of the most talked-about amenities in our facility.",
    author: "Jason Patel",
    role: "Owner, Core Strength Gym",
    rating: 5,
  },
  {
    quote: "The extra monthly revenue is a win, but the biggest impact is the elevated member experience after workouts.",
    author: "Elena Rodriguez",
    role: "General Manager, Momentum Athletics",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="review" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              What People Say
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Real feedback from partner gyms using Scentio to add convenience, elevate the brand experience, and generate incremental revenue.
            </p>
          </FadeInUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <div className="bg-muted-bg rounded-2xl p-8 border border-border h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed flex-1 text-lg">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted">{testimonial.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
