"use client";

import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

const steps = [
  {
    number: "01",
    title: "We visit & plan",
    detail:
      "On-site walkthrough. We pick the best placement for foot traffic, branding, and member experience — no disruption to your operations.",
  },
  {
    number: "02",
    title: "We install & stock",
    detail:
      "Free installation, premium licensed fragrances loaded, full testing. You do nothing. We handle compliance, refills, and servicing on a regular schedule.",
  },
  {
    number: "03",
    title: "You earn. Members enjoy.",
    detail:
      "Members tap, choose a scent, and walk out feeling fresh. You collect a share of every transaction — and get a premium amenity members actually notice.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-28 bg-muted-bg">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <FadeInUp>
            <p className="text-xs font-medium tracking-[0.24em] uppercase text-accent mb-3">
              How it works
            </p>
          </FadeInUp>
          <FadeInUp delay={0.08}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Three steps. Fully managed.
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.16}>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              Partnering with Scentio is meant to be simple. Here&apos;s what
              happens from your first call to ongoing operations.
            </p>
          </FadeInUp>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <article className="h-full rounded-2xl border border-border bg-white p-7 shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                <p className="text-sm font-semibold tracking-wider text-accent">
                  {step.number}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {step.detail}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
