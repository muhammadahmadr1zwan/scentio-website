"use client";

import {
  DollarSign,
  Users,
  TrendingUp,
  ShieldCheck,
  Zap,
  Heart,
} from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

const benefits = [
  {
    icon: DollarSign,
    title: "New Revenue Stream",
    description:
      "Earn a percentage on every spray. Zero upfront cost, zero maintenance — pure passive income.",
  },
  {
    icon: Users,
    title: "Enhanced Member Experience",
    description:
      "Give your members something no other gym has. A premium amenity that keeps them coming back.",
  },
  {
    icon: TrendingUp,
    title: "Foot Traffic Magnet",
    description:
      "Fragrance sampling attracts new members and creates a buzz that sets your gym apart.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Managed",
    description:
      "We handle restocking, maintenance, and licensing. You don't lift a finger.",
  },
  {
    icon: Zap,
    title: "Instant Gratification",
    description:
      "Members sample premium scents in seconds — no store visit, no commitment, no waiting.",
  },
  {
    icon: Heart,
    title: "Brand Partnerships",
    description:
      "We partner with established fragrance brands, so every spray is a premium experience.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 sm:py-32 bg-muted-bg">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <FadeInUp>
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-3">
              Why Scentio
            </p>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Everything you need to level up your gym
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              One machine handling fragrance discovery, member satisfaction, and
              passive revenue — with zero overhead.
            </p>
          </FadeInUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="group p-6 rounded-2xl hover:bg-white transition-colors">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent mb-4 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
