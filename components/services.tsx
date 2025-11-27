"use client"

import { useInView } from "react-intersection-observer"
import { Monitor, Shield, Cloud, Code, Wifi, Camera } from "lucide-react"
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
    {
      titleKey: "services.wifi.title",
      descKey: "services.wifi.desc",
      icon: Wifi,
    },
    {
      titleKey: "services.cctv.title",
      descKey: "services.cctv.desc",
      icon: Camera,
    },
  ]

  return (
    <section id="services" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/60 to-indigo-100/50 blur-3xl rounded-full animate-gentle-float" />
        <div className="absolute bottom-1/3 left-20 w-80 h-80 bg-gradient-to-br from-slate-100/70 to-blue-100/60 blur-3xl rounded-full animate-gentle-float-alt" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 ${inView ? "animate-soft-fade-in" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {t("services.title")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-300 hover:scale-[1.02] group cursor-pointer border border-slate-100 ${
                  inView ? "animate-soft-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-slate-600 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{t(service.titleKey)}</h3>
                <p className="text-base text-muted-foreground font-light leading-relaxed">{t(service.descKey)}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
