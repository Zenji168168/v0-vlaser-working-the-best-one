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
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            style={{
              top: `${15 + i * 14}%`,
              left: "-100%",
              right: "-100%",
              animation: `slideRight ${4 + i * 0.5}s cubic-bezier(0.22, 0.61, 0.36, 1) infinite`,
              animationDelay: `${i * 0.7}s`,
              opacity: 0.6 - i * 0.08,
            }}
          />
        ))}
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl animate-float" />
        <div 
          className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: "4s" }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-100/20 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main headline with animated reveal */}
          <motion.h1 
            variants={titleVariants}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight"
          >
            Let's Empower Your
            <motion.span 
              variants={highlightVariants}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 mt-2"
            >
              Digital Future
            </motion.span>
          </motion.h1>

          {/* Subheadline with fade and slide up animation */}
          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Founded in 2019, Vlaser Solution Cambodia is a leading provider of comprehensive IT solutions for businesses of all sizes. 
            Our expertise in innovation, reliability, and technology excellence drives digital transformation.
          </motion.p>

          {/* Buttons with stagger animation */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-8 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-10 py-7 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-105 transition-all duration-500 rounded-xl"
              onClick={() => scrollToSection("#services")}
            >
              Explore Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-lg px-10 py-7 hover:border-gray-400 hover:scale-105 transition-all duration-500 rounded-xl"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-accent/60 flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
