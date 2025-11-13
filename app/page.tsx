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
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="animate-glow-text text-4xl font-bold text-accent">VLASER</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
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
