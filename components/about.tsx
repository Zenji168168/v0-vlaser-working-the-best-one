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
    <section id="about" ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-[#dbeafe] opacity-[0.09] rounded-full blur-[100px] animate-gentle-float" />
      <div className="absolute bottom-[25%] left-[10%] w-[450px] h-[450px] bg-[#dbeafe] opacity-[0.08] rounded-full blur-[120px] animate-gentle-float-alt" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - slides in from left */}
          <div className={`space-y-8 ${inView ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10 text-[#1e293b]" />
              <h2 className="text-4xl font-bold text-foreground">{t("about.title")}</h2>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-300 border border-slate-100">
              <p className="text-lg text-foreground/70 leading-relaxed font-light">{t("about.description")}</p>
            </div>

            <div className="space-y-4">
              {[t("about.point1"), t("about.point2"), t("about.point3")].map((text, i) => (
                <div
                  key={i}
                  className={`bg-slate-50/80 rounded-2xl p-6 hover:bg-slate-50 hover:shadow-md transition-all duration-300 hover:translate-x-2 border border-slate-100 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <p className="text-foreground/70 font-medium">✓ {text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - slides in from right */}
          <div className={`${inView ? "animate-slide-in-right" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-background via-rose-50/80 to-pink-100/90 p-12 shadow-xl border border-slate-100">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-rose-50/50 to-pink-100/70" />

              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1e293b] via-[#3b82f6] to-[#1e293b] bg-clip-text text-transparent leading-tight">
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
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#1e293b]">
                          <path
                            d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <p className="text-lg md:text-xl text-[#1e293b] font-medium leading-relaxed">{text}</p>
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
