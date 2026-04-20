"use client";

import { FadeInUp, StaggerContainer, StaggerItem } from "./Motion";

const faqs = [
  {
    question: "How much does it cost to install a Scentio machine?",
    answer: "Installation is free for qualifying gyms and high-traffic venues. We handle everything from placement to setup, with no upfront cost to you.",
  },
  {
    question: "What fragrances are available?",
    answer: "We offer a curated rotation of premium scents including fresh aquatic, woody and warm, oriental, and citrus profiles. Selections rotate seasonally based on member preferences.",
  },
  {
    question: "How do members pay?",
    answer: "Simple tap-to-pay using any contactless credit card or mobile wallet. No app download required, no membership signups—just tap and spray.",
  },
  {
    question: "How much revenue can my gym earn?",
    answer: "Revenue varies by traffic, but our gym partners typically earn 15-25% of each spray. High-traffic locations see significant monthly revenue with zero operational overhead.",
  },
  {
    question: "Who handles maintenance and refills?",
    answer: "Scentio handles all maintenance, refills, and servicing. You focus on running your gym—we handle the fragrance experience.",
  },
  {
    question: "How long does installation take?",
    answer: "Installation typically takes 1-2 hours. We coordinate with your team to find the optimal placement and ensure minimal disruption to your operations.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-muted-bg">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-lg text-muted">
              Common questions about Scentio installation and partnership.
            </p>
          </FadeInUp>
        </div>

        <StaggerContainer className="space-y-4">
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <div className="bg-white rounded-2xl p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-muted leading-relaxed">{faq.answer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
