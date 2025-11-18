"use client"

import { useInView } from "react-intersection-observer"
import { Monitor, Shield, Cloud, Code } from 'lucide-react'

const services = [
  {
    title: "IT Consulting",
    description: "Expert guidance for your digital transformation",
    icon: Monitor,
  },
  {
    title: "Network Setup",
    description: "Secure and scalable network infrastructure",
    icon: Shield,
  },
  {
    title: "Cyber Security",
    description: "Protect your business from digital threats",
    icon: Cloud,
  },
  {
    title: "Web Development",
    description: "Modern, responsive web solutions",
    icon: Code,
  },
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section id="services" ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-gradient-to-br from-primary/25 to-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-accent/25 to-destructive/20 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float-fast" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`glass-ultra rounded-3xl p-8 transition-smooth hover:scale-110 hover:shadow-2xl hover:shadow-primary/60 cursor-pointer group ${
                  inView ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <Icon className="w-14 h-14 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
