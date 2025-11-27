"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/50 to-purple-100/40 blur-3xl rounded-full animate-gentle-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-100/40 to-blue-100/50 blur-3xl rounded-full animate-gentle-float-alt" />
        {/* Hero title backdrop blob with 10% opacity */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-200/10 via-indigo-200/10 to-purple-200/10 blur-3xl rounded-full animate-pulse"
          style={{ animationDuration: "4s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-20">
        <div
          className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6 tracking-tight animate-soft-fade-in">
            {t("hero.title1")}
            <span className="block mt-2 gradient-text">{t("hero.title2")}</span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 font-light animate-soft-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            {t("hero.subtitle")}
          </p>

          <p
            className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-soft-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            {t("hero.description")}
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-soft-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <Button
              size="lg"
              className="bg-[#1e293b] hover:bg-[#0f172a] text-white font-semibold text-base px-8 py-6 shadow-lg shadow-slate-800/20 hover:shadow-xl hover:shadow-slate-800/30 rounded-2xl hover:scale-[1.02] transition-all duration-300 group w-full sm:w-auto"
              onClick={() => scrollToSection("#contact")}
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-200 hover:border-slate-300 text-foreground hover:text-slate-900 font-semibold text-base px-8 py-6 rounded-2xl hover:shadow-md transition-all duration-300 w-full sm:w-auto bg-white/80 backdrop-blur-sm"
              onClick={() => scrollToSection("#services")}
            >
              Our Services
            </Button>
          </div>

          <div
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto animate-gentle-scale"
            style={{ animationDelay: "800ms" }}
          >
            <div className="bg-white/90 backdrop-blur-sm px-6 py-8 rounded-2xl shadow-md shadow-slate-200/50 hover:shadow-lg hover:shadow-slate-300/50 transition-all duration-300 border border-slate-100">
              <div className="text-3xl font-bold text-[#1e293b] mb-2">5+</div>
              <div className="text-sm text-muted-foreground">{t("hero.stat1")}</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-6 py-8 rounded-2xl shadow-md shadow-slate-200/50 hover:shadow-lg hover:shadow-slate-300/50 transition-all duration-300 border border-slate-100">
              <div className="text-3xl font-bold text-[#3b82f6] mb-2">100+</div>
              <div className="text-sm text-muted-foreground">{t("hero.stat2")}</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm px-6 py-8 rounded-2xl shadow-md shadow-slate-200/50 hover:shadow-lg hover:shadow-slate-300/50 transition-all duration-300 border border-slate-100">
              <div className="text-3xl font-bold text-[#1e293b] mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">{t("hero.stat3")}</div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#1e293b] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
