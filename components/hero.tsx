"use client"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="max-w-2xl space-y-6 animate-slide-in-up">
            <p className="text-2xl font-semibold text-accent italic text-center">
              "Let's Empower Your Digital Future."
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed text-center">
              Founded in 2019, Vlaser Solution Cambodia Co., Ltd is a leading provider of comprehensive IT solutions for
              businesses of all sizes. Our expertise in innovation, reliability, and technology excellence drives
              digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Our Services
              </Button>
              <Button
                size="lg"
                className="bg-primary/20 hover:bg-primary/30 text-foreground font-semibold border border-primary/40 hover:border-primary/60 transition-all"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
