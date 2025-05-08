"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      title: "Motive",
      description:
        "A full-stack trip planning application with intelligent recommendations using OpenAI and Google Maps integration.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Full Stack",
      technologies: ["React", "Flask", "Supabase", "TypeScript", "Tailwind CSS", "Google Maps API", "OpenAI API"],
      githubLink: "#",
    },
    {
      title: "PostWorkout",
      description: "A dynamic fitness tracker application with real-time workout tracking and visualization.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Full Stack",
      technologies: ["Angular", "Express", "Supabase", "TypeScript", "Tailwind CSS", "Chart.js"],
      githubLink: "#",
    },
    {
      title: "Techblog",
      description: "A full-stack blogging platform allowing users to create, edit, and manage blog posts.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Full Stack",
      technologies: ["Express", "Handlebars", "Bootstrap", "JavaScript", "JWT"],
      githubLink: "#",
    },
    {
      title: "CrypTalk",
      description: "A real-time cryptocurrency tracking platform with live price updates and relevant crypto news.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Frontend",
      technologies: ["React", "Redux", "Tailwind CSS", "PostgreSQL", "Chart.js", "Crypto API"],
      githubLink: "#",
    },
    {
      title: "YouTube Clone",
      description:
        "A YouTube-like video-sharing platform with video upload, commenting, and real-time statistics tracking.",
      image: "/placeholder.svg?height=600&width=800",
      category: "Full Stack",
      technologies: ["React", "Firebase", "Docker", "Google Cloud", "TypeScript"],
      githubLink: "#",
    },
  ]

  const categories = ["All", "Frontend", "Full Stack"]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

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

  return (
    <section id="projects" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/50"></div>

        {/* Animated circles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [Math.random() * 50 - 25, Math.random() * 50 - 25],
              y: [Math.random() * 50 - 25, Math.random() * 50 - 25],
              scale: [1, 1.05, 0.95, 1],
              rotate: [0, Math.random() * 10 - 5],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Grid pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="projectGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projectGrid)" />
        </svg>
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base font-medium text-primary mb-2"
          >
            MY WORK
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Recent Projects
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground"
          >
            Here are some of my recent projects. I've worked on a variety of projects, from web applications to mobile
            apps and UI/UX design.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black"
                    asChild
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm text-xs font-medium py-1 px-2 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-slate-100 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
