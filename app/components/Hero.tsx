"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ArrowRight, Download, MapPin, Sparkles, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

function MagneticButton({
  children,
  className,
  href,
  download,
}: {
  children: React.ReactNode
  className?: string
  href: string
  download?: boolean
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.a>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const tx = useTransform(mx, (v) => v * 8)
  const ty = useTransform(my, (v) => v * 8)
  const sx = useSpring(tx, { stiffness: 80, damping: 20 })
  const sy = useSpring(ty, { stiffness: 80, damping: 20 })

  const handleParallax = (e: React.MouseEvent<HTMLElement>) => {
    const r = containerRef.current?.getBoundingClientRect()
    if (!r) return
    mx.set((e.clientX - (r.left + r.width / 2)) / r.width)
    my.set((e.clientY - (r.top + r.height / 2)) / r.height)
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleParallax}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <motion.div
        style={{ x: sx, y: sy }}
        className="glow-orb animate-aurora"
        aria-hidden
      >
        <div
          className="size-[520px] -left-40 top-10 absolute"
          style={{ background: "hsl(var(--brand-1) / 0.7)" }}
        />
      </motion.div>
      <motion.div
        style={{ x: sx, y: sy }}
        className="glow-orb animate-aurora"
        aria-hidden
      >
        <div
          className="size-[520px] -right-40 bottom-0 absolute"
          style={{ background: "hsl(var(--brand-2) / 0.55)" }}
        />
      </motion.div>
      <div
        className="glow-orb animate-pulse-soft"
        aria-hidden
      >
        <div
          className="size-[360px] left-1/2 top-1/3 -translate-x-1/2 absolute"
          style={{ background: "hsl(var(--brand-3) / 0.35)" }}
        />
      </div>

      <div className="relative z-10 container mx-auto container-padding pt-32 pb-20 md:pt-36 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-10 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-6 xl:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative rounded-full size-2 bg-emerald-500" />
              </span>
              Available for Senior / Lead Frontend & Full-Stack roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.02]"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Hafeez Shaik</span>.
              <br />
              <span className="text-foreground/90">I build </span>
              <TypeAnimation
                sequence={[
                  "scalable web apps.",
                  2000,
                  "high-performance UIs.",
                  2000,
                  "production-grade systems.",
                  2000,
                  "delightful experiences.",
                  2000,
                ]}
                wrapper="span"
                speed={55}
                repeat={Number.POSITIVE_INFINITY}
                className="gradient-text"
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Full-Stack Engineer with{" "}
              <span className="text-foreground font-semibold">4+ years</span> delivering
              production-grade MERN and Next.js applications. Currently leading frontend at{" "}
              <span className="text-foreground font-semibold">Barbarian</span> for clients like{" "}
              <span className="text-foreground font-semibold">AbbVie</span> and{" "}
              <span className="text-foreground font-semibold">Citizen Watch</span> — shipping
              scalable architectures, owning migrations, and mentoring teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href="#contact" className="btn-primary group">
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </MagneticButton>
              <MagneticButton
                href="/Hafeez Shaik - Software  Engineer(Full-Stack Developer).pdf"
                download
                className="btn-ghost group"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-5 text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> Hyderabad, India
              </span>
              <a
                href="mailto:itshafiz.me@gmail.com"
                className="inline-flex items-center gap-1.5 link-underline hover:text-foreground"
              >
                <Mail className="h-3.5 w-3.5" /> itshafiz.me@gmail.com
              </a>
              <a
                href="https://github.com/MeHafeez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 link-underline hover:text-foreground"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-hafeez-16a26321b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 link-underline hover:text-foreground"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
              }}
              className="mt-10 grid grid-cols-3 gap-4 max-w-lg"
            >
              {[
                { v: "4+", l: "Years Exp." },
                { v: "10+", l: "Projects Shipped" },
                { v: "1st", l: "AI Hackathon" },
              ].map((s) => (
                <motion.div
                  key={s.l}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="card-surface p-4"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile card */}
          <div className="lg:col-span-6 xl:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ x: useTransform(mx, (v) => v * -18), y: useTransform(my, (v) => v * -18) }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[hsl(var(--brand-1)/0.4)] via-[hsl(var(--brand-2)/0.35)] to-[hsl(var(--brand-3)/0.4)] blur-3xl opacity-70 animate-pulse-soft" />

              <div className="relative shine-border rounded-[2rem] p-1">
                <div className="relative overflow-hidden rounded-[calc(2rem-4px)] bg-card aspect-[4/5] w-[320px] sm:w-[400px] md:w-[460px] lg:w-[480px]">
                  <Image
                    src="/profile.jpg"
                    alt="Hafeez Shaik"
                    fill
                    sizes="(max-width: 768px) 80vw, 360px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="glass rounded-xl px-3 py-2">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Currently
                      </div>
                      <div className="text-sm font-semibold">Lead @ Barbarian</div>
                    </div>
                    <div className="glass rounded-xl p-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -left-6 top-10 glass rounded-2xl px-3 py-2 shadow-xl hidden sm:flex items-center gap-2"
              >
                <span className="size-2 rounded-full bg-sky-500" />
                <span className="text-xs font-semibold">React · Next.js</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -right-4 top-1/2 glass rounded-2xl px-3 py-2 shadow-xl hidden sm:flex items-center gap-2"
              >
                <span className="size-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold">Node · MongoDB</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -left-2 bottom-6 glass rounded-2xl px-3 py-2 shadow-xl hidden sm:flex items-center gap-2"
              >
                <span className="size-2 rounded-full bg-violet-500" />
                <span className="text-xs font-semibold">TypeScript</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY }}
          className="h-8 w-px bg-gradient-to-b from-muted-foreground to-transparent"
        />
      </motion.div>
    </section>
  )
}
