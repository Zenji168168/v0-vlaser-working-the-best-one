"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Animated light lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse"
            style={{
              top: `${20 + i * 15}%`,
              left: "-100%",
              right: "-100%",
              animation: `slideRight ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
        {/* Floating orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-float" />
        <div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center z-10 py-20">
        <div className={`space-y-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          {/* Main headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
            Let's Empower Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mt-2">
              Digital Future
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Founded in 2019, Vlaser Solution Cambodia is a leading provider of comprehensive IT solutions for businesses of all sizes. 
            Our expertise in innovation, reliability, and technology excellence drives digital transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-10 py-7 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/30 hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => scrollToSection("#services")}
            >
              Explore Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-semibold text-lg px-10 py-7 hover:border-gray-400 hover:scale-105 transition-all duration-300 rounded-xl"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-accent/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
}
