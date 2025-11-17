"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
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
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="text-center space-y-4">
          <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary animate-glow">
            VLASER
          </div>
          <div className="text-sm text-foreground/60 animate-pulse">Loading your digital future...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <Hero />
      <About />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}
