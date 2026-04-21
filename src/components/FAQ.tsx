"use client";

import { Plus } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

const faqs = [
  {
    question: "How much does it cost to install a Scentio machine?",
    answer:
      "Installation is free for qualifying gyms and high-traffic venues. We handle everything from placement to setup, with no upfront cost to you.",
  },
  {
    question: "What fragrances are available?",
    answer:
      "We offer a curated rotation of premium scents including fresh aquatic, woody and warm, oriental, and citrus profiles. Selections rotate seasonally based on member preferences.",
  },
  {
    question: "How do members pay?",
    answer:
      "Simple tap-to-pay using any contactless credit card or mobile wallet. No app download required, no membership signups — just tap and spray.",
  },
  {
    question: "How much revenue can my venue earn?",
    answer:
      "Revenue varies by traffic, but our partners typically earn 15-25% of each spray. High-traffic locations see significant monthly revenue with zero operational overhead.",
  },
  {
    question: "Who handles maintenance and refills?",
    answer:
      "Scentio handles all maintenance, refills, and servicing. You focus on running your venue — we handle the fragrance experience.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation typically takes 1-2 hours. We coordinate with your team to find the optimal placement and ensure minimal disruption to your operations.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-muted-bg">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-14 sm:mb-16">
          <FadeInUp>
            <p className="text-xs font-medium tracking-[0.28em] uppercase text-accent mb-3">
              Support
            </p>
          </FadeInUp>
          <FadeInUp delay={0.08}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Frequently asked questions
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.16}>
            <p className="mt-4 text-lg text-muted">
              Common questions about Scentio installation and partnership.
            </p>
          </FadeInUp>
        </div>

        <StaggerContainer className="space-y-3">
          {faqs.map((faq) => (
            <StaggerItem key={faq.question}>
              <details className="group rounded-2xl border border-border bg-white px-6 py-5 open:shadow-sm transition-shadow">
                <summary className="flex items-center justify-between gap-6 cursor-pointer list-none marker:hidden">
                  <span className="text-base sm:text-lg font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <span
                    aria-hidden
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-accent transition-transform duration-300 ease-out group-open:rotate-45"
                  >
                    <Plus size={16} />
                  </span>
                </summary>
                <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
