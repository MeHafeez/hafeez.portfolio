"use client"

import { motion } from "framer-motion"
import {
  Code2,
  Rocket,
  Users,
  Zap,
  Database,
  ShieldCheck,
} from "lucide-react"

const cards = [
  {
    icon: Code2,
    title: "Full-Stack Ownership",
    desc:
      "End-to-end ownership across React, Next.js, Node.js and MongoDB — from REST API design to shipping production UIs.",
  },
  {
    icon: Rocket,
    title: "Performance Obsessed",
    desc:
      "Profiling, rendering optimization and Core Web Vitals — I restructure codebases to be fast, lean and maintainable.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    desc:
      "Currently leading a team of 4+ developers, driving code quality, timely delivery and Agile best practices.",
  },
  {
    icon: Zap,
    title: "Scalable Architecture",
    desc:
      "Refactored large legacy frontends into modular, scalable architectures — improving maintainability and velocity.",
  },
  {
    icon: Database,
    title: "Data & APIs",
    desc:
      "REST APIs, MongoDB aggregations (lookup, $group, $set), SQL → Mongo conversions and event-driven flows.",
  },
  {
    icon: ShieldCheck,
    title: "Security & DevOps",
    desc:
      "JWT auth, middleware, API encryption, CI/CD on AWS, Cloudflare, Netlify, Vercel and Render.",
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
            Building products that <span className="gradient-text">scale</span> & delight
          </h2>
          <p className="section-subtitle">
            Full-Stack Developer (MERN) with 4+ years delivering production-grade web applications.
            I thrive in both startups and large enterprises — bringing dynamic creativity, a
            proactive &apos;can-do&apos; attitude, and a relentless focus on quality.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              whileHover={{ y: -4 }}
              className="group card-surface p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--brand-1)/0.15)] to-[hsl(var(--brand-2)/0.15)] border border-border/60">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Strength
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
