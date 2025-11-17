"use client"

import { useInView } from "react-intersection-observer"
import { Building2 } from 'lucide-react'

const clients = [
  "MONY Clinic",
  "MEGABELLE BEAUTY CLINIC",
  "AMATA RESIDENCE",
  "Ohana Hotel",
  "SENGHAN CO., LTD",
  "Caltex Station Sensok",
  "ផ្សារលើក្រុងកំពុងឆ្នាំង",
  "ផ្សារស្រែអំបិលខេត្តកោះកុង",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-200/60 hover:-translate-y-3 hover:scale-105 transition-all duration-500 text-center group cursor-pointer relative overflow-hidden ${
                inView ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:via-blue-50/30 group-hover:to-blue-50/50 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">🏢</div>
                <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-relaxed">
                  {client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
