"use client"

import { useInView } from "react-intersection-observer"
import { Target, Users } from "lucide-react"
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

          <div
            className={`space-y-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-10 h-10 text-primary" />
              <h2 className="text-4xl font-bold text-foreground">{t("about.why")}</h2>
            </div>

            <div className="glass-ultra rounded-3xl p-8 border-2 border-primary/50 shadow-xl shadow-primary/50 transition-smooth hover:shadow-2xl hover:shadow-primary/60 hover:scale-105">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "📅", num: "5+", label: t("about.years") },
                  { icon: "🚀", num: "50+", label: t("about.projects") },
                  { icon: "⭐", num: "100%", label: t("about.satisfaction") },
                  { icon: "🏆", num: "24/7", label: t("about.support") },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="text-center glass rounded-2xl p-6 hover:glass-strong transition-smooth hover:scale-110"
                  >
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-primary">{stat.num}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
