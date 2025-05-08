"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, GraduationCap, Calendar, Building, Download, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  const experienceRef = useRef(null)
  const educationRef = useRef(null)
  const isExperienceInView = useInView(experienceRef, { once: false, amount: 0.1 })
  const isEducationInView = useInView(educationRef, { once: false, amount: 0.1 })

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

  const experiences = [
    {
      title: "Computer Science Club Member",
      company: "Grand Valley State University",
      period: "2023 - Present",
      description:
        "Active member of the Computer Science Club, participating in coding challenges, hackathons, and collaborative projects. Engage in peer learning, workshops, and industry networking events to enhance technical skills and stay current with emerging technologies.",
    },
  ]

  const education = [
    {
      degree: "Master of Science - Artificial Intelligence",
      institution: "Grand Valley State University",
      period: "Expected: May 2030",
      description:
        "Specializing in machine learning, neural networks, computer vision, and natural language processing. Research focus on developing innovative AI solutions for real-world problems.",
      courses: [
        "Advanced Machine Learning",
        "Neural Networks & Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "AI Ethics & Governance",
        "Reinforcement Learning",
      ],
    },
    {
      degree: "Bachelor of Science - Computer Science",
      institution: "Grand Valley State University",
      period: "Expected: May 2028",
      description:
        "Comprehensive program covering core computer science principles, software development methodologies, and practical application of computing concepts.",
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Systems",
        "Computer Networks",
        "Operating Systems",
        "Software Engineering",
      ],
    },
    {
      degree: "Coding Bootcamp Certificate",
      institution: "Michigan State University",
      period: "Aug. 2022 - May 2023",
      description:
        "Intensive program focused on Full-Stack Development using JavaScript, React, Node.js, and Express. Developed multiple web applications and gained hands-on experience with modern web technologies.",
      courses: [
        "JavaScript Fundamentals",
        "React Development",
        "Node.js & Express",
        "RESTful API Design",
        "MongoDB & SQL Databases",
        "Full-Stack Projects",
      ],
    },
  ]

  const handleDownload = () => {
    const resumeUrl = '/Camdens_Resume.pdf';
    
    try {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Camdens_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    }
  }

  return (
    <section id="resume" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <svg className="absolute inset-0 h-full w-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="url(#smallGrid)" />
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base font-medium text-primary mb-2"
          >
            MY RESUME
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Experience & Education
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground"
          >
            My professional journey and educational background that have shaped my skills and expertise.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-2 h-6 w-6" />
              Experience
            </h3>
            <motion.div
              ref={experienceRef}
              variants={containerVariants}
              initial="hidden"
              animate={isExperienceInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-muted-foreground/20 hover:border-primary transition-colors duration-300"
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-2 border-primary" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold">{exp.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center text-primary mb-2">
                    <Building className="mr-2 h-4 w-4" />
                    {exp.company}
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education Section */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6" />
              Education
            </h3>
            <motion.div
              ref={educationRef}
              variants={containerVariants}
              initial="hidden"
              animate={isEducationInView ? "visible" : "hidden"}
              className="space-y-12"
            >
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-muted-foreground/20 hover:border-primary transition-colors duration-300"
                >
                  <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-white border-2 border-primary" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold">{edu.degree}</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                  <div className="flex items-center text-primary mb-2">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    {edu.institution}
                  </div>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  <div className="mt-4">
                    <div className="flex items-center text-sm font-medium mb-2">
                      <BookOpen className="mr-2 h-4 w-4 text-primary" />
                      <span>Key Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span key={courseIndex} className="text-xs bg-slate-100 px-2 py-1 rounded-full">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center mt-12"
          >
            <Button 
              size="lg" 
              className="gap-2 rounded-full"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4" />
              Download Full Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
