"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

const clients = [
  { name: "Northbridge International School Cambodia", logo: "/clients/northbridge-school.png" },
  { name: "NorthPark Condominium", logo: "/clients/northpark-condo.png" },
  { name: "Caltex Station Sensok", logo: "/clients/caltex.png" },
  { name: "ផ្សារលើក្រុងកំពុងឆ្នាំង", logo: "/clients/market-kampong-chnang.png" },
  { name: "ស្កាយលេន ផនសប", logo: "/clients/skylen-phunsab.png" },
  { name: "ផ្សារស្រែអំបិលខេត្តកោះកុង", logo: "/clients/furniture-store.png" },
  { name: "Ohana Hotel", logo: "/clients/ohana-hotel.png" },
  { name: "MEGABELLE BEAUTY CLINIC", logo: "/clients/megabelle.png" },
  { name: "AMATA RESIDENCE", logo: "/clients/amata.png" },
  { name: "MONY Clinic", logo: "/clients/mony-clinic.png" },
  { name: "Inkyung Cambodia Co. Ltd", logo: "/clients/activatec3-hostel.png" },
  { name: "ActivateC3 Hostel", logo: "/clients/inkyung-cambodia.png" },
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
      { threshold: 0.1, rootMargin: "50px" },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="clients" ref={sectionRef} className="py-28 md:py-36 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-20 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-5">{t("clients.title")}</h2>
          <p className="text-lg text-primary/60 max-w-xl mx-auto leading-relaxed">{t("clients.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-7">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + index * 80}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-soft hover:shadow-soft-lg hover:border-primary/10 hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] h-full flex flex-col items-center justify-center gap-5">
                <div className="w-full h-20 relative flex items-center justify-center">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-sm text-primary/70 text-center font-medium leading-snug">{client.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-24 transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
            {[
              { value: "50+", label: "Happy Clients" },
              { value: "100+", label: "Projects Completed" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`text-center transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${750 + i * 120}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-primary/60 mt-3 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
