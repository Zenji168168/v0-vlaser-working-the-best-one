"use client"

import { useInView } from "react-intersection-observer"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="contact" ref={ref} className="py-32 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-indigo-400/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-indigo-300/25 to-blue-300/20 rounded-full blur-3xl animate-float-fast" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 font-light">We'd love to hear from you</p>
        </div>

        <div className={`glass-ultra rounded-3xl p-10 md:p-12 shadow-2xl shadow-indigo-200/50 hover:shadow-indigo-300/60 transition-smooth hover:scale-105 ${inView ? "animate-scale-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Contact Information</h3>
          
          <div className="space-y-6">
            {[
              {
                icon: MapPin,
                label: "Address",
                value: "No.8Eo, St14 Borey Piphum Tmey, Steung Meanchey, Phnom Penh",
              },
              {
                icon: Phone,
                label: "Phone Numbers",
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
                label: "Email",
                value: "info@vlasersolutions.com",
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex gap-4 glass rounded-2xl p-6 hover:glass-strong transition-smooth hover:scale-105">
                  <Icon className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                    <div className="text-gray-600">{item.value}</div>
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
