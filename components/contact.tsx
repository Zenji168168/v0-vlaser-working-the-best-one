"use client"

import { useInView } from "react-intersection-observer"
import { MapPin, Phone, Mail, Facebook } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="contact" ref={ref} className="py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600">We'd love to hear from you. Reach out to us today.</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`space-y-8 ${inView ? "animate-slide-up" : "opacity-0"}`}>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    label: "Address",
                    value: "No.8Eo, St14 Borey Piphum Tmey, Steung Meanchey, Phnom Penh",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "096 666 9545, 010 / 078 322 295, 012 989 784",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@vlasersolutions.com",
                  },
                  {
                    icon: Facebook,
                    label: "Facebook",
                    value: "ក្រុមហ៊ុន វីឡាសឺ សឹលូសិន ខេមបូឌា ឯ.ក",
                  },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="group-hover:translate-x-2 transition-transform duration-300">
                        <p className="font-semibold text-gray-900">{item.label}</p>
                        <p className="text-gray-600 mt-1">{item.value}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 8:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
