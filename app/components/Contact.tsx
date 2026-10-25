"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Check,
  Copy,
  Clock,
  Download,
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

const EMAIL = "itshafiz.me@gmail.com"
const MESSAGE_MAX = 1000

const channels = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+91 98855 50459",
    href: "https://wa.me/919885550459?text=Hi%20Hafeez%2C%20I%20came%20across%20your%20portfolio",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98855 50459",
    href: "tel:+919885550459",
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

const intents = [
  {
    label: "Job opportunity",
    template: "Hi Hafeez, I'm hiring for a role on my team and would love to set up a quick call.",
  },
  {
    label: "Freelance project",
    template: "Hi Hafeez, I have a project in mind and would like to discuss scope and timeline.",
  },
  {
    label: "Collaboration",
    template: "Hi Hafeez, I'd like to explore collaborating with you on something.",
  },
  {
    label: "Just saying hi",
    template: "Hi Hafeez, I came across your portfolio and wanted to say hi!",
  },
]

// Rendered after mount so the server and client never disagree on the time
function LocalTime() {
  const [time, setTime] = useState<string | null>(null)
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZone: "Asia/Kolkata",
    })
    const tick = () => setTime(fmt.format(new Date()))
    tick()
    const id = setInterval(tick, 30_000)
    return () => clearInterval(id)
  }, [])
  return <span className="tabular-nums">{time ?? "—"} IST</span>
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormValues>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [intent, setIntent] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const messageLength = (watch("message") ?? "").length

  const pickIntent = (label: string, template: string) => {
    setIntent(label)
    // Only swap in a template if the visitor hasn't written their own message yet
    const current = getValues("message")
    if (!current || intents.some((i) => i.template === current)) {
      setValue("message", template)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard access can be blocked; the mailto link still works
    }
  }

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    const subject = encodeURIComponent(`${intent ?? "Portfolio contact"} — from ${data.name}`)
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    await new Promise((r) => setTimeout(r, 800))
    setIsSubmitting(false)
    setSubmitSuccess(true)
    setIntent(null)
    reset()
  }

  const inputCls =
    "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15"
  const labelCls = "mb-2 block text-xs font-semibold uppercase tracking-wider text-muted-foreground"

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
          {/* Direct channels */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="min-w-0 lg:col-span-2 card-surface p-6 md:p-7 relative overflow-hidden flex flex-col"
          >
            <div
              className="pointer-events-none absolute -top-24 -left-20 size-64 rounded-full opacity-30"
              style={{ background: "radial-gradient(closest-side, hsl(var(--brand-1) / 0.5), transparent)" }}
            />

            {/* Availability */}
            <div className="relative rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="relative flex size-2.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative size-2.5 rounded-full bg-emerald-500" />
                </span>
                Available for new roles
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                SDE-2 · Full-Stack · Frontend · Backend · Prompt Engineer
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Hyderabad, India
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> <LocalTime />
                </span>
              </div>
            </div>

            {/* Email — primary channel */}
            <div className="relative mt-5">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Email · fastest reply
              </div>
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-border/70 bg-background/70 p-2 pl-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="min-w-0 flex-1 truncate text-sm font-medium hover:text-primary transition-colors"
                >
                  {EMAIL}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? "Email copied" : "Copy email address"}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border/70 bg-secondary px-2.5 py-1.5 text-xs font-semibold transition hover:border-primary/40"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Other channels */}
            <div className="relative mt-5 grid grid-cols-2 gap-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-border/60 bg-background/50 p-3.5 transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-9 items-center justify-center rounded-lg border border-border/60 bg-secondary transition group-hover:border-primary/40">
                      <c.icon className="h-4 w-4 text-primary" />
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </div>
                  <div className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="break-words text-xs font-medium">{c.value}</div>
                </a>
              ))}
            </div>

            <a
              href="/Hafeez Shaik - Software  Engineer(Full-Stack Developer).pdf"
              download
              className="btn-ghost relative mt-5 w-full lg:mt-auto"
            >
              <Download className="h-4 w-4" />
              Download résumé (PDF)
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="min-w-0 lg:col-span-3 card-surface p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold">Send a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Pick a topic to get started — your email client opens with everything pre-filled.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-5">
              <fieldset>
                <legend className={labelCls}>What&apos;s it about?</legend>
                <div className="flex flex-wrap gap-2">
                  {intents.map((i) => {
                    const on = intent === i.label
                    return (
                      <button
                        key={i.label}
                        type="button"
                        aria-pressed={on}
                        onClick={() => pickIntent(i.label, i.template)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                          on
                            ? "border-primary/50 bg-primary/10 text-primary"
                            : "border-border/70 bg-background/60 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                        }`}
                      >
                        {on && <Check className="h-3 w-3" />}
                        {i.label}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Jane Doe"
                    autoComplete="name"
                    {...register("name", { required: "Name is required" })}
                    className={inputCls}
                  />
                  {errors.name && (
                    <span className="mt-1 block text-xs text-destructive">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="jane@company.com"
                    autoComplete="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className={inputCls}
                  />
                  {errors.email && (
                    <span className="mt-1 block text-xs text-destructive">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-baseline justify-between">
                  <label htmlFor="message" className={labelCls}>
                    Message
                  </label>
                  <span
                    className={`text-[11px] tabular-nums ${
                      messageLength > MESSAGE_MAX ? "text-destructive" : "text-muted-foreground"
                    }`}
                  >
                    {messageLength}/{MESSAGE_MAX}
                  </span>
                </div>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about the role, team or project..."
                  {...register("message", {
                    required: "Message is required",
                    maxLength: { value: MESSAGE_MAX, message: `Keep it under ${MESSAGE_MAX} characters` },
                  })}
                  className={`${inputCls} resize-none`}
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
                  className="btn-primary group disabled:opacity-60"
                >
                  {isSubmitting ? "Opening email..." : "Send message"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                {submitSuccess ? (
                  <span className="inline-flex items-center gap-2 text-sm text-emerald-500">
                    <CheckCircle2 className="h-4 w-4" />
                    Email client opened
                  </span>
                ) : (
                  <span className="text-xs text-muted-foreground">
                    Prefer chat?{" "}
                    <a
                      href={channels[0].href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-semibold text-foreground"
                    >
                      Message me on WhatsApp
                    </a>
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
