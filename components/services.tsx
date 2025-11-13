"use client"

import { useInView } from "react-intersection-observer"

const services = [
  {
    title: "IT Consultation & Strategy",
    description: "Expert guidance for your digital transformation journey",
    icon: "🎯",
  },
  {
    title: "Managed IT Services",
    description: "24/7 support, network security, and CCTV solutions",
    icon: "🛡️",
  },
  {
    title: "Cloud Solutions",
    description: "Migration, backup, and SaaS implementation",
    icon: "☁️",
  },
  {
    title: "Cybersecurity",
    description: "Threat detection, prevention, and security training",
    icon: "🔐",
  },
  {
    title: "Hardware Solutions",
    description: "Servers, infrastructure design, and deployment",
    icon: "💻",
  },
  {
    title: "Software Development",
    description: "Web, Mobile, and Custom software solutions",
    icon: "⚙️",
  },
  {
    title: "Electrical Design & ELV System",
    description: "ELV systems and infrastructure design",
    icon: "⚡",
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing technical support and system maintenance",
    icon: "🔧",
  },
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.2 })

  return (
    <section id="services" ref={ref} className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-6 rounded-lg border border-border bg-white/60 hover:bg-white hover:border-accent hover:shadow-lg transition-all cursor-pointer ${
                inView ? "animate-slide-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
