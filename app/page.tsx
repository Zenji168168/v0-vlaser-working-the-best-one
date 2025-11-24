"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import Clients from "@/components/clients"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white flex items-center justify-center z-50">
        <div className="glass-ultra rounded-3xl p-12 text-center space-y-4 animate-scale-in">
          <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 animate-glow">
            VLASER
          </div>
          <div className="text-sm text-gray-600 animate-pulse">Loading your digital future...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-foreground relative overflow-x-hidden">
      {/* Multiple large floating blur shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 to-indigo-500/20 rounded-full blur-[120px] animate-float-blob" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/25 to-pink-500/20 rounded-full blur-[100px] animate-float-blob-slow" />
        <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-indigo-400/30 to-blue-500/25 rounded-full blur-[110px] animate-float-blob-fast" />
        <div
          className="absolute top-1/2 right-1/4 w-[480px] h-[480px] bg-gradient-to-br from-cyan-400/20 to-blue-400/25 rounded-full blur-[100px] animate-float-blob"
          style={{ animationDelay: "5s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[520px] h-[520px] bg-gradient-to-br from-violet-400/25 to-purple-500/20 rounded-full blur-[105px] animate-float-blob-slow"
          style={{ animationDelay: "10s" }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-gradient-to-br from-blue-300/20 to-indigo-400/20 rounded-full blur-[90px] animate-float-blob-fast"
          style={{ animationDelay: "15s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AnimatedBackground />
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
