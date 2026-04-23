"use client"

import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight, Layers } from "lucide-react"
import { useRef } from "react"
import { portfolioProjects, type Project } from "@/app/data/projects"

function TiltCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 })
  const glareX = useTransform(mx, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(my, [-0.5, 0.5], ["0%", "100%"])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative card-surface overflow-hidden ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      <Link
        href={`/case-studies/${project.slug}`}
        className="block p-6 md:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: `radial-gradient(400px circle at ${glareX.get()} ${glareY.get()}, hsl(var(--primary) / 0.12), transparent 40%)`,
          }}
        />
        <div
          className={`pointer-events-none absolute -top-20 -right-20 size-64 rounded-full opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-br ${project.accent}`}
        />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Layers className="h-3.5 w-3.5" />
              {project.subtitle}
            </div>
            <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight group-hover:gradient-text transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="text-right shrink-0">
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Year</div>
            <div className="text-sm font-semibold">{project.year}</div>
          </div>
        </div>

        <p className="relative mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>

        <div className="relative mt-8 flex items-center justify-between pt-6 border-t border-border/60">
          <div className="text-xs text-muted-foreground">
            <span className="text-foreground font-medium">{project.role}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            Read case study
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding elegant-border relative">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="section-eyebrow">Portfolio</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="section-subtitle">
            Selected work across enterprise clients and full-stack products. Click any card for the
            full case study.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 [perspective:1200px]">
          {portfolioProjects.map((p, i) => (
            <TiltCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
