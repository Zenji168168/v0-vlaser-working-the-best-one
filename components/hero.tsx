"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  }

  const highlightVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1],
        delay: 0.4,
      },
    },
  }

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
        {/* Floating blur blobs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "5s" }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-indigo-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2.5s" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center z-10 py-20">
        <div className={`glass-strong rounded-3xl p-12 md:p-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight mb-8">
            Let's Empower Your
            <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 animate-glow">
              Digital Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-4 font-light">
            Leading IT Solutions Provider in Cambodia
          </p>
          
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 font-light">
            Founded in 2019, providing comprehensive IT solutions for businesses of all sizes
          </p>

          <Button
            size="lg"
            className="glass-strong hover:glass text-indigo-600 hover:text-indigo-700 font-semibold text-lg px-12 py-7 shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-110 transition-all duration-500 rounded-3xl border-2 border-indigo-200/50 hover:border-indigo-300"
            onClick={() => scrollToSection("#contact")}
          >
            Get Started Today ✨
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="glass w-8 h-12 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-indigo-600 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
