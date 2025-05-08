"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    // Here you would typically send the form data to your backend
    alert("Thank you for your message! I'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

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

  const contactInfo = [
    {
      icon: <Mail className="h-10 w-10" />,
      title: "Email",
      value: "Camden.Wierengo@gmail.com",
      link: "mailto:Camden.Wierengo@gmail.com",
    },
    {
      icon: <Phone className="h-10 w-10" />,
      title: "Phone",
      value: "231-780-8739",
      link: "tel:2317808739",
    },
    {
      icon: <MapPin className="h-10 w-10" />,
      title: "Location",
      value: "Muskegon, Michigan",
      link: "https://maps.google.com/?q=Muskegon,Michigan",
    },
  ]

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, link: "https://github.com/", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, link: "https://linkedin.com/", label: "LinkedIn" },
    { icon: <Twitter className="h-5 w-5" />, link: "#", label: "Twitter" },
    { icon: <Instagram className="h-5 w-5" />, link: "#", label: "Instagram" },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base font-medium text-primary mb-2"
          >
            GET IN TOUCH
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Contact Me
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground"
          >
            Feel free to reach out to me for any inquiries, project discussions, or just to say hello!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-md bg-background"
            >
              <div className="text-primary mb-4">{info.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
              <p className="text-muted-foreground">{info.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.h4 variants={itemVariants} className="text-2xl font-bold mb-6">
              Send Me a Message
            </motion.h4>
            <motion.form variants={containerVariants} onSubmit={handleSubmit} className="space-y-4">
              <motion.div variants={itemVariants}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-muted/50"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-muted/50"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="bg-muted/50"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-muted/50"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button type="submit" size="lg" className="w-full gap-2">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative h-[400px] md:h-full min-h-[400px] rounded-xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92580.01133305674!2d-86.33151722770994!3d43.22993311865514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88197df0b75a4385%3A0x8d4e8a21b5ed8db7!2sMuskegon%2C%20MI!5e0!3m2!1sen!2sus!4v1715122348123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-16 gap-4"
        >
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              size="icon"
              variant="outline"
              className="rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
              asChild
            >
              <a href={social.link} aria-label={social.label}>
                {social.icon}
              </a>
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
