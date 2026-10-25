"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  Check,
  Code2,
  Database,
  Figma,
  Globe,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Strength = {
  icon: LucideIcon
  title: string
  desc: string
  visual: () => React.ReactNode
  proof?: { label: string; href: string }
  className?: string
}

function PipelineVisual() {
  const reduce = useReducedMotion()
  const steps: { icon: LucideIcon; label: string }[] = [
    { icon: Figma, label: "Figma" },
    { icon: Bot, label: "Claude Code" },
    { icon: Blocks, label: "EDS blocks" },
    { icon: Globe, label: "AEM" },
  ]
  return (
    <div className="relative grid grid-cols-4 gap-2">
      <div className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-gradient-to-r from-primary/40 via-primary/60 to-primary/40" />
      {!reduce && (
        <motion.span
          aria-hidden
          className="absolute top-5 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]"
          animate={{ left: ["12.5%", "87.5%"] }}
          transition={{ duration: 2.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      )}
      {steps.map((s) => (
        <div key={s.label} className="relative flex flex-col items-center gap-2 text-center">
          <div className="flex size-10 items-center justify-center rounded-xl border border-border/70 bg-background shadow-sm transition-transform group-hover:-translate-y-0.5">
            <s.icon className="h-4 w-4 text-primary" />
          </div>
          <span className="text-[11px] font-medium text-muted-foreground">{s.label}</span>
        </div>
      ))}
    </div>
  )
}

function StackVisual() {
  const layers = [
    { name: "UI", items: ["React", "Next.js", "TypeScript"] },
    { name: "API", items: ["Node.js", "Express", "REST"] },
    { name: "Data", items: ["MongoDB", "Aggregations"] },
  ]
  return (
    <div className="flex flex-1 flex-col justify-center gap-6">
      <div className="space-y-2 transition-all group-hover:space-y-3">
        {layers.map((l, i) => (
          <div
            key={l.name}
            className="flex items-center gap-3 rounded-xl border border-border/70 bg-background/80 px-3 py-2.5 shadow-sm"
            style={{ marginLeft: i * 10, marginRight: (2 - i) * 10 }}
          >
            <span className="w-9 shrink-0 text-[10px] font-semibold uppercase tracking-widest text-primary">
              {l.name}
            </span>
            <span className="text-xs text-foreground/80">{l.items.join(" · ")}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-muted-foreground">
        {["API design", "Data model", "UI", "Shipped"].map((step, i) => (
          <span key={step} className="inline-flex items-center gap-1.5">
            {i > 0 && <ArrowRight className="h-3 w-3" />}
            {step}
          </span>
        ))}
      </div>
    </div>
  )
}

function TeamVisual() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex -space-x-2.5">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="flex size-9 items-center justify-center rounded-full border-2 border-card bg-secondary transition-transform group-hover:translate-x-0.5"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <Users className="h-3.5 w-3.5 text-muted-foreground" />
          </span>
        ))}
      </div>
      <div className="text-xs leading-snug text-muted-foreground">
        <span className="block font-semibold text-foreground">4 engineers</span>
        reviews · pairing · RFCs
      </div>
    </div>
  )
}

function VitalsVisual() {
  return (
    <div className="flex flex-wrap gap-2">
      {["LCP", "INP", "CLS", "Bundle"].map((m) => (
        <span
          key={m}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-background/80 px-2.5 py-1.5 text-xs font-medium"
        >
          <Check className="h-3 w-3 text-primary" />
          {m}
        </span>
      ))}
      <span className="w-full text-[11px] text-muted-foreground">Budgeted per route</span>
    </div>
  )
}

function QueryVisual() {
  return (
    <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
      {["$lookup", "$group", "$set"].map((op, i) => (
        <span key={op} className="inline-flex items-center gap-1.5">
          {i > 0 && <ArrowRight className="h-3 w-3 text-muted-foreground" />}
          <span className="rounded-md border border-border/70 bg-background/80 px-2 py-1 text-primary">
            {op}
          </span>
        </span>
      ))}
      <span className="w-full pt-1 font-sans text-[11px] text-muted-foreground">
        SQL → MongoDB · RBAC at the API boundary
      </span>
    </div>
  )
}

function CloudVisual() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      <div className="flex items-center gap-2 text-xs font-medium">
        <span className="rounded-lg border border-border/70 bg-background/80 px-2.5 py-1.5 text-muted-foreground line-through decoration-muted-foreground/60">
          Netlify
        </span>
        <ArrowRight className="h-3.5 w-3.5 text-primary transition-transform group-hover:translate-x-0.5" />
        <span className="rounded-lg border border-primary/40 bg-primary/10 px-2.5 py-1.5 text-primary">
          Cloudflare
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {["GCP", "AWS", "Docker", "Kubernetes", "CI/CD"].map((t) => (
          <span key={t} className="chip !px-2.5 !py-0.5 text-[11px]">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

// Bento order matters: spans are tuned so md (2 cols) and lg (3 cols) both tile without gaps.
const strengths: Strength[] = [
  {
    icon: Bot,
    title: "Agentic AI Engineering",
    desc:
      "Design agent workflows that ship production code — Claude Code + MCP pipelines driven by spec files, slash commands and deterministic verifiers.",
    visual: PipelineVisual,
    proof: { label: "Figma → AEM EDS pipeline", href: "/case-studies/figma-to-eds" },
    className: "md:col-span-2",
  },
  {
    icon: Code2,
    title: "Full-Stack Ownership",
    desc:
      "Own features end-to-end across React, Next.js, Node.js and MongoDB — from API design and data modeling to the shipped UI.",
    visual: StackVisual,
    proof: { label: "EV CMS", href: "/case-studies/ev-cms" },
    className: "lg:row-span-2",
  },
  {
    icon: Rocket,
    title: "Performance & Architecture",
    desc:
      "Restructure rendering paths, enforce per-route bundle budgets and refactor legacy frontends into modular, typed architectures.",
    visual: VitalsVisual,
    proof: { label: "Citizen Watch", href: "/case-studies/citizen-watch" },
  },
  {
    icon: Users,
    title: "Team Leadership",
    desc:
      "Led teams of up to 4 engineers — code reviews, pairing, RFCs and unblockers so every sprint ships production-ready work.",
    visual: TeamVisual,
    proof: { label: "Citizen Watch", href: "/case-studies/citizen-watch" },
  },
  {
    icon: Database,
    title: "Data & APIs",
    desc:
      "REST API design, MongoDB aggregation pipelines, SQL → Mongo migrations and role-based access at the API boundary.",
    visual: QueryVisual,
    proof: { label: "EV CMS", href: "/case-studies/ev-cms" },
  },
  {
    icon: ShieldCheck,
    title: "Cloud & DevOps",
    desc:
      "Owned a zero-downtime Netlify → Cloudflare migration. Hands-on with GCP, AWS, Docker, Kubernetes, CI/CD pipelines, microservices, JWT auth and API encryption.",
    visual: CloudVisual,
    proof: { label: "AbbVie migration", href: "/case-studies/abbvie-migration" },
    className: "md:col-span-2",
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function About() {
  return (
    <section id="about" className="section-padding elegant-border relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="section-eyebrow">About</div>
          <h2 className="section-title">
            Engineering <span className="gradient-text">scale, speed</span> & ownership
          </h2>
          <p className="section-subtitle">
            Six strengths I bring to every product team — each one backed by shipped work.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              variants={item}
              className={`group relative flex flex-col overflow-hidden card-surface p-6 transition-colors hover:border-primary/40 ${s.className ?? ""}`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(closest-side,hsl(var(--brand-2)/0.12),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-gradient-to-br from-[hsl(var(--brand-1)/0.15)] to-[hsl(var(--brand-2)/0.15)]">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono text-xs text-muted-foreground/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              <div className="relative mt-6 flex flex-1 flex-col">
                <s.visual />
              </div>

              {s.proof && (
                <Link
                  href={s.proof.href}
                  className="relative mt-6 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-primary"
                >
                  <span className="text-muted-foreground font-medium">Proof:</span>
                  {s.proof.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
