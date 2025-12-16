"use client"

import { useEffect, useState, useRef } from "react"
import { Monitor, Shield, Cloud, Code, Wifi, Cctv } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: "0px" },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    { titleKey: "services.cctv.title", descKey: "services.cctv.desc", icon: Cctv },
    { titleKey: "services.consulting.title", descKey: "services.consulting.desc", icon: Monitor },
    { titleKey: "services.network.title", descKey: "services.network.desc", icon: Shield },
    { titleKey: "services.security.title", descKey: "services.security.desc", icon: Cloud },
    { titleKey: "services.webdev.title", descKey: "services.webdev.desc", icon: Code },
    { titleKey: "services.wifi.title", descKey: "services.wifi.desc", icon: Wifi },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">{t("services.title")}</h2>
          <p className="text-lg text-primary/60 max-w-xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group bg-white border border-gray-100 rounded-2xl p-8 hover:border-primary/20 hover:shadow-soft-lg transition-all duration-500 ease-out hover-lift ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${150 + index * 80}ms` }}
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{t(service.titleKey)}</h3>
                <p className="text-primary/60 leading-relaxed">{t(service.descKey)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
