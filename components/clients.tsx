"use client"

import { useInView } from "react-intersection-observer"
import { Building2 } from 'lucide-react'
import Image from 'next/image'

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
    rootMargin: "0px 0px -100px 0px"
  })

  return (
    <section id="clients" ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 ${inView ? "animate-reveal-blur" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building2 className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Clients</h2>
          <p className="text-xl text-gray-600">Trusted by leading businesses across Cambodia</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`group relative ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {/* Card with enhanced frame design */}
              <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-200/60 hover:-translate-y-3 transition-all duration-500 cursor-pointer relative overflow-hidden border-2 border-gray-100 group-hover:border-blue-200">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-blue-50/0 group-hover:from-blue-50/40 group-hover:via-purple-50/20 group-hover:to-blue-50/40 transition-all duration-500" />
                
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
                  
                  {/* Client name with better typography */}
                  <p className="font-semibold text-sm text-gray-700 group-hover:text-blue-600 transition-colors duration-300 text-center leading-relaxed min-h-[2.5rem] flex items-center">
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
