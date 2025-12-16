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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-rose-50/20 to-white"
    >
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className={`mb-8 inline-flex items-center gap-2 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full transition-all duration-700 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-gentle-pulse" />
            <span className="text-sm font-medium text-primary">{t("hero.founded")}</span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6 tracking-tight transition-all duration-700 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t("hero.title1")}
            <span className="block mt-2 text-accent">{t("hero.title2")}</span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-primary/60 max-w-2xl mx-auto mb-4 leading-relaxed transition-all duration-700 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {t("hero.subtitle")}
          </p>

          <p
            className={`text-base text-primary/50 max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-400 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {t("hero.description")}
          </p>

          <div
            className={`transition-all duration-700 delay-500 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-full shadow-soft-lg hover:shadow-soft-xl transition-all duration-300 group"
              onClick={() => scrollToSection("#contact")}
            >
              {t("hero.cta")}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          <div className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { value: "5+", label: t("hero.stat1"), color: "text-primary" },
              { value: "100+", label: t("hero.stat2"), color: "text-accent" },
              { value: "24/7", label: t("hero.stat3"), color: "text-primary" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center transition-all duration-700 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              >
                <div className={`text-4xl sm:text-5xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-primary/50 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
