"use client"

import { useEffect, useState, useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: "50px" },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-28 md:py-36 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div
            className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-7">{t("about.title")}</h2>
            <p className="text-lg text-primary/60 leading-relaxed mb-10">{t("about.description")}</p>

            <div className="space-y-5">
              {[t("about.point1"), t("about.point2"), t("about.point3")].map((text, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${400 + i * 120}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <p className="text-primary/70 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-10">{t("about.why")}</h3>
              <div className="space-y-7">
                {[
                  t("about.why.point1"),
                  t("about.why.point2"),
                  t("about.why.point3"),
                  t("about.why.point4"),
                  t("about.why.point5"),
                ].map((text, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-5 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                    style={{ transitionDelay: `${500 + i * 100}ms` }}
                  >
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-semibold text-sm">{i + 1}</span>
                    </div>
                    <p className="text-primary/70 leading-relaxed pt-1.5">{text}</p>
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
