"use client"

import { motion } from "framer-motion"
import { Briefcase, Building2, CheckCircle2 } from "lucide-react"

type ExperienceItem = {
  company: string
  position: string
  period: string
  location: string
  clients?: string[]
  description: string
  achievements: string[]
  current?: boolean
}

const experiences: ExperienceItem[] = [
  {
    company: "Barbarian",
    position: "Software Engineer · Lead Frontend Developer",
    period: "Aug 2025 — Present",
    location: "Hyderabad, India",
    clients: ["AbbVie", "Citizen Watch"],
    current: true,
    description:
      "Delivering scalable, high-performance frontend and full-stack solutions for global clients. Leading end-to-end frontend ownership, large migrations and a team of developers in fast-paced environments.",
    achievements: [
      "Led migration of multiple applications (Next.js, React, Angular, JS/TS) from Netlify to Cloudflare for AbbVie — improving deployment reliability and performance.",
      "Served as Lead Frontend Developer for Citizen Watch, owning end-to-end frontend development and shipping production-ready features.",
      "Led a team of 4 developers, ensuring timely delivery, code quality and efficient collaboration.",
      "Refactored and optimized frontend codebases — improving performance, scalability and maintainability.",
      "Improved application performance by optimizing rendering and restructuring frontend architecture.",
    ],
  },
  {
    company: "Evergent Technologies",
    position: "Full-Stack Developer (MERN)",
    period: "Apr 2022 — Jul 2025",
    location: "Hyderabad, India",
    clients: ["Astro Malaysia", "Astro Canada", "EV CMS"],
    description:
      "Built and delivered scalable web applications across multiple client-facing projects using React, Node.js and MongoDB. Contributed to core CMS modules, REST API design and role-based access control.",
    achievements: [
      "Led design and development of core features across frontend (React) and backend (Node.js, Next.js) with integrated MongoDB.",
      "Created REST APIs for dynamic data handling — enabling efficient CRUD operations between client and server.",
      "Optimized storage using MongoDB with advanced methods like $set, $group and $lookup for relational data and aggregation.",
      "Converted complex SQL queries to efficient MongoDB operations — improving performance and scalability.",
      "Developed a robust role-based permissions system ensuring data visibility and access control.",
      "Integrated Google Maps for dealer onboarding and implemented PDF generation with EJS for Astro Canada.",
      "Implemented encryption for Java APIs, securing sensitive data transmitted over the network.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding elegant-border relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="container mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="section-eyebrow">Career</div>
          <h2 className="section-title">
            Experience <span className="gradient-text">timeline</span>
          </h2>
          <p className="section-subtitle">
            4+ years of shipping production software across startups and enterprise clients.
          </p>
        </motion.div>

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-6 md:gap-12 ${
                  idx % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                {/* Dot */}
                <span className="absolute left-4 md:left-1/2 top-8 md:-translate-x-1/2 flex size-4 items-center justify-center">
                  <span className="absolute inline-flex size-4 rounded-full bg-primary/25 animate-ping" />
                  <span className="relative inline-flex size-3 rounded-full bg-primary ring-4 ring-background" />
                </span>

                <div
                  className={`pl-12 md:pl-0 ${
                    idx % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 backdrop-blur px-3 py-1 text-[11px] font-semibold ${
                      exp.current ? "text-emerald-500" : "text-muted-foreground"
                    }`}
                  >
                    {exp.current && (
                      <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    )}
                    {exp.period}
                  </div>
                  <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight">
                    {exp.company}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground md:justify-end md:justify-items-end">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" />
                      {exp.position}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                  {exp.clients && (
                    <div
                      className={`mt-3 flex flex-wrap gap-2 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.clients.map((c) => (
                        <span key={c} className="chip">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div
                  className={`pl-12 md:pl-0 ${
                    idx % 2 === 0 ? "md:col-start-2" : "md:col-start-1 md:row-start-1 md:pr-12"
                  }`}
                >
                  <div className="card-surface p-6 hover:border-primary/40 transition">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="mt-5 space-y-3">
                      {exp.achievements.map((a) => (
                        <li key={a} className="flex gap-3 text-sm">
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                          <span className="text-foreground/90">{a}</span>
                        </li>
                      ))}
                    </ul>
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
