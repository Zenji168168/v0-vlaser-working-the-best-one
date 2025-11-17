"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="contact" ref={ref} className="py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600">We'd love to hear from you. Reach out to us today.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`bg-white p-10 rounded-2xl shadow-xl shadow-gray-200/50 ${inView ? "animate-slide-up" : "opacity-0"}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-50 border-gray-200 focus:border-blue-600 focus:ring-blue-600 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-50 border-gray-200 focus:border-blue-600 focus:ring-blue-600 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Message</label>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-gray-50 border-gray-200 focus:border-blue-600 focus:ring-blue-600 transition-all duration-300 min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:scale-105 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>

            <div className="mt-6">
              <Button
                variant="outline"
                className="w-full border-2 border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-900 font-medium py-6 hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://wa.me/85596666954", "_blank")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact via WhatsApp
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 ${inView ? "animate-slide-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
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
                    value: "VLaser Solution Cambodia Co., Ltd",
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
