import type { MetadataRoute } from "next"
import siteConfig from "./metadata"
import { projects } from "./data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const anchors = [
    { path: "", priority: 1 },
    { path: "#about", priority: 0.8 },
    { path: "#experience", priority: 0.8 },
    { path: "#projects", priority: 0.9 },
    { path: "#skills", priority: 0.8 },
    { path: "#education", priority: 0.7 },
    { path: "#contact", priority: 0.8 },
  ]

  const main = anchors.map((a) => ({
    url: a.path ? `${siteConfig.url}/${a.path}` : siteConfig.url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: a.priority,
  }))

  const caseStudies = projects.map((p) => ({
    url: `${siteConfig.url}/case-studies/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  return [...main, ...caseStudies]
}
