"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    {
      category: "Frontend Development",
      items: [
        { name: "React", level: 75 },
        { name: "Redux", level: 70 },
        { name: "TypeScript", level: 55 },
        { name: "JavaScript", level: 80 },
        { name: "MUI", level: 70 },

      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "RESTful APIs", level: 85 },
        { name: "GraphQL", level: 70 },
      ],
    },
    {
      category: "Database & Management System",
      items: [
        { name: "MongoDB", level: 75 },
        { name: "mySQL", level: 40 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6">{skillCategory.category}</h3>
              <div className="space-y-4">
                {skillCategory.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium">{skill.name}</span>
                      <span className="text-sm font-medium text-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-1">
                      <motion.div
                        className="bg-primary h-1 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

