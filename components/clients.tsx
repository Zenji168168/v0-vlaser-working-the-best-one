"use client"

import { useInView } from "react-intersection-observer"
import { Building2 } from 'lucide-react'

const clients = [
  "MONY Clinic",
  "MEGABELLE BEAUTY CLINIC",
  "THE ADDRESS",
  "AMATA RESIDENCE",
  "V Hotel Phnom Penh",
  "Ohana Hotel",
  "Panhavuth Dental Clinic",
  "SENGHAN CO., LTD",
]

export default function Clients() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="clients" ref={ref} className="py-32 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Building2 className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Clients</h2>
          <p className="text-xl text-gray-600">Trusted by leading businesses across Cambodia</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-blue-200/50 hover:-translate-y-2 transition-all duration-300 text-center group cursor-pointer ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">🏢</div>
              <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
