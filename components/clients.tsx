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
    rootMargin: "0px 0px -100px 0px",
  })
  const { t } = useLanguage()

  return (
    <section
      id="clients"
      ref={ref}
      className="py-32 bg-gradient-to-b from-background via-pink-50/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 ${inView ? "animate-reveal-blur" : "opacity-0"}`}>
          <div className="mb-6">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
              {t("clients.title")}
            </h2>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>

          <p className="text-xl text-primary/70 font-medium">{t("clients.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group relative ${inView ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-primary/10 hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden border-2 border-primary/10 group-hover:border-accent/40">
                {/* Modern corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent/30 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent/30 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-2xl" />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-primary/0 group-hover:from-primary/5 group-hover:via-accent/10 group-hover:to-primary/5 transition-all duration-500" />

                {/* Logo container with consistent sizing */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-full h-32 relative flex items-center justify-center p-4">
                    <div className="relative w-full h-full group-hover:scale-110 transition-transform duration-500">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Client name with burgundy color scheme */}
                  <p className="font-semibold text-sm text-primary/80 group-hover:text-accent transition-colors duration-300 text-center leading-relaxed min-h-[2.5rem] flex items-center">
                    {client.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
