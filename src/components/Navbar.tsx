"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;

  return (
    <header
      className={`pointer-events-auto fixed top-0 left-0 right-0 z-[200] transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300 ease-out ${
        solid
          ? "border-b border-border/80 bg-white/90 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md"
          : "border-b border-white/10 bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-14 max-w-6xl items-stretch gap-2 px-4 sm:px-6 sm:h-[3.25rem]"
        aria-label="Main"
      >
        <Link
          href="/"
          title="Scentio — Home"
          className={`flex shrink-0 items-center gap-2 self-center rounded-lg py-1 pr-1 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
            solid ? "text-foreground" : "text-white"
          }`}
        >
          <Image
            src="/images/scentio-logo.png"
            alt=""
            width={30}
            height={30}
            className={`rounded-full object-cover ${
              solid ? "ring-1 ring-border" : "ring-1 ring-white/25"
            }`}
            aria-hidden
          />
          <span className="hidden text-[15px] font-semibold tracking-tight sm:inline">
            Scent<span className="text-accent">io</span>
          </span>
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end sm:justify-center">
          <div className="flex max-w-full items-center gap-1 overflow-x-auto py-1 no-scrollbar sm:gap-0.5 sm:px-2">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch
                  className={`relative shrink-0 touch-manipulation rounded-full px-2.5 py-1.5 text-[13px] font-medium tracking-tight transition-[color,transform] duration-200 ease-out hover:opacity-100 sm:px-3 sm:text-sm ${
                    solid
                      ? active
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                      : active
                        ? "text-white"
                        : "text-white/65 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active ? (
                    <span
                      className={`pointer-events-none absolute bottom-1 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full sm:w-5 ${
                        solid ? "bg-accent" : "bg-accent-light"
                      }`}
                      aria-hidden
                    />
                  ) : null}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
