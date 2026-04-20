"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/Motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does it cost to install a Scentio machine?",
    answer:
      "There is no upfront installation cost for qualifying high-traffic partner venues. We handle installation, setup, and onboarding.",
  },
  {
    question: "Who handles maintenance and refills?",
    answer:
      "Scentio handles all maintenance, fragrance refills, and servicing. Your team does not need to manage day-to-day operations.",
  },
  {
    question: "How do members pay?",
    answer:
      "Members pay with a simple contactless tap using cards and major mobile wallets. No app download required.",
  },
  {
    question: "How quickly can we go live?",
    answer:
      "Most deployments are completed quickly after approval, usually within days once placement and logistics are finalized.",
  },
  {
    question: "What fragrances are offered?",
    answer:
      "We curate rotating premium fragrance selections across fresh, woody, oriental, and citrus profiles tailored for your audience.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 bg-muted-bg">
          <div className="mx-auto max-w-4xl text-center">
            <FadeInUp>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                FAQ
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                Common questions
                <br />
                <span className="text-accent">before partnering.</span>
              </h1>
            </FadeInUp>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="mx-auto max-w-4xl">
            <StaggerContainer className="space-y-4">
              {faqs.map((faq, idx) => (
                <StaggerItem key={faq.question}>
                  <article className="rounded-2xl border border-border bg-muted-bg p-5 sm:p-6">
                    <button
                      className="w-full flex items-start justify-between gap-4 text-left"
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      aria-expanded={openIndex === idx}
                    >
                      <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                        {faq.question}
                      </h2>
                      <ChevronDown
                        size={18}
                        className={`mt-1 shrink-0 transition-transform ${
                          openIndex === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === idx && (
                      <p className="text-muted leading-relaxed mt-3">{faq.answer}</p>
                    )}
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
