"use client"

import { useInView } from "react-intersection-observer"
import { Target } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px",
  })
  const { t } = useLanguage()

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden"
    >
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-br from-accent/25 to-destructive/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gradient-to-br from-primary/25 to-accent/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-primary/15 to-accent/20 rounded-full blur-3xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div className={`space-y-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">{t("about.title")}</h2>
            </div>

            <div className="glass-ultra rounded-3xl p-8 transition-smooth hover:shadow-2xl hover:shadow-primary/50 hover:scale-105">
              <p className="text-lg text-foreground/70 leading-relaxed font-light">{t("about.description")}</p>
            </div>

            <div className="space-y-4">
              {[t("about.point1"), t("about.point2"), t("about.point3")].map((text, i) => (
                <div
                  key={i}
                  className={`glass rounded-2xl p-6 hover:glass-strong transition-smooth hover:translate-x-2 hover:scale-105 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <p className="text-foreground/70 font-medium">✓ {text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-background via-rose-50/80 to-pink-100/90 p-12 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-rose-50/50 to-pink-100/70" />

              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
                  {t("about.why")}
                </h2>

                <div className="space-y-6 mt-12">
                  {[
                    t("about.why.point1"),
                    t("about.why.point2"),
                    t("about.why.point3"),
                    t("about.why.point4"),
                    t("about.why.point5"),
                  ].map((text, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-4 ${inView ? "animate-fade-in-left" : "opacity-0"}`}
                      style={{ animationDelay: `${(i + 2) * 100}ms` }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                          <path
                            d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="text-lg md:text-xl text-primary font-medium leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
