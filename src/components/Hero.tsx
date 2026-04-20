"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Decorative layers must not capture clicks (they can stack above fixed nav in some browsers). */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/images/cologne-dark.jpg"
          alt="Premium fragrance"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </div>

      <div className="pointer-events-auto relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm font-medium tracking-widest uppercase text-accent-light mb-6"
        >
          Fragrance Vending for Modern Spaces
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[15vw] sm:text-[12vw] md:text-[10vw] font-bold tracking-tighter text-white leading-none"
        >
          Scentio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          Tap-to-pay fragrance sprays designed for gyms, restaurants, and other high-traffic venues. 
          Simple to use, low maintenance, and easy to place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link
            href="/process"
            className="mt-10 inline-flex items-center gap-2 font-medium bg-accent text-white px-8 py-3.5 rounded-full hover:bg-accent-light transition-colors"
          >
            See the process
            <ChevronDown size={18} />
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-7 text-xs uppercase tracking-[0.24em] text-white/55"
        >
          Scroll to see more
        </motion.p>
      </div>
    </section>
  );
}
