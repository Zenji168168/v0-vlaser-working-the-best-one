"use client"

import { useInView } from "react-intersection-observer"
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
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const { t } = useLanguage()

  return (
    <section id="clients" ref={ref} className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t("clients.title")}</h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">{t("clients.subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 h-full flex flex-col items-center justify-center gap-4">
                <div className="w-full h-24 relative flex items-center justify-center">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    fill
                    className="object-contain transition-all duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <p className="text-sm text-primary/80 text-center font-medium leading-tight">{client.name}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-20 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">50+</div>
              <div className="text-sm text-primary/70 font-medium">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block" />
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">100+</div>
              <div className="text-sm text-primary/70 font-medium">Projects Completed</div>
            </div>
            <div className="h-12 w-px bg-gray-300 hidden md:block" />
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">98%</div>
              <div className="text-sm text-primary/70 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
