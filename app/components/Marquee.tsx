"use client"

import { motion } from "framer-motion"

const clients = [
  "AbbVie",
  "Citizen Watch",
  "Astro Malaysia",
  "Astro Canada",
  "Evergent",
  "Barbarian",
]

export default function Marquee() {
  const row = [...clients, ...clients]

  return (
    <section className="relative border-y border-border/60 bg-secondary/30 py-8 overflow-hidden">
      <div className="mx-auto max-w-7xl container-padding">
        <div className="flex items-center gap-6 mb-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
            Trusted by & shipped for
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
        </div>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
        />

        <motion.div className="flex w-max animate-marquee gap-12 px-6">
          {row.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-tight text-muted-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
            >
              <span className="size-1.5 rounded-full bg-primary/70" />
              {c}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
