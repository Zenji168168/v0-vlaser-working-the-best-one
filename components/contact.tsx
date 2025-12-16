"use client"

import { useEffect, useState, useRef } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function Contact() {
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

  const contactInfo = [
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
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-primary/60">{t("contact.subtitle")}</p>
        </div>

        <div
          className={`space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          {contactInfo.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-primary/10 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">{item.label}</p>
                  <div className="text-primary/60">{item.value}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
