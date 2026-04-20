"use client";

import Image from "next/image";
import mahmoudPortrait from "@/assets/mahmoud-smadi.png";
import { SlideInLeft, SlideInRight } from "./Motion";
import { Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInLeft>
            <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-sm max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-square w-full bg-white">
                <Image
                  src={mahmoudPortrait}
                  alt="Professional headshot of Mahmoud Smadi, CEO of Scentio."
                  fill
                  sizes="(min-width: 1024px) 28rem, 100vw"
                  className="object-contain object-center"
                  placeholder="blur"
                  priority
                />
              </div>
              <div className="px-6 py-5 border-t border-border bg-muted-bg/50">
                <p className="text-xs font-medium tracking-wider uppercase text-accent">
                  Founder & CEO
                </p>
                <p className="text-lg font-semibold text-foreground mt-1">
                  Mahmoud Smadi
                </p>
                <p className="text-sm text-muted mt-1">
                  Brand Development · Partnerships · Licensing · Operations
                </p>
              </div>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6">
                Mahmoud Smadi, CEO
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                Mahmoud leads Scentio&apos;s vision, partnerships, and operations. He focuses on bringing premium fragrance vending to high-traffic venues through practical rollout plans, strong brand collaborations, and measurable revenue outcomes for partner gyms.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="mailto:hello@scentio.com"
                  className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent-light transition-colors"
                >
                  <Mail size={18} />
                  Contact Mahmoud
                </a>
                <a
                  href="tel:3179821253"
                  className="inline-flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors"
                >
                  <Phone size={18} />
                  317-982-1253
                </a>
                <a
                  href="https://www.linkedin.com/in/mahmoud-smadi-3595a733b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
