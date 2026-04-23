"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

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

type FormValues = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    const subject = encodeURIComponent(`Portfolio contact from ${data.name}`)
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)
    window.location.href = `mailto:itshafiz.me@gmail.com?subject=${subject}&body=${body}`
    await new Promise((r) => setTimeout(r, 800))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    reset()
  }

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "itshafiz.me@gmail.com",
      href: "mailto:itshafiz.me@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98855 50459",
      href: "tel:+919885550459",
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: "+91 98855 50459",
      href: "https://wa.me/919885550459?text=Hi%20Hafeez%2C%20I%20came%20across%20your%20portfolio",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "https://www.google.com/maps/place/Hyderabad",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/HafeezSK",
      href: "https://www.linkedin.com/in/shaik-hafeez-16a26321b/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/MeHafeez",
      href: "https://github.com/MeHafeez",
    },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="container mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="section-eyebrow">Contact</div>
          <h2 className="section-title">
            Let&apos;s build something <span className="gradient-text">exceptional</span>
          </h2>
          <p className="section-subtitle">
            Open to senior / lead roles at MNCs and product companies. Drop a line — I respond
            within 24 hours.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 card-surface p-6 md:p-8 relative overflow-hidden"
          >
            <div
              className="absolute -top-24 -left-20 size-64 rounded-full opacity-30"
              style={{ background: "radial-gradient(closest-side, hsl(var(--brand-1) / 0.5), transparent)" }}
            />
            <h3 className="text-xl font-semibold">Contact information</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer a specific channel? Here&apos;s how to reach me.
            </p>

            <div className="mt-6 space-y-3">
              {contactItems.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-transparent p-3 hover:border-border/60 hover:bg-background/60 transition"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary border border-border/60 group-hover:border-primary/40 transition">
                    <c.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-sm font-medium truncate">{c.value}</div>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 card-surface p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold">Send a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill this out — your default email client will open with the details pre-filled.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jane Doe"
                    {...register("name", { required: "Name is required" })}
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                  />
                  {errors.name && (
                    <span className="mt-1 block text-xs text-destructive">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="jane@company.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
                  />
                  {errors.email && (
                    <span className="mt-1 block text-xs text-destructive">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about the role, team or project..."
                  {...register("message", { required: "Message is required" })}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15 resize-none"
                />
                {errors.message && (
                  <span className="mt-1 block text-xs text-destructive">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary disabled:opacity-60"
                >
                  {isSubmitting ? "Opening email..." : "Send message"}
                  <ArrowRight className="h-4 w-4" />
                </button>
                {submitSuccess && (
                  <span className="inline-flex items-center gap-2 text-sm text-emerald-500">
                    <CheckCircle2 className="h-4 w-4" />
                    Email client opened
                  </span>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
