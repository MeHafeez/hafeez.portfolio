"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const menuItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    menuItems.forEach((item) => {
      const el = document.querySelector(item.href)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.href)
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-3 left-0 right-0 z-50 mx-auto flex items-center justify-center px-3 sm:px-6 transition-all duration-500",
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border px-3 py-2 transition-all duration-500",
          scrolled
            ? "border-border/70 bg-background/70 backdrop-blur-xl shadow-lg shadow-black/5"
            : "border-transparent bg-transparent",
        )}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2 pl-1">
          <span className="relative block size-9 shrink-0 rounded-full overflow-hidden ring-2 ring-border group-hover:ring-primary transition">
            <Image src="/updatedlogo.png" alt="Hafeez Shaik" fill sizes="36px" className="object-cover" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-semibold">Hafeez Shaik</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Full-Stack Engineer</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-background/50 backdrop-blur-md px-1 py-1">
          {menuItems.map((item) => {
            const isActive = active === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3.5 py-1.5 text-xs font-medium transition-colors",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-1">
          <div className="hidden lg:flex items-center gap-1">
            <Button asChild variant="ghost" size="icon" className="rounded-full size-9">
              <a
                href="https://github.com/MeHafeez"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full size-9">
              <a
                href="https://www.linkedin.com/in/shaik-hafeez-16a26321b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full size-9"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ y: -8, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 8, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex"
                >
                  {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </motion.span>
              </AnimatePresence>
            </Button>
          )}

          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full size-9">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full rounded-b-3xl border-b">
                <nav className="flex flex-col divide-y divide-border">
                  {menuItems.map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-3 text-lg font-semibold text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <span>{item.label}</span>
                        <span className="text-xs text-muted-foreground">0{i + 1}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex ml-1 rounded-full bg-foreground text-background px-4 py-2 text-xs font-semibold hover:opacity-90 transition"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </motion.header>
  )
}
