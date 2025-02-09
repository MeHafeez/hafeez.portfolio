"use client"

import { motion } from "framer-motion"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="section-padding elegant-border">
      <div className="container mx-auto container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto space-y-6 text-lg">
            <p>
              As a Technology and Innovation Enthusiast, I excel in both startup environments and large-scale
              enterprises, bringing dynamic creativity and a proactive &apos;can-do&apos; attitude to every project.
            </p>
            <p>
            With over 3 years of experience as a Full-Stack Developer, I specialize in building scalable, 
            high-performance web applications using React, JavaScript, TypeScript, Node.js, and MongoDB.
             My expertise extends to modern development tools and technologies, including Webpack and Babel, 
             enabling me to optimize application performance and streamline development workflows.
            </p>
            <p>
            I am passionate about creating clean, maintainable code and delivering intuitive user experiences through robust UI architectures and seamless backend integrations. 
            Beyond coding, I actively contribute to team growth, mentor peers, and drive best practices to ensure the delivery of high-quality, production-ready solutions.
            </p>
            <p>
            Always eager to learn and innovate, I stay updated with the latest industry trends to build cutting-edge applications that make a real impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

