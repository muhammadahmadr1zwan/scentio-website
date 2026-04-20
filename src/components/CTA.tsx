"use client";

import Image from "next/image";
import { siteImages } from "@/lib/site-images";
import { ArrowRight } from "lucide-react";
import { FadeInUp } from "./Motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={siteImages.gymInterior}
          alt="High-traffic gym floor — ideal venue for Scentio fragrance vending"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <FadeInUp>
          <p className="text-sm font-medium tracking-widest uppercase text-accent-light mb-4">
            Ready to bring Scentio to your gym?
          </p>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-white">
            Let&apos;s build something
            <br />
            <span className="text-accent-light">that smells great</span>
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Whether you run a single location or a chain of gyms, we&apos;d love to
            explore how Scentio can add value for your members and your bottom line.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@scentio.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-medium bg-accent text-white px-8 py-3.5 rounded-full hover:bg-accent-light transition-colors"
            >
              Get in Touch
              <ArrowRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center font-medium border border-white/20 text-white px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <p className="mt-8 text-sm text-white/40">
            Free consultation · No commitment · Zero upfront cost
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
