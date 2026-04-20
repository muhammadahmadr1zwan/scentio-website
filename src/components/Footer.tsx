"use client";

import Link from "next/link";
import { FadeInUp } from "./Motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Stay Connected Section */}
      <div className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeInUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-background mb-4">
                  Stay connected
                </h2>
                <a
                  href="mailto:hello@scentio.com"
                  className="inline-flex items-center font-medium text-accent-light hover:text-accent transition-colors text-lg"
                >
                  Get in touch
                </a>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-background/50 mb-1">Scentio</h3>
                  <a href="tel:1234567890" className="text-background hover:text-accent-light transition-colors">
                    123-456-7890
                  </a>
                  <p className="text-background/50 text-sm mt-1">
                    123 Sakura Street, New York City, NY, USA
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-6 border-t border-background/10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-3">
              <Link
                href="/"
                title="Back to home"
                className="font-bold text-background flex items-center gap-2.5 rounded-lg -m-1 p-1 hover:text-accent-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
              >
                <Image
                  src="/images/scentio-logo.png"
                  alt=""
                  width={28}
                  height={28}
                  className="rounded-full object-cover ring-1 ring-background/20 shadow-md"
                  aria-hidden
                />
                <span>Scent<span className="text-accent-light">io</span></span>
              </Link>
              <Link href="/" className="hover:text-background transition-colors">
                Home
              </Link>
              <Link href="/work" className="hover:text-background transition-colors">
                Locations
              </Link>
              <Link href="/services" className="hover:text-background transition-colors">
                Services
              </Link>
              <Link href="/process" className="hover:text-background transition-colors">
                Process
              </Link>
              <Link href="/reviews" className="hover:text-background transition-colors">
                Reviews
              </Link>
              <Link href="/faq" className="hover:text-background transition-colors">
                FAQ
              </Link>
            </div>
            <p>&copy; {new Date().getFullYear()} Scentio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
