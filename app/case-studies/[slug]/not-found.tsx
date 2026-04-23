import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto container-padding">
        <div className="section-eyebrow">404</div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Case study <span className="gradient-text">not found</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          The project you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/#projects" className="btn-primary mt-8 inline-flex">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </div>
    </div>
  )
}
