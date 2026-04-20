"use client";

import Image from "next/image";
import { SlideInLeft, SlideInRight, StaggerContainer, StaggerItem } from "./Motion";
import { Mail } from "lucide-react";

const experiences = [
  { role: "Founder & CEO", company: "Scentio", period: "2023 - Present" },
  { role: "Vending Partnerships & Growth", company: "Scentio", period: "2023 - Present" },
  { role: "Brand Strategy Lead", company: "Fragrance Ventures", period: "2022 - 2023" },
  { role: "Operations Manager", company: "Vending Solutions Inc.", period: "2020 - 2022" },
  { role: "Business Development", company: "Retail Innovations", period: "2019 - 2020" },
  { role: "Marketing Specialist", company: "Wellness Brands", period: "2018 - 2019" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInLeft>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/perfume-1.jpg"
                alt="Scentio founder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-medium tracking-wider uppercase text-accent-light">
                  Founder & CEO
                </p>
                <p className="text-lg font-semibold text-white mt-1">
                  Mahmoud Smadi
                </p>
                <p className="text-sm text-white/60 mt-1">
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
                  href="https://www.linkedin.com/in/mahmoud-smadi-3595a733b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-foreground hover:text-accent transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>

              <StaggerContainer className="space-y-0 mt-8">
                {experiences.map((exp, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center justify-between py-3 border-b border-border">
                      <div>
                        <h4 className="font-medium text-foreground text-sm">{exp.role}</h4>
                        <p className="text-xs text-muted">{exp.company}</p>
                      </div>
                      <p className="text-xs text-accent font-medium">{exp.period}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}
