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
      <div
        className="fixed inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50 flex items-center justify-center z-50"
        style={{ WebkitTransform: "translate3d(0,0,0)" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float-blob blur-2xl"
            style={{ WebkitTransform: "translate3d(0,0,0)" }}
          />
          <div
            className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full animate-float-blob-slow blur-3xl"
            style={{ WebkitTransform: "translate3d(0,0,0)" }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-36 h-36 bg-primary/5 rounded-full animate-float-blob-fast blur-2xl"
            style={{ WebkitTransform: "translate3d(0,0,0)" }}
          />
        </div>

        <div
          className="relative glass-ultra rounded-3xl p-12 text-center space-y-4 animate-scale-in shadow-2xl"
          style={{ WebkitTransform: "translate3d(0,0,0)" }}
        >
          <div className="relative">
            <div
              className="text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradientShift_3s_ease-in-out_infinite] text-transparent bg-clip-text"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              VLASER
            </div>
            <div className="absolute inset-0 text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary blur-xl opacity-30 animate-pulse">
              VLASER
            </div>
          </div>

          <div className="text-sm text-primary/80 animate-[fadeIn_1s_ease-in-out_infinite_alternate]">
            Loading your digital future...
          </div>

          <div className="flex justify-center gap-2 pt-2">
            <div
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "0ms", WebkitTransform: "translate3d(0,0,0)" }}
            />
            <div
              className="w-2 h-2 bg-accent rounded-full animate-bounce"
              style={{ animationDelay: "150ms", WebkitTransform: "translate3d(0,0,0)" }}
            />
            <div
              className="w-2 h-2 bg-primary rounded-full animate-bounce"
              style={{ animationDelay: "300ms", WebkitTransform: "translate3d(0,0,0)" }}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-foreground relative overflow-x-hidden">
      {/* Multiple large floating blur shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 to-indigo-500/20 rounded-full blur-[120px] animate-float-blob"
          style={{ WebkitTransform: "translate3d(0,0,0)" }}
        />
        <div
          className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/25 to-pink-500/20 rounded-full blur-[100px] animate-float-blob-slow"
          style={{ WebkitTransform: "translate3d(0,0,0)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-gradient-to-br from-indigo-400/30 to-blue-500/25 rounded-full blur-[110px] animate-float-blob-fast"
          style={{ WebkitTransform: "translate3d(0,0,0)" }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-[480px] h-[480px] bg-gradient-to-br from-cyan-400/20 to-blue-400/25 rounded-full blur-[100px] animate-float-blob"
          style={{ animationDelay: "5s", WebkitTransform: "translate3d(0,0,0)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-[520px] h-[520px] bg-gradient-to-br from-violet-400/25 to-purple-500/20 rounded-full blur-[105px] animate-float-blob-slow"
          style={{ animationDelay: "10s", WebkitTransform: "translate3d(0,0,0)" }}
        />
        <div
          className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-gradient-to-br from-blue-300/20 to-indigo-400/20 rounded-full blur-[90px] animate-float-blob-fast"
          style={{ animationDelay: "15s", WebkitTransform: "translate3d(0,0,0)" }}
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
