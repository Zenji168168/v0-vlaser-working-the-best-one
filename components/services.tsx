"use client"

import { useInView } from "react-intersection-observer"
import { Monitor, Shield, Cloud, Code } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const { t } = useLanguage()

  const services = [
    {
      titleKey: "services.consulting.title",
      descKey: "services.consulting.desc",
      icon: Monitor,
    },
    {
      titleKey: "services.network.title",
      descKey: "services.network.desc",
      icon: Shield,
    },
    {
      titleKey: "services.security.title",
      descKey: "services.security.desc",
      icon: Cloud,
    },
    {
      titleKey: "services.webdev.title",
      descKey: "services.webdev.desc",
      icon: Code,
    },
  ]

  return (
    <section id="services" ref={ref} className="py-20 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-gradient-to-br from-primary/25 to-accent/20 blur-3xl animate-float animate-morph-shape" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-accent/25 to-destructive/20 blur-3xl animate-float-slow animate-morph-shape" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl animate-float-fast animate-morph-shape" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 ${inView ? "animate-reveal-bottom" : "opacity-0"}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            {t("services.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light px-4">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`glass-ultra rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 transition-smooth hover:scale-105 lg:hover:scale-110 hover:shadow-2xl hover:shadow-primary/60 cursor-pointer group ${
                  inView ? "animate-bounce-in-scale" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 sm:mb-5 md:mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{t(service.titleKey)}</h3>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  {t(service.descKey)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
