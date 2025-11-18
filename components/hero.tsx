"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
        <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/30 to-indigo-500/25 rounded-full blur-[100px] animate-float-blob" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-br from-purple-500/30 to-pink-500/25 rounded-full blur-[90px] animate-float-blob-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-indigo-400/25 to-blue-400/20 rounded-full blur-[110px] animate-float-blob-fast" />
        <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-[80px] animate-float-blob" style={{ animationDelay: "8s" }} />
        <div className="absolute bottom-1/3 left-1/4 w-[480px] h-[480px] bg-gradient-to-br from-violet-400/25 to-purple-400/20 rounded-full blur-[95px] animate-float-blob-slow" style={{ animationDelay: "12s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center z-10 py-20">
        <div className={`glass-ultra rounded-[3rem] p-14 md:p-20 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}>
          <div className="mb-8 inline-flex items-center gap-2 glass-strong px-6 py-3 rounded-full animate-fade-in">
            <Sparkles className="w-5 h-5 text-indigo-600 animate-pulse" />
            <span className="text-sm font-semibold text-indigo-600">Founded in 2019</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight mb-8">
            Let's Empower Your
            <span className="block mt-4 gradient-text">
              Digital Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 font-light">
            Leading IT Solutions Provider in Cambodia
          </p>
          
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Providing comprehensive IT solutions for businesses of all sizes with cutting-edge technology and expert support
          </p>

          <Button
            size="lg"
            className="glass-strong hover:glass-ultra bg-white/80 hover:bg-white/90 font-semibold text-lg px-14 py-8 shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 rounded-3xl border-2 border-indigo-300/50 btn-glow-hover group text-indigo-600 hover:text-indigo-700"
            onClick={() => scrollToSection("#contact")}
          >
            <span className="flex items-center gap-3">
              Get Started Today 
              <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            </span>
          </Button>

          <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
            <div className="glass px-6 py-3 rounded-2xl">
              <div className="text-2xl font-bold text-indigo-600">5+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="glass px-6 py-3 rounded-2xl">
              <div className="text-2xl font-bold text-indigo-600">100+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="glass px-6 py-3 rounded-2xl">
              <div className="text-2xl font-bold text-indigo-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="glass w-10 h-14 rounded-full flex items-start justify-center p-2 border-2 border-indigo-300/50">
            <div className="w-2 h-4 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
