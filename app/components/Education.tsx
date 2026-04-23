"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  GraduationCap,
  Trophy,
  Sparkles,
  Target,
  ArrowUpRight,
  HeartHandshake,
  Mic,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

const education = [
  {
    school: "Acharya Nagarjuna University",
    degree: "B.Com (Computer Applications)",
    period: "2018 — 2021",
    location: "Guntur, India",
  },
  {
    school: "Mathru Sri Junior College",
    degree: "Intermediate (MPC)",
    period: "2016 — 2018",
    location: "Guntur, India",
  },
]

type Highlight = {
  icon: LucideIcon
  title: string
  desc: string
  color: string
  accentIcon?: string
  href?: string
  cta?: string
  bullets?: string[]
  featured?: boolean
}

const highlights: Highlight[] = [
  {
    icon: Trophy,
    title: "1st Place — Internal AI Hackathon",
    desc:
      "Led team CodeStormers to 1st place at Evergent's internal hackathon — built WebGenius-AI, an AI-powered test automation platform combining LLMs + Computer Vision.",
    color: "from-amber-500/25 to-orange-500/15",
    accentIcon: "text-amber-500",
    href: "/case-studies/webgenius-ai",
    cta: "Read case study",
    bullets: [
      "Team Lead · built most of the core logic & code",
      "Led the pitch in front of the jury",
      "Guided the team toward a shared technical vision",
    ],
    featured: true,
  },
  {
    icon: HeartHandshake,
    title: "Beyond Code — Culture & Activities @ Evergent",
    desc:
      "I'm not just a developer. At Evergent I invested deeply in culture — organizing Fun Fridays, serving on multiple committees and co-hosting the Evergent Premier League.",
    color: "from-violet-500/25 to-indigo-500/15",
    accentIcon: "text-violet-500",
    href: "/case-studies/evergent-culture",
    cta: "Read case study",
    bullets: [
      "Organized multiple successful Fun Friday events that brought teams together",
      "Member of the Sports Committee, Fun Committee and Cricket Committee",
      "Co-hosted EPL (Evergent Premier League) 2024 & 2025 — plus live commentary",
    ],
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Lead Frontend Developer — Citizen Watch",
    desc: "Serving as Lead Frontend for Citizen Watch at Barbarian — owning end-to-end delivery of production features and leading a team of 4.",
    color: "from-sky-500/25 to-blue-500/15",
    accentIcon: "text-sky-500",
    href: "/case-studies/citizen-watch",
    cta: "Read case study",
  },
  {
    icon: Target,
    title: "Cross-Framework Migrations — AbbVie",
    desc: "Led migration of Next.js, React, Angular and JS/TS apps from Netlify to Cloudflare — improving deployment reliability and edge performance.",
    color: "from-fuchsia-500/25 to-rose-500/15",
    accentIcon: "text-fuchsia-500",
    href: "/case-studies/abbvie-migration",
    cta: "Read case study",
  },
]

const extraRoles = [
  { icon: Users, label: "Sports Committee" },
  { icon: Users, label: "Fun Committee" },
  { icon: Users, label: "Cricket Committee" },
  { icon: Mic, label: "EPL Live Commentary" },
]

export default function Education() {
  return (
    <section id="education" className="section-padding elegant-border relative">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="section-eyebrow">Background</div>
          <h2 className="section-title">
            Education & <span className="gradient-text">achievements</span>
          </h2>
          <p className="section-subtitle">
            Credentials, wins and the community work that shape how I build — because great
            engineers do more than code.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-5">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 card-surface p-6 md:p-8 h-fit lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--brand-1)/0.2)] to-[hsl(var(--brand-2)/0.15)] border border-border/60">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>

            <div className="mt-6 space-y-5">
              {education.map((e, i) => (
                <div key={e.school} className="relative pl-5">
                  <span className="absolute left-0 top-2 size-2 rounded-full bg-primary" />
                  {i !== education.length - 1 && (
                    <span className="absolute left-[3px] top-5 bottom-[-20px] w-px bg-border" />
                  )}
                  <div className="text-xs text-muted-foreground">
                    {e.period} · {e.location}
                  </div>
                  <div className="mt-0.5 font-semibold">{e.school}</div>
                  <div className="text-sm text-muted-foreground">{e.degree}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-border/60">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Also wore the hats of
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {extraRoles.map((r) => (
                  <span
                    key={r.label}
                    className="inline-flex items-center gap-1.5 text-xs rounded-md border border-border/60 bg-background/50 px-2 py-1 text-foreground/80"
                  >
                    <r.icon className="h-3 w-3" />
                    {r.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="relative card-surface overflow-hidden group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${h.color} opacity-60 group-hover:opacity-90 transition-opacity`}
                />
                <div className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-background/80 backdrop-blur border border-border/60 shadow-sm">
                      <h.icon className={`h-5 w-5 ${h.accentIcon ?? "text-primary"}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base md:text-lg font-semibold">{h.title}</h3>
                        {h.featured && (
                          <span className="chip shrink-0 text-[10px] !px-2 !py-0.5">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                        {h.desc}
                      </p>

                      {h.bullets && (
                        <ul className="mt-4 space-y-1.5">
                          {h.bullets.map((b) => (
                            <li key={b} className="flex gap-2 text-xs md:text-sm text-foreground/85">
                              <span className="mt-1.5 size-1 rounded-full bg-primary shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}

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
          </div>
        </div>
      </div>
    </section>
  )
}
