"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-right lg:order-2 lg:w-1/2 md:w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-right"
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
            <span className="block">Hafeez Shaik</span>
            <span className="block text-primary mt-2">
              <TypeAnimation
                sequence={["Software Engineer", 2000, "Full-Stack Developer", 2000, "Frontend Developer", 2000]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto lg:ml-auto text-xl text-muted-foreground">
            Visionary Software Engineering with 3+ years of experience in leading cross-functional teams and
            spearheading the development of best-in-class UI solutions.
          </p>
          <motion.div
            className="mt-10 flex flex-col md:flex-col lg:flex-row gap-4 justify-center lg:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="px-8 py-3 border border-primary text-base font-medium rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href="/Hafeez Shaik - Software  Engineer(Full-Stack Developer).pdf"
              download
              className="ml-4 px-8 py-3 bg-primary text-base font-medium rounded-full text-primary-foreground hover:bg-primary hover:opacity-70 transition-colors duration-300">
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Image Container */}
      <div className="w-full lg:w-1/2 h-full mt-8 lg:mt-0 lg:order-1">
        <img
          src="./profile.png" // Replace with your image path
          alt="Hafeez Shaik"
          className="w-full h-full object-cover lg:object-contain"
        />
      </div>
    </section>
  )
}

