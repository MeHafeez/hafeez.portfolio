"use client"

import { motion } from "framer-motion"
import {
  Code,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Gauge,
  GitBranch,
  Layers,
} from "lucide-react"

type Group = {
  title: string
  icon: typeof Code
  items: string[]
}

const groups: Group[] = [
  {
    title: "Languages",
    icon: Code,
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    items: ["React", "Next.js", "Redux", "Angular", "Tailwind CSS", "MUI"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "REST APIs", "Event-Driven Arch."],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "Aggregations", "SQL → Mongo", "Indexing"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    items: ["AWS", "Cloudflare", "Vercel", "Netlify", "Render", "CI/CD"],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    items: ["JWT Auth", "Middleware", "API Encryption", "RBAC"],
  },
  {
    title: "Performance",
    icon: Gauge,
    items: ["Profiling", "Core Web Vitals", "Render Optimization", "Code Splitting"],
  },
  {
    title: "Workflow",
    icon: GitBranch,
    items: ["Agile / Scrum", "Git", "Code Reviews", "Mentoring"],
  },
]

const techMarquee = [
  "React", "Next.js", "TypeScript", "JavaScript", "Redux", "Node.js",
  "Express", "MongoDB", "REST", "AWS", "Cloudflare", "Vercel",
  "Tailwind", "JWT", "Angular", "MUI", "CI/CD", "Agile",
]

export default function Skills() {
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
            The stack I use to build, scale and ship production-grade software.
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

        {/* Bento categories */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="group card-surface p-5 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-[hsl(var(--brand-1)/0.15)] to-[hsl(var(--brand-2)/0.15)] border border-border/60">
                  <g.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold">{g.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs rounded-md border border-border/60 bg-background/50 px-2 py-1 text-foreground/80 transition-colors group-hover:border-primary/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
