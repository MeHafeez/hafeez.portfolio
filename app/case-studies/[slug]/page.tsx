import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getAdjacentProjects, getProjectBySlug, projects } from "@/app/data/projects"
import CaseStudyView from "./CaseStudyView"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) {
    return { title: "Case study not found" }
  }

  const title = `${project.title} · Case Study`
  const description = project.tagline

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [
        {
          url: "/profile.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `/case-studies/${project.slug}`,
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { prev, next } = getAdjacentProjects(slug)

  return <CaseStudyView project={project} prev={prev} next={next} />
}
