"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skills = [
    {
      name: "JavaScript",
      logo: "/logos/javascript.svg",
    },
    {
      name: "TypeScript",
      logo: "/logos/typescript.svg",
    },
    {
      name: "React",
      logo: "/logos/react.svg",
    },
    {
      name: "Angular",
      logo: "/logos/angular.svg",
    },
    {
      name: "Node.js",
      logo: "/logos/nodejs.svg",
    },
    {
      name: "Express",
      logo: "/logos/express.svg",
    },
    {
      name: "Python",
      logo: "/logos/python.svg",
    },
    {
      name: "Flask",
      logo: "/logos/flask.svg",
    },
    {
      name: "HTML5",
      logo: "/logos/html5.svg",
    },
    {
      name: "CSS3",
      logo: "/logos/css3.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "/logos/tailwindcssimg.png",
    },
    {
      name: "Bootstrap",
      logo: "/logos/bootstrap.svg",
    },
    {
      name: "PostgreSQL",
      logo: "/logos/postgresql.svg",
    },
    {
      name: "Firebase",
      logo: "/logos/firebase.svg",
    },
    {
      name: "Supabase",
      logo: "/logos/supabase.svg",
    },
    {
      name: "Git",
      logo: "/logos/git.svg",
    },
    {
      name: "Docker",
      logo: "/logos/docker.svg",
    },
    {
      name: "Google Cloud",
      logo: "/logos/googlecloud.svg",
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-50">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base font-medium text-primary mb-2"
          >
            MY SKILLS
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Technologies I Work With
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground"
          >
            I'm proficient in a variety of programming languages, frameworks, and tools.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={skill.logo || "/placeholder.svg"}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                  priority={index < 6}
                />
              </div>
              <p className="text-center font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
