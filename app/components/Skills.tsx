"use client"

import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bot, Boxes, Cloud, Code, Database, Server } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { projects } from "@/app/data/projects"

type Level = 1 | 2 | 3 | 4

type Skill = {
  name: string
  level: Level
  usedIn?: string[]
}

type Domain = {
  id: string
  label: string
  short: string
  icon: LucideIcon
  color: string
  blurb: string
  skills: Skill[]
}

type Tier = { level: Level; name: string; desc: string; r: number }

// Rings of the skill map — the further from the centre, the deeper the experience.
const tiers: Tier[] = [
  { level: 4, name: "Core", desc: "Daily driver in production", r: 174 },
  { level: 3, name: "Advanced", desc: "Shipped to production", r: 138 },
  { level: 2, name: "Proficient", desc: "Hands-on project experience", r: 100 },
  { level: 1, name: "Familiar", desc: "Working knowledge", r: 62 },
]

const tierByLevel: Record<Level, Tier> = { 4: tiers[0], 3: tiers[1], 2: tiers[2], 1: tiers[3] }

// Listed clockwise from 12 o'clock; colours follow the validated --viz-* slot order.
const domains: Domain[] = [
  {
    id: "genai",
    label: "Gen AI & Agents",
    short: "Gen AI",
    icon: Bot,
    color: "var(--viz-1)",
    blurb:
      "Agentic engineering in production — Claude Code pipelines, MCP tool-use and LLM-powered products.",
    skills: [
      { name: "Claude Code", level: 4, usedIn: ["figma-to-eds"] },
      { name: "Prompt Engineering", level: 4, usedIn: ["figma-to-eds", "webgenius-ai"] },
      { name: "LLMs", level: 3, usedIn: ["figma-to-eds", "webgenius-ai"] },
      { name: "Generative AI", level: 3, usedIn: ["figma-to-eds", "webgenius-ai"] },
      { name: "AI Agent Orchestration", level: 3, usedIn: ["figma-to-eds", "webgenius-ai"] },
      { name: "MCP Integration", level: 3, usedIn: ["figma-to-eds"] },
      { name: "Spec-Driven Codegen", level: 3, usedIn: ["figma-to-eds"] },
      { name: "Cursor", level: 3 },
      { name: "Antigravity", level: 2 },
      { name: "Machine Learning", level: 1 },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    short: "Frontend",
    icon: Code,
    color: "var(--viz-2)",
    blurb:
      "Performance-first React and Next.js interfaces — typed, accessible and structured to scale.",
    skills: [
      { name: "React", level: 4, usedIn: ["citizen-watch", "ev-cms", "astro-njoy"] },
      { name: "Next.js", level: 4, usedIn: ["citizen-watch", "abbvie-migration"] },
      { name: "JavaScript (ES6+)", level: 4 },
      { name: "HTML5 & CSS3", level: 4, usedIn: ["figma-to-eds"] },
      { name: "TypeScript", level: 3, usedIn: ["citizen-watch", "abbvie-migration"] },
      { name: "Redux", level: 3, usedIn: ["astro-njoy", "astro-canada"] },
      { name: "Tailwind CSS", level: 3, usedIn: ["citizen-watch"] },
      { name: "MUI", level: 3, usedIn: ["ev-cms", "astro-njoy"] },
      { name: "Core Web Vitals", level: 3, usedIn: ["citizen-watch"] },
      { name: "Angular", level: 2, usedIn: ["abbvie-migration"] },
      { name: "Accessibility (WCAG)", level: 2 },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    short: "Backend",
    icon: Server,
    color: "var(--viz-3)",
    blurb:
      "Node.js services and REST APIs with auth, role-based access and secure transport — the contract behind the UI.",
    skills: [
      { name: "Node.js", level: 4, usedIn: ["ev-cms", "figma-to-eds"] },
      { name: "Express.js", level: 4, usedIn: ["ev-cms"] },
      { name: "REST APIs", level: 4, usedIn: ["ev-cms", "astro-njoy"] },
      { name: "JWT Auth & RBAC", level: 3, usedIn: ["ev-cms"] },
      { name: "API Encryption", level: 3, usedIn: ["astro-canada", "astro-njoy"] },
      { name: "Microservices", level: 2 },
      { name: "Event-Driven Architecture", level: 2 },
      { name: "Python", level: 1 },
      { name: "Java", level: 1, usedIn: ["astro-njoy"] },
    ],
  },
  {
    id: "data",
    label: "Data",
    short: "Data",
    icon: Database,
    color: "var(--viz-4)",
    blurb: "MongoDB data modelling and aggregation pipelines, plus SQL → NoSQL migrations.",
    skills: [
      { name: "MongoDB", level: 4, usedIn: ["ev-cms"] },
      { name: "Aggregation Pipelines", level: 4, usedIn: ["ev-cms"] },
      { name: "Query Optimisation", level: 3, usedIn: ["ev-cms"] },
      { name: "SQL → NoSQL Migration", level: 3, usedIn: ["ev-cms"] },
      { name: "SQL", level: 3 },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    short: "Cloud",
    icon: Cloud,
    color: "var(--viz-5)",
    blurb:
      "Cloud deploys, CI/CD and containers — from a zero-downtime Cloudflare migration to S3-backed storage.",
    skills: [
      { name: "Git", level: 4 },
      { name: "Cloudflare", level: 3, usedIn: ["abbvie-migration", "citizen-watch"] },
      { name: "CI/CD", level: 3, usedIn: ["abbvie-migration"] },
      { name: "AWS (S3)", level: 3, usedIn: ["ev-cms"] },
      { name: "Netlify", level: 3, usedIn: ["abbvie-migration"] },
      { name: "Vercel", level: 3 },
      { name: "Docker", level: 2 },
      { name: "Kubernetes", level: 2 },
      { name: "GCP", level: 2 },
      { name: "Render", level: 2 },
    ],
  },
  {
    id: "aem",
    label: "Adobe AEM / CMS",
    short: "AEM",
    icon: Boxes,
    color: "var(--viz-6)",
    blurb:
      "Adobe Edge Delivery Services builds — blocks, Universal Editor models and automated content deployment.",
    skills: [
      { name: "AEM Edge Delivery Services", level: 3, usedIn: ["figma-to-eds"] },
      { name: "Universal Editor", level: 3, usedIn: ["figma-to-eds"] },
      { name: "Figma Dev Mode", level: 3, usedIn: ["figma-to-eds"] },
      { name: "AEM Package Manager API", level: 2, usedIn: ["figma-to-eds"] },
      { name: "JCR / FileVault", level: 2, usedIn: ["figma-to-eds"] },
      { name: "Direct Binary Upload", level: 2, usedIn: ["figma-to-eds"] },
    ],
  },
]

const techMarquee = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express",
  "Claude Code", "Cursor", "Antigravity", "LLMs", "Gen AI", "MCP",
  "GCP", "Docker", "Kubernetes", "Microservices", "AWS", "Cloudflare",
  "MongoDB", "REST", "Redux", "Tailwind", "AEM EDS", "CI/CD",
]

const caseStudyName = Object.fromEntries(projects.map((p) => [p.slug, p.title.split(" — ")[0]]))

// ── Skill map geometry (SVG user units) ──────────────────────────────────────
const VB = { x: 0, y: 20, w: 480, h: 440 }
const C = 240
const HUB = 34
const EDGE = 188
const LABEL_R = 202
const SPAN = 360 / domains.length
const START = -90 - SPAN / 2 // centres the first domain at 12 o'clock
const PAD = 7

// Rounded so server and client render identical attributes
const round = (n: number) => Math.round(n * 100) / 100

function polar(r: number, deg: number) {
  const a = (deg * Math.PI) / 180
  return { x: round(C + r * Math.cos(a)), y: round(C + r * Math.sin(a)) }
}

function wedge(a0: number, a1: number) {
  const o0 = polar(EDGE, a0)
  const o1 = polar(EDGE, a1)
  const i1 = polar(HUB, a1)
  const i0 = polar(HUB, a0)
  return `M${o0.x} ${o0.y}A${EDGE} ${EDGE} 0 0 1 ${o1.x} ${o1.y}L${i1.x} ${i1.y}A${HUB} ${HUB} 0 0 0 ${i0.x} ${i0.y}Z`
}

type Dot = { key: string; domain: Domain; skill: Skill; angle: number; x: number; y: number }

const dots: Dot[] = domains.flatMap((domain, i) => {
  const from = START + i * SPAN + PAD
  const usable = SPAN - 2 * PAD
  return tiers.flatMap((tier) => {
    const row = domain.skills.filter((s) => s.level === tier.level)
    const step = usable / row.length
    // Crowded rings zig-zag radially so neighbouring dots keep a usable hit area
    const crowded = (tier.r * step * Math.PI) / 180 < 26
    return row.map((skill, j) => {
      const angle = from + (j + 0.5) * step
      const r = tier.r + (crowded ? (j % 2 ? 8 : -8) : 0)
      return { key: `${domain.id}:${skill.name}`, domain, skill, angle, ...polar(r, angle) }
    })
  })
})

function LevelMeter({ level, color }: { level: Level; color: string }) {
  return (
    <span className="flex shrink-0 gap-1" aria-hidden>
      {[1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className="h-1.5 w-3 rounded-full sm:w-4"
          style={{ background: i <= level ? color : "hsl(var(--border))" }}
        />
      ))}
    </span>
  )
}

export default function Skills() {
  const [selectedId, setSelectedId] = useState(domains[0].id)
  const [active, setActive] = useState<{ key: string; from: "map" | "list" } | null>(null)

  const selected = domains.find((d) => d.id === selectedId) ?? domains[0]
  const ranked = [...selected.skills].sort((a, b) => b.level - a.level)
  const tierSummary = tiers
    .map((t) => ({ t, n: selected.skills.filter((s) => s.level === t.level).length }))
    .filter(({ n }) => n > 0)
    .map(({ t, n }) => `${n} ${t.name}`)
    .join(" · ")

  const tip = active?.from === "map" ? dots.find((d) => d.key === active.key) : undefined
  const tipLeft = tip ? (tip.x - VB.x) / VB.w : 0
  const tipShift = tipLeft > 0.7 ? "-85%" : tipLeft < 0.3 ? "-15%" : "-50%"

  return (
    <section id="skills" className="section-padding elegant-border relative">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="section-eyebrow">Toolkit</div>
          <h2 className="section-title">
            Technical <span className="gradient-text">expertise</span>
          </h2>
          <p className="section-subtitle">
            The stack I use to build, scale and ship production-grade software — mapped by
            domain and depth. Pick a domain to explore.
          </p>
        </motion.div>

        {/* Marquee */}
        <div className="mt-12 relative overflow-hidden rounded-2xl border border-border/60 bg-secondary/20 py-5">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
            style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
            style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
          />
          <div className="flex w-max animate-marquee gap-3 px-4">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span
                key={`${t}-${i}`}
                className="chip whitespace-nowrap text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Domain switcher — doubles as the map's legend */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {domains.map((d) => {
            const on = d.id === selected.id
            return (
              <button
                key={d.id}
                type="button"
                aria-pressed={on}
                onClick={() => setSelectedId(d.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                  on
                    ? "border-primary/40 bg-secondary text-foreground shadow-sm"
                    : "border-border/70 bg-background/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="size-2 rounded-full" style={{ background: d.color }} />
                {d.label}
                <span className="font-normal text-muted-foreground">{d.skills.length}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          {/* Skill map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="min-w-0 lg:col-span-7 card-surface p-4 sm:p-6"
          >
            <div className="relative mx-auto w-full max-w-[540px]">
              {/* Mouse-only enhancement; the tabs and domain list carry the same content accessibly */}
              <svg
                viewBox={`${VB.x} ${VB.y} ${VB.w} ${VB.h}`}
                className="block h-auto w-full select-none"
                aria-hidden
              >
                {domains.map((d, i) => (
                  <path
                    key={d.id}
                    d={wedge(START + i * SPAN, START + (i + 1) * SPAN)}
                    className="cursor-pointer"
                    style={{
                      fill: d.color,
                      fillOpacity: d.id === selected.id ? 0.09 : 0,
                      transition: "fill-opacity 300ms",
                    }}
                    onClick={() => setSelectedId(d.id)}
                  />
                ))}

                {tiers.map((t) => (
                  <circle
                    key={t.level}
                    cx={C}
                    cy={C}
                    r={t.r}
                    className="pointer-events-none fill-none stroke-border"
                    strokeWidth={1}
                  />
                ))}

                {domains.map((d, i) => {
                  const a = START + i * SPAN
                  const p0 = polar(HUB, a)
                  const p1 = polar(EDGE, a)
                  return (
                    <line
                      key={d.id}
                      x1={p0.x}
                      y1={p0.y}
                      x2={p1.x}
                      y2={p1.y}
                      className="pointer-events-none stroke-border"
                      strokeWidth={1}
                    />
                  )
                })}

                {/* Tier names ride the 3 o'clock divider, alternating sides so neighbours don't collide */}
                {tiers.map((t) => (
                  <text
                    key={t.level}
                    x={C + t.r}
                    y={C + (t.level % 2 ? -7 : 8)}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="pointer-events-none fill-muted-foreground stroke-card text-[9px] font-semibold uppercase tracking-wider"
                    style={{ paintOrder: "stroke", strokeWidth: 3 }}
                  >
                    {t.name}
                  </text>
                ))}

                {dots
                  .filter((n) => n.domain.id === selected.id)
                  .map((n) => {
                    const p = polar(HUB, n.angle)
                    return (
                      <motion.line
                        key={`spoke-${n.key}`}
                        x1={p.x}
                        y1={p.y}
                        x2={n.x}
                        y2={n.y}
                        strokeWidth={1}
                        strokeOpacity={0.45}
                        className="pointer-events-none"
                        style={{ stroke: n.domain.color }}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    )
                  })}

                <motion.g
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.015 } } }}
                >
                  {dots.map((n) => {
                    const inDomain = n.domain.id === selected.id
                    const isActive = active?.key === n.key
                    return (
                      <g
                        key={n.key}
                        className="cursor-pointer"
                        style={{
                          opacity: inDomain || isActive ? 1 : 0.3,
                          transition: "opacity 300ms",
                        }}
                        onPointerEnter={() => setActive({ key: n.key, from: "map" })}
                        onPointerLeave={() => setActive(null)}
                        onClick={() => setSelectedId(n.domain.id)}
                      >
                        <motion.g
                          variants={{
                            hidden: { scale: 0, opacity: 0 },
                            show: { scale: 1, opacity: 1 },
                          }}
                        >
                          {(inDomain || isActive) && (
                            <circle
                              cx={n.x}
                              cy={n.y}
                              r={isActive ? 13 : 10}
                              fillOpacity={0.2}
                              style={{ fill: n.domain.color }}
                            />
                          )}
                          <circle
                            cx={n.x}
                            cy={n.y}
                            r={6}
                            strokeWidth={2}
                            className="stroke-card"
                            style={{ fill: n.domain.color }}
                          />
                        </motion.g>
                        <circle cx={n.x} cy={n.y} r={13} fill="transparent" />
                      </g>
                    )
                  })}
                </motion.g>

                <circle
                  cx={C}
                  cy={C}
                  r={HUB}
                  strokeWidth={1}
                  className="pointer-events-none fill-card stroke-border"
                />
                <text
                  x={C}
                  y={C - 5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none fill-foreground text-[20px] font-bold"
                >
                  {selected.skills.length}
                </text>
                <text
                  x={C}
                  y={C + 13}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none fill-muted-foreground text-[8px] font-semibold uppercase tracking-widest"
                >
                  {selected.short}
                </text>

                {domains.map((d, i) => {
                  const mid = START + (i + 0.5) * SPAN
                  const p = polar(LABEL_R, mid)
                  const cos = Math.cos((mid * Math.PI) / 180)
                  return (
                    <text
                      key={d.id}
                      x={p.x}
                      y={p.y}
                      textAnchor={cos > 0.3 ? "start" : cos < -0.3 ? "end" : "middle"}
                      dominantBaseline="middle"
                      onClick={() => setSelectedId(d.id)}
                      className={`cursor-pointer text-[13px] font-semibold transition-colors ${
                        d.id === selected.id
                          ? "fill-foreground"
                          : "fill-muted-foreground hover:fill-foreground"
                      }`}
                    >
                      {d.short}
                    </text>
                  )
                })}
              </svg>

              {tip && (
                <div
                  role="tooltip"
                  className="pointer-events-none absolute z-10 whitespace-nowrap rounded-lg border border-border/70 bg-background/95 px-3 py-2 shadow-lg backdrop-blur"
                  style={{
                    left: `${tipLeft * 100}%`,
                    top: `${((tip.y - VB.y) / VB.h) * 100}%`,
                    transform: `translate(${tipShift}, calc(-100% - 14px))`,
                  }}
                >
                  <div className="text-sm font-semibold">{tip.skill.name}</div>
                  <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <span className="h-0.5 w-3 rounded-full" style={{ background: tip.domain.color }} />
                    {tierByLevel[tip.skill.level].name} · {tip.domain.label}
                  </div>
                </div>
              )}
            </div>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Each dot is a skill — the further from the centre, the deeper the experience.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-border/60 pt-5 sm:grid-cols-4">
              {tiers.map((t) => (
                <div key={t.level}>
                  <LevelMeter level={t.level} color="hsl(var(--muted-foreground))" />
                  <div className="mt-2 text-xs font-semibold">{t.name}</div>
                  <div className="text-[11px] leading-snug text-muted-foreground">{t.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Domain detail — the readable twin of the map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="min-w-0 lg:col-span-5 card-surface p-5 md:p-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-border/60"
                    style={{ background: `color-mix(in srgb, ${selected.color} 14%, transparent)` }}
                  >
                    <selected.icon className="h-5 w-5" style={{ color: selected.color }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-tight">{selected.label}</h3>
                    <div className="mt-0.5 text-xs text-muted-foreground">{tierSummary}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {selected.blurb}
                </p>

                <ul className="mt-4">
                  {ranked.map((s) => {
                    const key = `${selected.id}:${s.name}`
                    return (
                      <li
                        key={key}
                        onPointerEnter={() => setActive({ key, from: "list" })}
                        onPointerLeave={() => setActive(null)}
                        onFocus={() => setActive({ key, from: "list" })}
                        onBlur={() => setActive(null)}
                        className={`rounded-xl px-3 py-2 transition-colors ${
                          active?.key === key ? "bg-secondary" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="min-w-0 flex-1 text-sm font-medium leading-snug">
                            {s.name}
                          </span>
                          <LevelMeter level={s.level} color={selected.color} />
                          <span className="w-14 shrink-0 text-right text-[11px] text-muted-foreground sm:w-16">
                            {tierByLevel[s.level].name}
                          </span>
                        </div>
                        {s.usedIn && (
                          <div className="mt-1 flex flex-wrap gap-1.5">
                            {s.usedIn.map((slug) => (
                              <Link
                                key={slug}
                                href={`/case-studies/${slug}`}
                                className="rounded-md border border-border/60 bg-background/60 px-1.5 py-0.5 text-[10px] text-muted-foreground transition hover:border-primary/40 hover:text-foreground"
                              >
                                {caseStudyName[slug]}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
