"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 py-12">
      <div className="container px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button onClick={scrollToTop} size="icon" className="rounded-full h-12 w-12">
              <ChevronUp className="h-6 w-6" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Camden Wierengo</h2>
            <div className="flex justify-center gap-6 mb-6">
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#resume" className="text-muted-foreground hover:text-primary transition-colors">
                Resume
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <p className="text-muted-foreground">© {currentYear} Camden Wierengo. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
