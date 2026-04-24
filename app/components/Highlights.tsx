"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Cloud, Users, Rocket, Gauge, ArrowUpRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Highlight = {
  icon: LucideIcon
  metric: string
  metricLabel: string
  title: string
  desc: string
  accent: string
  iconColor: string
  href?: string
  cta?: string
}

const highlights: Highlight[] = [
  {
    icon: Cloud,
    metric: "5+ apps",
    metricLabel: "Netlify → Cloudflare",
    title: "Led a Multi-Framework Production Migration",
    desc:
      "Owned the end-to-end migration of Next.js, React, Angular and JS/TS apps for AbbVie — built a per-framework playbook, dual-deployed for parity, and shipped DNS cutovers with zero production downtime.",
    accent: "from-violet-500/25 via-fuchsia-500/15 to-rose-500/10",
    iconColor: "text-violet-500",
    href: "/case-studies/abbvie-migration",
    cta: "View migration case study",
  },
  {
    icon: Users,
    metric: "4 devs",
    metricLabel: "Team I lead today",
    title: "Lead Frontend @ Barbarian — AbbVie & Citizen Watch",
    desc:
      "Lead a team of 4 engineers delivering production features for global enterprise clients. Drive code reviews, raise the quality bar with RFCs, and unblock the team so every sprint ships — not accumulates tech debt.",
    accent: "from-sky-500/25 via-blue-500/15 to-indigo-500/10",
    iconColor: "text-sky-500",
    href: "/case-studies/citizen-watch",
    cta: "See the work",
  },
  {
    icon: Rocket,
    metric: "10+ modules",
    metricLabel: "Shipped to production",
    title: "Built Production-Grade MERN Systems End-to-End",
    desc:
      "Designed and shipped core CMS modules at Evergent — REST APIs, advanced MongoDB aggregations ($lookup, $group, $set), role-based permissions and dynamic file handling — owning the full React ↔ Node ↔ Mongo contract.",
    accent: "from-emerald-500/25 via-teal-500/15 to-cyan-500/10",
    iconColor: "text-emerald-500",
    href: "/case-studies/ev-cms",
    cta: "Read the build",
  },
  {
    icon: Gauge,
    metric: "Faster",
    metricLabel: "Renders & TTFB",
    title: "Performance-First Refactors at Scale",
    desc:
      "Restructured rendering paths, eliminated hydration waterfalls, enforced per-route bundle budgets and tuned edge caching — measurable improvements to render time and TTFB across enterprise frontends.",
    accent: "from-amber-500/25 via-orange-500/15 to-yellow-500/10",
    iconColor: "text-amber-500",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Highlights() {
  return (
    <section
      id="highlights"
      className="section-padding elegant-border relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-bg opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_75%)]" />
      <div className="container mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="section-eyebrow">Key Highlights</div>
          <h2 className="section-title">
            What I&apos;ve done that <span className="gradient-text">moves the needle</span>
          </h2>
          <p className="section-subtitle">
            Four impact areas that define how I work — leadership, migrations, production
            ownership and performance.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="group relative card-surface overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${h.accent} opacity-60 group-hover:opacity-90 transition-opacity`}
              />
              <div className="relative p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background/85 backdrop-blur border border-border/60 shadow-sm">
                    <h.icon className={`h-5 w-5 ${h.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold tracking-tight gradient-text">
                        {h.metric}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {h.metricLabel}
                      </span>
                    </div>
                    <h3 className="mt-2 text-base md:text-lg font-semibold leading-snug">
                      {h.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {h.desc}
                    </p>
                    {h.href && (
                      <Link
                        href={h.href}
                        className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/80 backdrop-blur px-3.5 py-1.5 text-xs font-semibold text-foreground hover:border-primary/40 hover:bg-background transition"
                      >
                        {h.cta ?? "Read case study"}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
