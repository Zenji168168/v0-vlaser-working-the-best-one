"use client"

import { useInView } from "react-intersection-observer"

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
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <section id="clients" ref={ref} className="py-20 sm:py-32 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Clients</h2>
          <p className="text-lg text-foreground/70">Trusted by leading businesses across Cambodia</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg border border-border bg-white/70 hover:border-accent hover:bg-white hover:shadow-md transition-all text-center group ${
                inView ? "animate-slide-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <p className="font-semibold text-foreground group-hover:text-accent transition-colors text-sm">
                {client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
