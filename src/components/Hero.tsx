"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/cologne-dark.jpg"
          alt="Dark moody fragrance atmosphere — premium cologne and vending"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      <div className="pointer-events-auto relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1, ease }}
          className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.22em] uppercase text-accent-light/90 mb-6 rounded-full border border-white/15 bg-white/5 backdrop-blur px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
          Premium fragrance vending
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.02]"
        >
          Elevate your venue,
          <br />
          <span className="text-accent-light">one spray at a time.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.32, ease }}
          className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          Tap-to-pay fragrance sprays designed for gyms, hotels, malls, and other
          high-traffic venues. Free installation, fully managed by Scentio, and
          built to generate passive revenue for your space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.42, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-medium text-white shadow-lg shadow-accent/20 transition-[transform,background-color,box-shadow] duration-200 ease-out will-change-transform hover:scale-[1.03] hover:bg-accent-light hover:shadow-xl active:scale-[0.98]"
          >
            Book a free call
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-8 py-3.5 font-medium text-white transition-[transform,background-color] duration-200 ease-out hover:bg-white/10 active:scale-[0.98]"
          >
            <MapPin size={16} />
            See locations
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.58, ease }}
          className="mt-8 text-xs sm:text-sm text-white/55"
        >
          Free install · No upfront cost · Fully managed · Cancel anytime
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75, ease }}
          className="mt-14 flex items-center justify-center"
        >
          <span className="text-[11px] tracking-[0.3em] uppercase text-white/40">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
