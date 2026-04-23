
const siteConfig = {
  name: "Hafeez Shaik",
  title: "Software Engineer · Full-Stack Developer · Lead Frontend",
  description:
    "Portfolio of Hafeez Shaik — Full-Stack Engineer (MERN) with 4+ years shipping production-grade web applications. Currently Lead Frontend at Barbarian, delivering scalable solutions for AbbVie, Citizen Watch and more.",
  url: "https://hafeezsh.vercel.app",
  ogImage: "/profile.jpg",
  links: {
    github: "https://github.com/MeHafeez",
    linkedin: "https://www.linkedin.com/in/shaik-hafeez-16a26321b/",
  },
}

export const metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Hafeez Shaik",
    "Full-Stack Developer",
    "Lead Frontend Developer",
    "Software Engineer",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "AbbVie",
    "Citizen Watch",
    "Hyderabad Developer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default siteConfig
