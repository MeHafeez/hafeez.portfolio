"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.894 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/60 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-30 [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_70%)]" />
      <div className="container mx-auto container-padding py-14 relative">
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.04em] leading-none">
            <span className="gradient-text">Hafeez Shaik</span>
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Software Engineer & Full-Stack Developer crafting production-grade experiences.
            Open to senior and lead opportunities.
          </p>

          <div className="flex items-center gap-2">
            <a
              href="mailto:itshafiz.me@gmail.com"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/60 hover:border-primary/50 hover:text-primary transition"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/919885550459"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/60 hover:border-primary/50 hover:text-primary transition"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/MeHafeez"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/60 hover:border-primary/50 hover:text-primary transition"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shaik-hafeez-16a26321b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/60 hover:border-primary/50 hover:text-primary transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex w-full flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/60 text-xs text-muted-foreground">
            <div>© {year} Hafeez Shaik. Crafted with Next.js & Tailwind.</div>
            <div className="flex items-center gap-4">
              <Link href="#about" className="hover:text-foreground transition">About</Link>
              <Link href="#projects" className="hover:text-foreground transition">Projects</Link>
              <Link href="#contact" className="hover:text-foreground transition">Contact</Link>
              <a
                href="#"
                className="inline-flex items-center gap-1 hover:text-foreground transition"
              >
                Top <ArrowUp className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
