"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowUpRight,
  Bot,
  Building2,
  GraduationCap,
  HeartHandshake,
  Mic,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { getProjectBySlug, type Project } from "@/app/data/projects"

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

type Milestone = {
  icon: LucideIcon
  title: string
  desc: string
  href?: string
  now?: boolean
}

const milestones: Milestone[] = [
  {
    icon: Building2,
    title: "Software Engineer — Samsung",
    desc: "Currently a Software Engineer on the Samsung account at Barbarian.",
    now: true,
  },
  {
    icon: Bot,
    title: "Figma → AEM EDS Pipeline",
    desc: "Built an agentic Claude Code + Figma MCP pipeline that generated 14+ reusable EDS blocks.",
    href: "/case-studies/figma-to-eds",
  },
  {
    icon: Sparkles,
    title: "Lead Frontend — Citizen Watch",
    desc: "Owned end-to-end delivery of production features and led a team of 4.",
    href: "/case-studies/citizen-watch",
  },
  {
    icon: Target,
    title: "Cross-Framework Migrations — AbbVie",
    desc: "Moved Next.js, React, Angular and JS/TS apps from Netlify to Cloudflare.",
    href: "/case-studies/abbvie-migration",
  },
]

const hats = [
  { icon: Users, label: "Sports Committee" },
  { icon: Users, label: "Fun Committee" },
  { icon: Users, label: "Cricket Committee" },
  { icon: Mic, label: "EPL Live Commentary" },
]

type Photo = { src: string; caption: string }

// Hero image first, then the rest of the case-study gallery
function photosOf(project: Project | undefined): Photo[] {
  if (!project) return []
  const hero = project.heroImage
    ? [{ src: project.heroImage.src, caption: project.heroImage.caption ?? project.title }]
    : []
  const rest = (project.gallery ?? [])
    .filter((g): g is typeof g & { src: string } => !!g.src && g.src !== hero[0]?.src)
    .map((g) => ({ src: g.src, caption: g.caption }))
  return [...hero, ...rest]
}

function PhotoSwitcher({
  photos,
  badge,
  className = "aspect-[16/10]",
}: {
  photos: Photo[]
  badge: React.ReactNode
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const photo = photos[index]
  if (!photo) return null

  return (
    <div className={`relative overflow-hidden bg-secondary ${className}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={photo.src}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="absolute inset-0"
        >
          <Image
            src={photo.src}
            alt={photo.caption}
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ objectPosition: "center 45%" }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute left-4 top-4">{badge}</div>

      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
        <span className="min-w-0 truncate text-xs font-medium text-white/90">{photo.caption}</span>
        <div className="flex shrink-0 gap-1.5">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              aria-label={`Show photo: ${p.caption}`}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
              onMouseEnter={() => setIndex(i)}
              className={`relative size-9 overflow-hidden rounded-lg border-2 transition sm:size-10 ${
                i === index ? "border-white" : "border-white/30 opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={p.src} alt="" fill sizes="40px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function Badge({ icon: Icon, children }: { icon: LucideIcon; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-neutral-900 shadow-lg backdrop-blur">
      <Icon className="h-3.5 w-3.5" />
      {children}
    </span>
  )
}

function CaseStudyLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-border/70 bg-background/80 px-3.5 py-1.5 text-xs font-semibold text-foreground backdrop-blur transition hover:border-primary/40 hover:bg-background"
    >
      Read case study
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  )
}

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
}

export default function Education() {
  const hackathon = photosOf(getProjectBySlug("webgenius-ai"))
  const culture = photosOf(getProjectBySlug("evergent-culture"))

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

        {/* Achievements with photos */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <motion.article
            {...reveal}
            transition={{ duration: 0.6 }}
            className="group flex min-w-0 flex-col overflow-hidden card-surface lg:col-span-7"
          >
            <PhotoSwitcher photos={hackathon} badge={<Badge icon={Trophy}>1st Place</Badge>} />
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600 dark:text-amber-400">
                Internal AI Hackathon · Evergent
              </div>
              <h3 className="mt-2 text-xl font-semibold">WebGenius-AI — Team CodeStormers</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Led the team to 1st place with an AI-powered test automation platform combining
                LLMs and Computer Vision.
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                {[
                  "Team Lead — built most of the core logic",
                  "Led the pitch in front of the jury",
                  "Guided a shared technical vision",
                ].map((b) => (
                  <li
                    key={b}
                    className="rounded-xl border border-border/60 bg-background/60 px-3 py-2.5 text-xs leading-snug text-foreground/85"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <CaseStudyLink href="/case-studies/webgenius-ai" />
              </div>
            </div>
          </motion.article>

          <motion.article
            {...reveal}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="group flex min-w-0 flex-col overflow-hidden card-surface lg:col-span-5"
          >
            {/* Taller frame on lg so this narrower card lines up with the hackathon card */}
            <PhotoSwitcher
              photos={culture}
              badge={<Badge icon={HeartHandshake}>Beyond code</Badge>}
              className="aspect-[16/10] lg:aspect-[10/9]"
            />
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-400">
                Culture & Community · Evergent
              </div>
              <h3 className="mt-2 text-xl font-semibold">Fun Fridays, committees & EPL</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Organized Fun Fridays and co-hosted the Evergent Premier League in 2024 & 2025 —
                including live commentary.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {hats.map((h) => (
                  <span key={h.label} className="chip !px-2.5 text-[11px]">
                    <h.icon className="h-3 w-3" />
                    {h.label}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <CaseStudyLink href="/case-studies/evergent-culture" />
              </div>
            </div>
          </motion.article>
        </div>

        {/* Education + milestones */}
        <div className="mt-5 grid gap-5 lg:grid-cols-12">
          <motion.div
            {...reveal}
            transition={{ duration: 0.6 }}
            className="min-w-0 card-surface p-6 md:p-7 lg:col-span-5"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-gradient-to-br from-[hsl(var(--brand-1)/0.2)] to-[hsl(var(--brand-2)/0.15)]">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Education</h3>
            </div>

            <ol className="relative mt-6 space-y-4 before:absolute before:bottom-3 before:left-[7px] before:top-3 before:w-px before:bg-border">
              {education.map((e) => (
                <li key={e.school} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 flex size-[15px] items-center justify-center rounded-full border-2 border-primary bg-background">
                    <span className="size-1.5 rounded-full bg-primary" />
                  </span>
                  <div className="rounded-xl border border-border/60 bg-background/60 p-4 transition hover:border-primary/40">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <div className="font-semibold">{e.school}</div>
                      <div className="text-xs font-medium text-primary">{e.period}</div>
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">{e.degree}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground/80">{e.location}</div>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            {...reveal}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="min-w-0 lg:col-span-7"
          >
            <div className="grid h-full gap-4 sm:grid-cols-2">
              {milestones.map((m) => {
                const body = (
                  <>
                    <div className="flex items-center justify-between">
                      <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-background/80">
                        <m.icon className="h-5 w-5 text-primary" />
                      </div>
                      {m.now ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                          <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                          Now
                        </span>
                      ) : (
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      )}
                    </div>
                    <h3 className="mt-4 font-semibold leading-snug">{m.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
                  </>
                )
                const cls =
                  "group block h-full card-surface p-5 transition hover:-translate-y-0.5 hover:border-primary/40"
                return m.href ? (
                  <Link key={m.title} href={m.href} className={cls}>
                    {body}
                  </Link>
                ) : (
                  <div key={m.title} className={cls}>
                    {body}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
