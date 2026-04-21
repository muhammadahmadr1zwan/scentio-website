"use client";

const industries = [
  "Gyms",
  "Boutique Studios",
  "Hotels",
  "Spas",
  "Airports",
  "Malls",
  "Restaurants",
  "Country Clubs",
  "Offices",
  "Casinos",
  "Salons",
  "Lounges",
];

export default function IndustriesMarquee() {
  const track = [...industries, ...industries];

  return (
    <section
      aria-label="Venues we serve"
      className="relative border-y border-border bg-white py-6 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <p className="text-center text-[11px] tracking-[0.28em] uppercase text-muted mb-4">
        Built for high-traffic venues
      </p>

      <div className="group relative flex overflow-hidden">
        <div className="flex min-w-full shrink-0 items-center justify-around gap-10 animate-[marquee_32s_linear_infinite] group-hover:[animation-play-state:paused]">
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-xl sm:text-2xl font-semibold text-foreground/80"
            >
              {name}
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex min-w-full shrink-0 items-center justify-around gap-10 animate-[marquee_32s_linear_infinite] group-hover:[animation-play-state:paused]"
        >
          {track.map((name, i) => (
            <span
              key={`dup-${name}-${i}`}
              className="whitespace-nowrap text-xl sm:text-2xl font-semibold text-foreground/80"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
