"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const roles = [ "Full Stack Developer", "Computer Science Student", "Problem Solver"]
  const role = roles[loopNum % roles.length]

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[loopNum % roles.length]
      const shouldDelete = isDeleting

      setText((prev) =>
        shouldDelete ? currentRole.substring(0, prev.length - 1) : currentRole.substring(0, prev.length + 1),
      )

      // Set typing speed
      if (!isDeleting && text === currentRole) {
        // Pause at the end of typing
        setTypingSpeed(2000)
        setIsDeleting(true)
      } else if (isDeleting && text === "") {
        // Move to next role
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(150)
      } else {
        // Regular typing/deleting speed
        setTypingSpeed(isDeleting ? 50 : 150)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, roles])

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>

        {/* Animated particles */}
        <motion.div className="absolute inset-0" style={{ opacity }}>
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              initial={{
                width: Math.random() * 8 + 2,
                height: Math.random() * 8 + 2,
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        {/* Animated code elements */}
        <motion.div className="absolute inset-0 overflow-hidden" style={{ opacity }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={`code-${i}`}
              className="absolute text-primary/5 text-xs md:text-sm font-mono whitespace-nowrap"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.3 + 0.1,
              }}
              animate={{
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {getRandomCodeSnippet()}
            </motion.div>
          ))}
        </motion.div>

        {/* Animated gradient blobs */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={`blob-${i}`}
              className="absolute rounded-full bg-gradient-to-r from-primary/5 to-blue-400/5 blur-3xl"
              style={{
                width: Math.random() * 500 + 300,
                height: Math.random() * 500 + 300,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                scale: [1, 1.1, 0.9, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: Math.random() * 30 + 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      </div>

      <div className="container px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
          style={{ y }}
        >
          <motion.h2
            className="text-xl md:text-2xl font-medium text-primary mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hello, I'm
          </motion.h2>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              Camden Wierengo
            </span>
          </motion.h1>
          <motion.div
            className="h-16 md:h-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
              <span>{text}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            I build exceptional digital experiences that are fast, accessible, and visually appealing.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Button variant="ghost" size="icon" className="rounded-full" asChild>
          <Link href="#about">
            <ArrowDown className="h-6 w-6" />
          </Link>
        </Button>
      </motion.div>
    </section>
  )
}

// Helper function to generate random code snippets
function getRandomCodeSnippet() {
  const snippets = [
    "function mergeSort(arr) { if (arr.length <= 1) return arr; }",
    "class Node { constructor(value) { this.value = value; this.next = null; } }",
    "const binarySearch = (arr, target) => { let left = 0; let right = arr.length - 1; }",
    "interface User { id: string; name: string; email: string; }",
    "const quickSort = (arr) => { if (arr.length <= 1) return arr; }",
    "async function fetchData() { try { const response = await fetch(url); } }",
    "const dijkstra = (graph, start) => { const distances = {}; const visited = {}; }",
    "class BinaryTree { constructor() { this.root = null; } }",
    "const memoize = (fn) => { const cache = {}; return (...args) => { } }",
    "function breadthFirstSearch(graph, start) { const queue = [start]; }",
    "const debounce = (fn, delay) => { let timeout; return (...args) => { } }",
    "const throttle = (fn, limit) => { let inThrottle; return (...args) => { } }",
    "import { useState, useEffect } from 'react';",
    "const [state, setState] = useState(initialState);",
    "useEffect(() => { // side effects here }, [dependencies]);",
  ]

  return snippets[Math.floor(Math.random() * snippets.length)]
}
