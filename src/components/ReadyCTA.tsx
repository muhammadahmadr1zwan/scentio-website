"use client";

import Link from "next/link";
import { FadeInUp } from "./Motion";
import { ArrowRight, Phone } from "lucide-react";

export default function ReadyCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-foreground text-background overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent-light/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <FadeInUp>
          <p className="text-xs font-medium tracking-[0.28em] uppercase text-accent-light mb-4">
            Let&apos;s build something great
          </p>
        </FadeInUp>
        <FadeInUp delay={0.08}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Ready to bring Scentio
            <br />
            <span className="text-accent-light">to your venue?</span>
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.16}>
          <p className="mt-6 text-lg text-background/70 max-w-2xl mx-auto leading-relaxed">
            Get in touch for a free consultation. We&apos;ll assess your space,
            discuss revenue potential, and create a custom plan for your gym or
            high-traffic venue.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.24}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-medium text-white shadow-lg shadow-accent/30 transition-[transform,background-color,box-shadow] duration-200 ease-out hover:scale-[1.02] hover:bg-accent-light hover:shadow-xl active:scale-[0.98]"
            >
              Book a free call
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="tel:3179821253"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-background/20 bg-background/5 backdrop-blur px-8 py-3.5 font-medium text-background transition-colors hover:bg-background/10"
            >
              <Phone size={16} />
              317-982-1253
            </a>
          </div>
        </FadeInUp>
        <FadeInUp delay={0.32}>
          <p className="mt-8 text-xs sm:text-sm text-background/50">
            Free consultation · No commitment · Zero upfront cost
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
