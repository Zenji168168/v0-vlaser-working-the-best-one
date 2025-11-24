"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
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
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-muted/50">
        <div className="absolute top-10 right-10 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-primary/30 to-accent/25 rounded-full blur-[80px] md:blur-[100px] animate-float-blob" />
        <div className="absolute bottom-10 left-10 w-[280px] sm:w-[380px] md:w-[450px] h-[280px] sm:h-[380px] md:h-[450px] bg-gradient-to-br from-accent/30 to-destructive/25 rounded-full blur-[70px] md:blur-[90px] animate-float-blob-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[450px] md:w-[550px] h-[320px] sm:h-[450px] md:h-[550px] bg-gradient-to-br from-primary/25 to-accent/20 rounded-full blur-[85px] md:blur-[110px] animate-float-blob-fast" />
        <div
          className="hidden md:block absolute top-1/4 right-1/3 w-[400px] h-[400px] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-[80px] animate-float-blob"
          style={{ animationDelay: "8s" }}
        />
        <div
          className="hidden lg:block absolute bottom-1/3 left-1/4 w-[480px] h-[480px] bg-gradient-to-br from-accent/25 to-primary/20 rounded-full blur-[95px] animate-float-blob-slow"
          style={{ animationDelay: "12s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-12 sm:py-16 lg:py-20">
        <div
          className={`glass-ultra rounded-2xl sm:rounded-3xl lg:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-20 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}`}
        >
          <div className="mb-6 sm:mb-8 inline-flex items-center gap-2 glass-strong px-4 sm:px-6 py-2 sm:py-3 rounded-full animate-fade-in">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-primary">{t("hero.founded")}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-tight mb-6 sm:mb-8">
            {t("hero.title1")}
            <span className="block mt-2 sm:mt-4 gradient-text">{t("hero.title2")}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 sm:mb-6 font-light">
            {t("hero.subtitle")}
          </p>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed px-4">
            {t("hero.description")}
          </p>

          <Button
            size="lg"
            className="glass-strong hover:glass-ultra bg-background/80 hover:bg-background/90 font-semibold text-base sm:text-lg px-8 sm:px-12 md:px-14 py-6 sm:py-7 md:py-8 shadow-2xl shadow-primary/40 hover:shadow-primary/60 rounded-2xl sm:rounded-3xl border-2 border-primary/50 btn-glow-hover group text-primary hover:text-primary w-full sm:w-auto"
            onClick={() => scrollToSection("#contact")}
          >
            <span className="flex items-center gap-2 sm:gap-3 justify-center">
              {t("hero.cta")}
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
            </span>
          </Button>

          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
            <div className="glass px-3 sm:px-6 py-3 rounded-xl sm:rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-primary">5+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t("hero.stat1")}</div>
            </div>
            <div className="glass px-3 sm:px-6 py-3 rounded-xl sm:rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-primary">100+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t("hero.stat2")}</div>
            </div>
            <div className="glass px-3 sm:px-6 py-3 rounded-xl sm:rounded-2xl">
              <div className="text-xl sm:text-2xl font-bold text-primary">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{t("hero.stat3")}</div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="glass w-8 h-12 sm:w-10 sm:h-14 rounded-full flex items-start justify-center p-2 border-2 border-primary/50">
            <div className="w-1.5 h-3 sm:w-2 sm:h-4 bg-gradient-to-b from-primary to-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
