"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeInUp } from "@/components/Motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    quote:
      "Members mention Scentio constantly. It feels premium, works smoothly, and elevated how people perceive our gym brand.",
    author: "Nadia Thompson",
    role: "Operations Manager, Elevate Fitness",
  },
  {
    quote:
      "Setup was painless and the support team is responsive. We added a new amenity without adding overhead.",
    author: "Jason Patel",
    role: "Owner, Core Strength Gym",
  },
  {
    quote:
      "Our members love having a quick fragrance option post-workout, and the extra revenue each month is a bonus.",
    author: "Elena Rodriguez",
    role: "General Manager, Momentum Athletics",
  },
];

export default function ReviewsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];
  const pager = useMemo(
    () => reviews.map((_, idx) => idx),
    []
  );

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 bg-muted-bg">
          <div className="mx-auto max-w-4xl text-center">
            <FadeInUp>
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                Reviews
              </p>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
                What partner gyms
                <br />
                <span className="text-accent">say about Scentio.</span>
              </h1>
            </FadeInUp>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="mx-auto max-w-3xl">
            <FadeInUp>
              <article className="bg-muted-bg rounded-2xl border border-border p-8 sm:p-10">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed text-lg mb-8 min-h-28">
                  &ldquo;{activeReview.quote}&rdquo;
                </p>
                <p className="font-semibold text-foreground">{activeReview.author}</p>
                <p className="text-sm text-muted">{activeReview.role}</p>
              </article>
            </FadeInUp>

            <div className="mt-7 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {pager.map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeIndex === idx ? "w-7 bg-foreground" : "w-2.5 bg-border"
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  aria-label="Previous review"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted-bg transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next review"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted-bg transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
