"use client"

import { motion } from "framer-motion"

export default function Experience() {
  const experiences = [
    {
      company: "Evergent Technologies Private Limited",
      position: "Software Engineer(Fullstack Developer)",
      period: "Since April 2022",
      description:
        "As a Full-Stack Developer, I design and integrate scalable frontend, backend, and database solutions, with expertise in developing RESTful and GraphQL APIs.",
      achievements: [
        "Strategically enhanced CMS and dealer portal projects through innovative UI solutions, ensuring scalable, high-performance applications.",
        "Integrated RESTful and GraphQL APIs to ensure efficient data communication between frontend and backend systems.",
        "Collaborated closely with cross-functional teams in an Agile environment to deliver key project features within tight deadlines.",
        "Optimized database performance by implementing advanced MongoDB queries, improving data retrieval efficiency.",
        "Improved onboarding workflows by integrating Google Maps and dynamic PDF generation, enhancing the user experience in client-facing applications.",
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="border-l-2 border-primary pl-6"
            >
              <h3 className="text-2xl font-bold">{exp.company}</h3>
              <h4 className="text-xl font-semibold text-primary">{exp.position}</h4>
              <p className="text-muted-foreground mb-4">{exp.period}</p>
              <p className="mb-4">{exp.description}</p>
              <ul className="list-disc pl-5 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

