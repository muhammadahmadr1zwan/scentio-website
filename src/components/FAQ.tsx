"use client";

import { Plus } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

const faqs = [
  {
    question: "How much does installation cost?",
    answer:
      "For qualifying venues, installation is free. There is no upfront fee and no long-term contract — we invest in placement because we only succeed when your venue benefits from it.",
  },
  {
    question: "Who handles refills and maintenance?",
    answer:
      "We do. Scentio handles all restocking, cleaning, and servicing on a regular schedule. You focus on running your venue — we keep the machine working and stocked.",
  },
  {
    question: "How do customers pay?",
    answer:
      "Tap-to-pay using any contactless credit card or mobile wallet. No app, no sign-up, no gym membership required. It takes about three seconds per customer.",
  },
  {
    question: "How do I make money from this?",
    answer:
      "You get a share of every transaction, paid out on a regular schedule. We break down the exact split and projected monthly numbers based on your traffic during the consult.",
  },
  {
    question: "Which venues are a good fit?",
    answer:
      "Gyms, hotels, retail stores, private clubs, and any location with consistent daily foot traffic where premium experience matters. If you’re not sure, reach out — we’ll tell you honestly.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Usually 1–2 hours on-site. We coordinate with your team so there’s no disruption to customers or operations.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 sm:mb-14">
          <FadeInUp>
            <p className="text-xs font-medium tracking-[0.24em] uppercase text-accent mb-3">
              FAQ
            </p>
          </FadeInUp>
          <FadeInUp delay={0.08}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Common questions
            </h2>
          </FadeInUp>
        </div>

        <StaggerContainer className="space-y-3">
          {faqs.map((faq) => (
            <StaggerItem key={faq.question}>
              <details className="group rounded-2xl border border-border bg-muted-bg/60 px-6 py-5 open:bg-white open:shadow-sm transition-[background-color,box-shadow]">
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
