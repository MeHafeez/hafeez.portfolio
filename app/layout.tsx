import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import { metadata } from "./metadata"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

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
              jobTitle: "Software Engineer / Full-Stack Developer",
              description: metadata.description,
              image: metadata.openGraph?.images[0].url,
              sameAs: [
                // "https://twitter.com/zakeer579",
                "https://github.com/MeHafeez",
                "https://www.linkedin.com/in/shaik-hafeez-16a26321b/",
              ],
              url: "https://hafeezsh.vercel.app/",
              worksFor: {
                "@type": "Organization",
                name: "Evergent Techonologies pvt lmt",
              },
              // alumniOf: {
              //   "@type": "Organization",
              //   name: "SwoopTalent",
              // },
              knowsAbout: [
                "Frontend Engineer",
                "React",
                "Redux",
                "TypeScript",
                "JavaScript",
                "Software Engineer",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background text-foreground">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}

