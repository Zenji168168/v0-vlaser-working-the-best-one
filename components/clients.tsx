"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const clients = [
  { name: "Caltex Station Sensok", logo: "/clients/caltex.png" },
  { name: "ផ្សារលើក្រុងកំពុងឆ្នាំង", logo: "/clients/market-kampong-chnang.png" },
  { name: "SENGHAN CO., LTD", logo: "/clients/senghan.png" },
  { name: "ផ្សារស្រែអំបិលខេត្តកោះកុង", logo: "/clients/furniture-store.png" },
  { name: "Ohana Hotel", logo: "/clients/ohana-hotel.png" },
  { name: "MEGABELLE BEAUTY CLINIC", logo: "/clients/megabelle.png" },
  { name: "AMATA RESIDENCE", logo: "/clients/amata.png" },
  { name: "MONY Clinic", logo: "/clients/mony-clinic.png" },
]

export default function Clients() {
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

  return (
    <section id="clients" ref={sectionRef} className="py-24 md:py-32 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">{t("clients.title")}</h2>
          <p className="text-lg text-primary/60 max-w-xl mx-auto">{t("clients.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + index * 60}ms` }}
            >
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-soft-lg hover:border-primary/10 transition-all duration-400 h-full flex flex-col items-center justify-center gap-4 hover-lift">
                <div className="w-full h-20 relative flex items-center justify-center">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-sm text-primary/70 text-center font-medium">{client.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {[
              { value: "50+", label: "Happy Clients" },
              { value: "100+", label: "Projects Completed" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-500 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${600 + i * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-primary/60 mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
