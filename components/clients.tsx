"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { Sparkles } from "lucide-react"

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
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary/3 to-accent/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 ${inView ? "animate-reveal-blur" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Trusted Partners</span>
            <Sparkles className="w-4 h-4 text-accent animate-pulse" style={{ animationDelay: "1s" }} />
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t("clients.title")}
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-primary to-primary rounded-full" />
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <div className="h-[2px] w-32 bg-gradient-to-r from-primary via-accent to-accent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent via-primary to-primary rounded-full" />
          </div>

          <p className="text-xl text-primary/70 font-medium max-w-2xl mx-auto">{t("clients.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group relative ${inView ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />

              <div className="relative bg-gradient-to-br from-white via-white to-pink-50/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-primary/5 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 cursor-pointer overflow-hidden border border-primary/10 hover:border-accent/30 h-full flex flex-col">
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/5 group-hover:via-accent/5 group-hover:to-primary/5 transition-all duration-700" />

                {/* Decorative corner dot pattern */}
                <div className="absolute top-4 right-4 grid grid-cols-2 gap-1 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>

                {/* Logo container */}
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-6">
                  <div className="w-full h-32 relative flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        fill
                        className="object-contain drop-shadow-sm"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Divider line */}
                  <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent group-hover:w-16 transition-all duration-500" />

                  {/* Client name */}
                  <p className="font-semibold text-sm text-primary/80 group-hover:text-accent transition-colors duration-300 text-center leading-relaxed">
                    {client.name}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-20 ${inView ? "animate-reveal-blur" : "opacity-0"}`} style={{ animationDelay: "600ms" }}>
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-primary/60 font-medium">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-sm text-primary/60 font-medium">Projects Completed</div>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm text-primary/60 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
