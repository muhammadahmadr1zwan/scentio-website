"use client";

import { Gauge, DollarSign, Wrench, Clock } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

const stats = [
  {
    icon: DollarSign,
    value: "$0",
    label: "Upfront cost",
    detail: "Free install for qualifying venues",
  },
  {
    icon: Gauge,
    value: "15-25%",
    label: "Revenue share",
    detail: "Passive income per spray",
  },
  {
    icon: Wrench,
    value: "100%",
    label: "Managed for you",
    detail: "Refills, cleaning, maintenance",
  },
  {
    icon: Clock,
    value: "<24h",
    label: "Response time",
    detail: "Direct line to our team",
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 sm:py-24 bg-foreground text-background overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center mb-12 sm:mb-16">
          <FadeInUp>
            <p className="text-xs font-medium tracking-[0.28em] uppercase text-accent-light mb-3">
              Why partners choose Scentio
            </p>
          </FadeInUp>
          <FadeInUp delay={0.08}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              A premium amenity that runs itself
            </h2>
          </FadeInUp>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.06]">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/15 text-accent-light mb-5">
                  <s.icon size={18} />
                </div>
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-white/80">{s.label}</p>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">
                  {s.detail}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
