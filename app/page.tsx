"use client"
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
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f9fc] via-white to-[#f7f9fc] text-foreground relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-[#dbeafe] opacity-[0.09] rounded-full blur-[100px] animate-gentle-float" />
        <div
          className="absolute top-[40%] right-[10%] w-[450px] h-[450px] bg-[#dbeafe] opacity-[0.08] rounded-full blur-[120px] animate-gentle-float-alt"
          style={{ animationDelay: "5s" }}
        />
        <div
          className="absolute bottom-[15%] left-[30%] w-[480px] h-[480px] bg-[#dbeafe] opacity-[0.07] rounded-full blur-[110px] animate-gentle-float"
          style={{ animationDelay: "10s" }}
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
