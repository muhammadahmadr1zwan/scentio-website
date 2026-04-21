"use client";

import Image from "next/image";
import mahmoudPortrait from "@/assets/mahmoud-smadi.png";
import { SlideInLeft, SlideInRight } from "./Motion";
import { Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28 bg-muted-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center">
          <SlideInLeft>
            <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-sm w-full max-w-sm mx-auto lg:mx-0">
              <div className="relative aspect-square w-full bg-white">
                <Image
                  src={mahmoudPortrait}
                  alt="Mahmoud Smadi, founder of Scentio."
                  fill
                  sizes="(min-width: 1024px) 24rem, 100vw"
                  className="object-contain object-center"
                  placeholder="blur"
                  priority
                />
              </div>
              <div className="px-6 py-4 border-t border-border bg-muted-bg/60">
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-accent">
                  Founder
                </p>
                <p className="text-base font-semibold text-foreground mt-0.5">
                  Mahmoud Smadi
                </p>
              </div>
            </div>
          </SlideInLeft>

          <SlideInRight>
            <div>
              <p className="text-xs font-medium tracking-[0.24em] uppercase text-accent mb-3">
                About
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-5">
                Hi, I&apos;m Mahmoud.
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed mb-4">
                I started Scentio to bring premium fragrance experiences into
                the places people spend the most time — gyms, hotels, and
                high-traffic retail. The goal is simple: make it easy for
                venues to offer a small daily luxury their customers remember,
                without the operational headache.
              </p>
              <p className="text-base sm:text-lg text-muted leading-relaxed mb-8">
                If you&apos;re thinking about adding Scentio to your space,
                I&apos;ll personally walk you through placement, fragrance
                selection, and revenue expectations — no pressure.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <a
                  href="tel:3179821253"
                  className="inline-flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors"
                >
                  <Phone size={18} />
                  317-982-1253
                </a>
                <a
                  href="mailto:hello@scentio.com"
                  className="inline-flex items-center gap-2 font-medium text-accent hover:text-accent-light transition-colors"
                >
                  <Mail size={18} />
                  hello@scentio.com
                </a>
                <a
                  href="https://www.linkedin.com/in/mahmoud-smadi-3595a733b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
