"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/cologne-dark.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/85" />
      </div>

      <div className="pointer-events-auto relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
          className="text-xs font-medium tracking-[0.24em] uppercase text-accent-light/90 mb-5"
        >
          Premium Fragrance Vending
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
        >
          Premium fragrance,
          <br />
          built into your venue.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28, ease }}
          className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          Scentio installs tap-to-pay fragrance machines in gyms, hotels, and other
          high-traffic venues. Free install, fully managed by us, and built to
          give your space a premium amenity — and shared revenue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.38, ease }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-medium text-white shadow-lg shadow-accent/20 transition-[transform,background-color,box-shadow] duration-200 ease-out hover:scale-[1.02] hover:bg-accent-light hover:shadow-xl active:scale-[0.98]"
          >
            Request a free consult
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 backdrop-blur px-8 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
          >
            How it works
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.52, ease }}
          className="mt-7 text-xs sm:text-sm text-white/55"
        >
          Free install · No upfront cost · Fully managed
        </motion.p>
      </div>
    </section>
  );
}
