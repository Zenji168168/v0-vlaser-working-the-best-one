"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-rose-50/30 to-white overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div
          className={`mb-8 inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-5 py-2.5 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-gentle-pulse" />
          <span className="text-sm font-medium text-primary">{t("hero.founded")}</span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6 tracking-tight transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {t("hero.title1")}
          <span className="block mt-2 text-accent">{t("hero.title2")}</span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-primary/60 max-w-2xl mx-auto mb-4 leading-relaxed transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          {t("hero.subtitle")}
        </p>

        <p
          className={`text-base text-primary/50 max-w-xl mx-auto mb-12 leading-relaxed transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          {t("hero.description")}
        </p>

        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "550ms" }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-medium px-10 py-7 rounded-full shadow-soft-lg hover:shadow-soft-xl hover:-translate-y-1 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group"
            onClick={() => scrollToSection("#contact")}
          >
            {t("hero.cta")}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
          </Button>
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-center gap-10 md:gap-20">
          {[
            { value: "5+", label: t("hero.stat1"), color: "text-primary" },
            { value: "100+", label: t("hero.stat2"), color: "text-accent" },
            { value: "24/7", label: t("hero.stat3"), color: "text-primary" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${700 + i * 120}ms` }}
            >
              <div className={`text-4xl sm:text-5xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-primary/50 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
