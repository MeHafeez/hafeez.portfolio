"use client"

import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Evergent - Content Management System.",
      description:
        "As a Full-Stack Developer, I design and integrate scalable frontend, backend, and database solutions, with expertise in developing RESTful and GraphQL APIs. ",
      technologies: ["React", "Node.js","Express.js","AWS", "MongoDB","MUI"],
    },
    {
      title: "Astro-Canada",
      description:
        "As a Frontend Developer, I design and develop scalable user interfaces with seamless integration of RESTful and GraphQL APIs for efficient data handling.",
      technologies: ["React", "Node.js", "MongoDB","AWS","MUI"],
    },
    {
      title: "Astro-Njoy",
      description:
        "As a Frontend Developer, I design and develop scalable user interfaces with seamless integration of RESTful and GraphQL APIs for efficient data handling.",
      technologies: ["React", "Node.js", "MongoDB","MUI", "AWS","ejs"],
    },
  ]

  return (
    <section id="projects" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-t-2 border-primary pt-6"
            >
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-primary text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

