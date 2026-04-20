"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInUp } from "@/components/Motion";

const steps = [
  {
    title: "Discovery Call",
    detail:
      "Quick 15-minute call to understand your venue, traffic, and goals. No pressure, just fit-checking and clarity.",
  },
  {
    title: "Placement Plan",
    detail:
      "We assess your layout, recommend ideal placement, and finalize rollout details for smooth setup.",
  },
  {
    title: "Install & Launch",
    detail:
      "Our team installs the machine, configures payment, and tests everything so members can use it immediately.",
  },
  {
    title: "Scale & Optimize",
    detail:
      "Ongoing refill, maintenance, performance tracking, and monthly recommendations to increase usage and revenue.",
  },
];

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 bg-muted-bg">
          <div className="mx-auto max-w-4xl text-center">
            <FadeInUp>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Process
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Four steps from idea
                <br />
                <span className="text-accent">to member experience.</span>
              </h1>
            </FadeInUp>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="mx-auto max-w-5xl">
            <FadeInUp>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                {steps.map((step, idx) => (
                  <button
                    key={step.title}
                    onClick={() => setActiveStep(idx)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeStep === idx
                        ? "bg-foreground text-background"
                        : "bg-muted-bg text-foreground hover:bg-border"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")} {step.title}
                  </button>
                ))}
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="rounded-2xl border border-border p-7 sm:p-9 bg-muted-bg">
                <p className="text-accent text-sm font-semibold mb-3">
                  Step {String(activeStep + 1).padStart(2, "0")}
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-3">
                  {steps[activeStep].title}
                </h2>
                <p className="text-muted leading-relaxed text-lg">
                  {steps[activeStep].detail}
                </p>
              </div>
            </FadeInUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
