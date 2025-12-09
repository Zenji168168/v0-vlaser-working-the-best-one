"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-secondary/30 to-white"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/15 blur-3xl animate-float-blob" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/15 blur-3xl animate-float-blob-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-br from-primary/15 to-accent/10 blur-3xl animate-float-blob-fast" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-20">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-6 inline-flex items-center gap-2 glass-strong px-5 py-2.5 rounded-full shadow-modern">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-tight">{t("hero.founded")}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 tracking-tight">
            {t("hero.title1")}
            <span className="block mt-3 gradient-text">{t("hero.title2")}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 font-normal">
            {t("hero.subtitle")}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("hero.description")}
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 shadow-modern-xl hover:shadow-modern-xl hover:scale-105 rounded-xl transition-smooth group"
            onClick={() => scrollToSection("#contact")}
          >
            <span className="flex items-center gap-2">
              {t("hero.cta")}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
            <div className="glass-strong px-4 py-5 rounded-2xl shadow-modern hover:shadow-modern-lg transition-smooth">
              <div className="text-2xl sm:text-3xl font-bold text-primary">5+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stat1")}</div>
            </div>
            <div className="glass-strong px-4 py-5 rounded-2xl shadow-modern hover:shadow-modern-lg transition-smooth">
              <div className="text-2xl sm:text-3xl font-bold text-accent">100+</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stat2")}</div>
            </div>
            <div className="glass-strong px-4 py-5 rounded-2xl shadow-modern hover:shadow-modern-lg transition-smooth">
              <div className="text-2xl sm:text-3xl font-bold text-primary">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stat3")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
