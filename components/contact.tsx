"use client"

import { useInView } from "react-intersection-observer"
import { MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const { t } = useLanguage()

  return (
    <section id="contact" ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-[450px] h-[450px] bg-[#dbeafe] opacity-[0.09] rounded-full blur-[100px] animate-gentle-float" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-[#dbeafe] opacity-[0.08] rounded-full blur-[120px] animate-gentle-float-alt" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">{t("contact.title")}</h2>
          <p className="text-xl text-muted-foreground font-light">{t("contact.subtitle")}</p>
        </div>

        <div
          className={`bg-white/95 backdrop-blur-sm rounded-3xl p-10 md:p-12 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-300 border border-slate-100 ${inView ? "animate-scale-in" : "opacity-0"}`}
          style={{ animationDelay: "200ms" }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8">{t("contact.info.title")}</h3>

          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                label: t("contact.address.label"),
                value: t("contact.address.value"),
              },
              {
                icon: Phone,
                label: t("contact.phone.label"),
                value: (
                  <div className="space-y-1">
                    <div>012 989 784</div>
                    <div>096 666 9545</div>
                    <div>010 / 078 322 295</div>
                  </div>
                ),
              },
              {
                icon: Mail,
                label: t("contact.email.label"),
                value: "info@vlasersolutions.com",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="flex gap-4 bg-slate-50/50 rounded-2xl p-6 hover:bg-slate-50 hover:shadow-md transition-all duration-300 border border-slate-100"
                >
                  <Icon className="w-6 h-6 text-[#1e293b] flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground mb-1">{item.label}</p>
                    <div className="text-muted-foreground">{item.value}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
