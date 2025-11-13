"use client"

import type React from "react"
import { useRef } from "react"

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-foreground/70">We'd love to hear from you. Reach out to us today.</p>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
          {/* Contact Info Only - Removed form fields (Name, Email, Phone, Message) */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: "📍",
                    label: "Address",
                    value: "No.8Eo, St14 Borey Piphum Tmey, Steung Meanchey, Phnom Penh",
                  },
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "096 666 9545, 010 / 078 322 295, 012 989 784",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "info@vlasersolutions.com",
                  },
                  {
                    icon: "👍",
                    label: "Facebook",
                    value: "VLaser Solution Cambodia Co., Ltd",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div className="group-hover:translate-x-1 transition-transform">
                      <p className="font-semibold text-foreground text-sm">{item.label}</p>
                      <p className="text-foreground/70 text-sm mt-1">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Business Hours</h3>
              <div className="space-y-2 text-foreground/70 text-sm">
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
