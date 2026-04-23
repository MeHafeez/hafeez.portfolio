import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import { metadata } from "./metadata"
import type React from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hafeez Shaik",
              jobTitle: "Software Engineer · Full-Stack Developer",
              description: metadata.description,
              image: metadata.openGraph?.images[0].url,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressCountry: "IN",
              },
              email: "mailto:itshafiz.me@gmail.com",
              telephone: "+91-9885550459",
              sameAs: [
                "https://github.com/MeHafeez",
                "https://www.linkedin.com/in/shaik-hafeez-16a26321b/",
              ],
              url: "https://hafeezsh.vercel.app/",
              worksFor: {
                "@type": "Organization",
                name: "Barbarian",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Acharya Nagarjuna University",
              },
              knowsAbout: [
                "Full-Stack Development",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "Express.js",
                "REST APIs",
                "Frontend Architecture",
                "Performance Optimization",
                "AWS",
                "Cloudflare",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="min-h-screen bg-background text-foreground">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
