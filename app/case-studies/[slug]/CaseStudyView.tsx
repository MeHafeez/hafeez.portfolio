"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Code2,
  Camera,
  Download,
  ImagePlus,
  Mail,
  MapPin,
  Sparkles,
  Target,
  Lightbulb,
  Rocket,
} from "lucide-react"
import type { GalleryItem, HeroImage, Project } from "@/app/data/projects"

type Props = {
  project: Project
  prev: Project | null
  next: Project | null
}

function HeroPhoto({
  image,
  accent,
}: {
  image: HeroImage
  accent: string
}) {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [errored, setErrored] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return
    if (el.complete) {
      if (el.naturalWidth > 0) setLoaded(true)
      else setErrored(true)
    }
  }, [image.src])

  const showPlaceholder = errored

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full"
    >
      {/* Glow backdrop */}
      <div
        className={`absolute -inset-6 rounded-[2rem] bg-gradient-to-br ${accent} blur-2xl opacity-60`}
        aria-hidden
      />

      <div className="relative rounded-[2rem] border border-border/60 bg-card/60 p-2 shadow-2xl shadow-black/5 backdrop-blur-sm">
        <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-[calc(2rem-8px)] bg-background/80">
          {!showPlaceholder && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                src={image.src}
                alt={image.alt ?? image.caption ?? "Hero image"}
                decoding="async"
                onLoad={() => setLoaded(true)}
                onError={() => setErrored(true)}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              />
              {!loaded && (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accent} animate-pulse`}
                  aria-hidden
                />
              )}
              {image.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent p-5">
                  <div className="text-sm md:text-base font-semibold">{image.caption}</div>
                </div>
              )}
            </>
          )}

          {showPlaceholder && (
            <div className="absolute inset-0 flex flex-col">
              <div
                className={`flex-1 grid place-items-center bg-gradient-to-br ${accent} relative overflow-hidden`}
              >
                <div className="absolute inset-0 dot-bg opacity-40" />
                <div className="relative flex flex-col items-center text-center px-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-background/80 backdrop-blur border border-border/60 shadow-sm">
                    <ImagePlus className="h-6 w-6 text-primary" />
                  </div>
                  {image.caption && (
                    <div className="mt-4 text-base font-semibold">{image.caption}</div>
                  )}
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                    Hero photo
                  </div>
                </div>
              </div>
              {image.hint && (
                <div className="border-t border-border/60 bg-background/70 p-3 text-[11px] font-mono text-muted-foreground break-all text-center">
                  Drop image at {image.hint}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Floating accent chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-full border border-border/70 bg-background/90 backdrop-blur px-3.5 py-1.5 text-xs font-semibold shadow-lg shadow-black/5"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-primary" />
        </span>
        Real moment
      </motion.div>
    </motion.div>
  )
}

function GalleryTile({
  item,
  index,
  accent,
}: {
  item: GalleryItem
  index: number
  accent: string
}) {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const [errored, setErrored] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = imgRef.current
    if (!el) return
    if (el.complete) {
      if (el.naturalWidth > 0) setLoaded(true)
      else setErrored(true)
    }
  }, [item.src])

  const aspectClass =
    item.aspect === "1/1"
      ? "aspect-square"
      : item.aspect === "4/3"
      ? "aspect-[4/3]"
      : item.aspect === "16/9"
      ? "aspect-[16/9]"
      : "aspect-[4/5]"

  const showPlaceholder = !item.src || errored

  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm ${aspectClass}`}
    >
      {!showPlaceholder && item.src && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={item.src}
            alt={item.caption}
            loading="lazy"
            decoding="async"
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
          {!loaded && (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${accent} animate-pulse`}
              aria-hidden
            />
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent p-4">
            <div className="text-sm font-semibold">{item.caption}</div>
          </div>
        </>
      )}

      {showPlaceholder && (
        <div className="absolute inset-0 flex flex-col">
          <div
            className={`flex-1 grid place-items-center bg-gradient-to-br ${accent} relative overflow-hidden`}
          >
            <div className="absolute inset-0 dot-bg opacity-40" />
            <div className="relative flex flex-col items-center text-center px-6">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-background/80 backdrop-blur border border-border/60 shadow-sm">
                <ImagePlus className="h-6 w-6 text-primary" />
              </div>
              <div className="mt-4 text-base font-semibold">{item.caption}</div>
              <div className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
                Photo slot {index + 1}
              </div>
            </div>
          </div>
          {item.hint && (
            <div className="border-t border-border/60 bg-background/70 p-3 text-[11px] font-mono text-muted-foreground break-all text-center">
              {item.hint}
            </div>
          )}
        </div>
      )}
    </motion.figure>
  )
}

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

export default function CaseStudyView({ project, prev, next }: Props) {
  return (
    <div className="relative">
      {/* Back bar */}
      <div className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="container mx-auto container-padding flex items-center justify-between py-3">
          <Link
            href={project.kind === "achievement" ? "/#education" : "/#projects"}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            <ArrowLeft className="h-4 w-4" />
            {project.kind === "achievement" ? "Back to portfolio" : "All projects"}
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
            <span className="chip">{project.company}</span>
            <span className="chip">{project.year}</span>
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-3 py-1.5 text-xs font-semibold hover:opacity-90 transition"
          >
            <Mail className="h-3.5 w-3.5" />
            Hire me
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />
        <div
          className={`absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-[120px] opacity-40 bg-gradient-to-br ${project.accent}`}
          aria-hidden
        />
        <div
          className={`absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full blur-[120px] opacity-30 bg-gradient-to-br ${project.accent}`}
          aria-hidden
        />

        <div className="container mx-auto container-padding relative pt-24 pb-16 md:pt-32 md:pb-24">
          <div
            className={`grid gap-10 lg:gap-14 items-center ${
              project.heroImage ? "lg:grid-cols-12" : ""
            }`}
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className={
                project.heroImage
                  ? "lg:col-span-7 max-w-4xl order-2 lg:order-1"
                  : "max-w-4xl"
              }
            >
              <motion.div variants={fade} className="flex flex-wrap items-center gap-2 mb-6">
                <span className="chip">
                  <Briefcase className="h-3 w-3" /> {project.subtitle}
                </span>
                <span className="chip">
                  <Calendar className="h-3 w-3" /> {project.period}
                </span>
                {project.location && (
                  <span className="chip">
                    <MapPin className="h-3 w-3" /> {project.location}
                  </span>
                )}
              </motion.div>

              <motion.h1
                variants={fade}
                className={`font-bold tracking-[-0.03em] leading-[1.02] ${
                  project.heroImage
                    ? "text-4xl sm:text-5xl md:text-6xl"
                    : "text-4xl sm:text-5xl md:text-7xl"
                }`}
              >
                {project.title.split(" — ")[0]}
                {project.title.includes(" — ") && (
                  <>
                    <span className="text-muted-foreground"> — </span>
                    <span className="gradient-text">{project.title.split(" — ")[1]}</span>
                  </>
                )}
              </motion.h1>

              <motion.p
                variants={fade}
                className="mt-6 max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                {project.tagline}
              </motion.p>

              {/* Meta card */}
              <motion.div
                variants={fade}
                className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl border border-border/60 bg-border/60 overflow-hidden"
              >
                {[
                  { label: "Role", value: project.role, icon: Briefcase },
                  { label: "Client", value: project.client, icon: Building2 },
                  { label: "Company", value: project.company, icon: Sparkles },
                  { label: "Year", value: project.year, icon: Calendar },
                ].map((m) => (
                  <div key={m.label} className="bg-background/80 backdrop-blur p-4 md:p-5">
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
                      <m.icon className="h-3 w-3" />
                      {m.label}
                    </div>
                    <div className="mt-1.5 text-sm md:text-base font-semibold">{m.value}</div>
                  </div>
                ))}
              </motion.div>

              {/* Tech pills */}
              <motion.div variants={fade} className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {project.heroImage && (
              <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="w-full max-w-[420px]">
                  <HeroPhoto image={project.heroImage} accent={project.accent} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding elegant-border">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="section-eyebrow !text-left">Overview</div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                The <span className="gradient-text">context</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground"
            >
              {project.overview.map((p, i) => (
                <p key={i} className={i === 0 ? "text-foreground/90" : ""}>
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact strip */}
      <section className="relative border-y border-border/60 bg-secondary/30 py-10 md:py-14">
        <div className="container mx-auto container-padding">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {project.impact.map((m) => (
              <motion.div
                key={m.label}
                variants={fade}
                className="card-surface p-5 md:p-6"
              >
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {m.label}
                </div>
                <div className="mt-2 text-2xl md:text-3xl font-bold gradient-text">
                  {m.value}
                </div>
                {m.note && (
                  <div className="mt-1 text-xs text-muted-foreground">{m.note}</div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding elegant-border">
        <div className="container mx-auto container-padding max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 border border-border/60">
              <Target className="h-5 w-5 text-rose-500" />
            </div>
            <div>
              <div className="section-eyebrow !text-left !mb-0">
                {project.challengesLabel ?? "The challenge"}
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                What we were up against
              </h2>
            </div>
          </motion.div>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {project.challenges.map((c) => (
              <motion.li
                key={c}
                variants={fade}
                className="card-surface p-5 flex gap-3"
              >
                <span className="mt-1 size-2 rounded-full bg-rose-500 shrink-0" />
                <span className="text-sm md:text-base text-foreground/90">{c}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding elegant-border">
        <div className="container mx-auto container-padding max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-500/20 border border-border/60">
              <Lightbulb className="h-5 w-5 text-sky-500" />
            </div>
            <div>
              <div className="section-eyebrow !text-left !mb-0">
                {project.approachLabel ?? "The approach"}
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                How I <span className="gradient-text">solved it</span>
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {project.approach.map((a, i) => (
              <motion.div
                key={a.title}
                variants={fade}
                whileHover={{ y: -4 }}
                className="group card-surface p-6 relative overflow-hidden"
              >
                <span className="absolute top-4 right-5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  0{i + 1}
                </span>
                <h3 className="text-lg md:text-xl font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {a.desc}
                </p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline + Tech split */}
      <section className="section-padding elegant-border">
        <div className="container mx-auto container-padding max-w-6xl grid lg:grid-cols-5 gap-6">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 card-surface p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-border/60">
                <Rocket className="h-4 w-4 text-violet-500" />
              </div>
              <h3 className="text-lg font-semibold">
                {project.timelineLabel ?? "Delivery timeline"}
              </h3>
            </div>

            <div className="relative pl-6">
              <span className="absolute left-[10px] top-1 bottom-1 w-px bg-border" />
              <div className="space-y-6">
                {project.timeline.map((t, i) => (
                  <motion.div
                    key={t.phase}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="relative"
                  >
                    <span className="absolute -left-[14px] top-1 flex size-3 items-center justify-center">
                      <span className="size-3 rounded-full bg-primary ring-4 ring-background" />
                    </span>
                    <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                      Phase 0{i + 1}
                    </div>
                    <div className="mt-0.5 text-base font-semibold">{t.phase}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{t.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 card-surface p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-border/60">
                <Code2 className="h-4 w-4 text-emerald-500" />
              </div>
              <h3 className="text-lg font-semibold">
                {project.stackLabel ?? "Tech stack"}
              </h3>
            </div>

            <div className="space-y-5">
              {project.stack.map((g) => (
                <div key={g.group}>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {g.group}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs rounded-md border border-border/60 bg-background/50 px-2 py-1 text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contributions */}
      <section className="section-padding elegant-border">
        <div className="container mx-auto container-padding max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="section-eyebrow">
              {project.contributionsLabel ?? "My contributions"}
            </div>
            <h2 className="section-title">
              What I <span className="gradient-text">shipped</span>
            </h2>
          </motion.div>

          <motion.ul
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 space-y-3"
          >
            {project.contributions.map((c) => (
              <motion.li
                key={c}
                variants={fade}
                className="group flex gap-4 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 md:p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--brand-1)/0.15)] to-[hsl(var(--brand-2)/0.15)] border border-border/60">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{c}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="section-padding elegant-border">
          <div className="container mx-auto container-padding max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-fuchsia-500/20 border border-border/60">
                <Camera className="h-5 w-5 text-pink-500" />
              </div>
              <div>
                <div className="section-eyebrow !text-left !mb-0">Gallery</div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                  {project.galleryTitle ?? (
                    <>
                      Moments & <span className="gradient-text">memories</span>
                    </>
                  )}
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.gallery.map((g, i) => (
                <GalleryTile key={i} item={g} index={i} accent={project.accent} />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-center text-xs text-muted-foreground"
            >
              Photos are optional — drop the files at the shown paths and they&apos;ll replace the
              placeholders automatically.
            </motion.p>
          </div>
        </section>
      )}

      {/* CTA + Nav */}
      <section className="section-padding">
        <div className="container mx-auto container-padding max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-8 md:p-14 text-center"
          >
            <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
            <div
              className={`absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full blur-[100px] opacity-60 bg-gradient-to-br ${project.accent}`}
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                {project.kind === "achievement" ? (
                  <>
                    Want someone who builds <span className="gradient-text">more than code</span>?
                  </>
                ) : (
                  <>
                    Have a similar <span className="gradient-text">challenge</span>?
                  </>
                )}
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                {project.kind === "achievement"
                  ? "I ship production-grade software and invest deeply in teams and culture. I'm open to senior and lead roles at MNCs and product companies."
                  : "I'm open to senior and lead roles at MNCs and product companies. Let's talk about what you're building."}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/#contact" className="btn-primary">
                  Get in touch
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="/Hafeez Shaik - Software  Engineer(Full-Stack Developer).pdf"
                  download
                  className="btn-ghost"
                >
                  <Download className="h-4 w-4" />
                  Download resume
                </a>
              </div>
            </div>
          </motion.div>

          {/* Prev / Next */}
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {prev && (
              <Link
                href={`/case-studies/${prev.slug}`}
                className="group card-surface p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <ArrowLeft className="h-3 w-3" /> Previous
                </div>
                <div className="mt-3 text-lg md:text-xl font-semibold group-hover:gradient-text">
                  {prev.title}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{prev.subtitle}</div>
              </Link>
            )}
            {next && (
              <Link
                href={`/case-studies/${next.slug}`}
                className="group card-surface p-6 hover:border-primary/40 transition-colors md:text-right"
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground md:justify-end">
                  Next <ArrowRight className="h-3 w-3" />
                </div>
                <div className="mt-3 text-lg md:text-xl font-semibold group-hover:gradient-text">
                  {next.title}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{next.subtitle}</div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
