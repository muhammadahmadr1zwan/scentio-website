"use client";

import Link from "next/link";
import { FadeInUp } from "./Motion";
import { ArrowRight, Phone } from "lucide-react";

export default function ReadyCTA() {
  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-foreground text-background px-6 py-12 sm:px-12 sm:py-14 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-light/15 blur-3xl"
          />

          <div className="relative grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 items-center">
            <div>
              <FadeInUp>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  Want Scentio in your venue?
                </h2>
              </FadeInUp>
              <FadeInUp delay={0.08}>
                <p className="mt-4 text-sm sm:text-base text-background/70 leading-relaxed max-w-xl">
                  Tell us about your space. We&apos;ll review traffic, placement,
                  and brand fit, then come back with a clear proposal. No
                  commitment, no upfront cost.
                </p>
              </FadeInUp>
            </div>

            <FadeInUp delay={0.16}>
              <div className="flex flex-col gap-3 md:items-end">
                <Link
                  href="/contact"
                  className="group w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 font-medium text-white shadow-lg shadow-accent/30 transition-[transform,background-color,box-shadow] duration-200 ease-out hover:scale-[1.02] hover:bg-accent-light hover:shadow-xl active:scale-[0.98]"
                >
                  Request a free consult
                  <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="tel:3179821253"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-background/20 bg-background/5 backdrop-blur px-7 py-3 font-medium text-background transition-colors hover:bg-background/10"
                >
                  <Phone size={16} />
                  317-982-1253
                </a>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
}
