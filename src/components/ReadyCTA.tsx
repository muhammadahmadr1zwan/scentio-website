"use client";

import { FadeInUp } from "./Motion";
import { ArrowRight } from "lucide-react";

export default function ReadyCTA() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
            Ready to bring Scentio to your venue?
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Get in touch for a free consultation. We&apos;ll assess your space, discuss revenue potential, and create a custom plan for your gym or high-traffic venue.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@scentio.com"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 font-medium text-background transition-[transform,background-color,box-shadow] duration-200 ease-out will-change-transform hover:scale-[1.02] hover:bg-accent hover:shadow-md active:scale-[0.98]"
            >
              Book a Call
              <ArrowRight size={18} />
            </a>
            <a
              href="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 font-medium text-foreground transition-[transform,background-color,box-shadow] duration-200 ease-out will-change-transform hover:scale-[1.02] hover:bg-muted-bg hover:shadow-sm active:scale-[0.98]"
            >
              See Locations
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
