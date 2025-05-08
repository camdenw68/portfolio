"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

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
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-square">
                <Image
                  src="/images/camden-profile.png"
                  alt="Camden Wierengo"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-primary/10 rounded-2xl" />
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-sm md:text-base font-medium text-primary mb-2">ABOUT ME</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                A passionate developer creating amazing digital experiences
              </h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              I'm a Computer Science student at Grand Valley State University with a passion for full-stack development.
              With experience from Michigan State University's coding bootcamp, I've built multiple web applications
              using modern technologies like React, Angular, Node.js, and various databases.
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              I enjoy creating intuitive, functional applications that solve real-world problems. My experience spans
              from frontend development with React and Angular to backend work with Node.js and Express, along with
              database management using PostgreSQL, Firebase, and Supabase.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4">
              <Button size="lg" className="gap-2">
                <FileText className="h-4 w-4" />
                Download CV
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
