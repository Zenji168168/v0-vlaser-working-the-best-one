"use client"

import { useInView } from "react-intersection-observer"
import { Monitor, Shield, Cloud, Lock, HardDrive, Code, Zap, Wrench } from 'lucide-react'

const services = [
  {
    title: "IT Consultation & Strategy",
    description: "Expert guidance for your digital transformation journey",
    icon: Monitor,
  },
  {
    title: "Managed IT Services",
    description: "24/7 support, network security, and CCTV solutions",
    icon: Shield,
  },
  {
    title: "Cloud Solutions",
    description: "Migration, backup, and SaaS implementation",
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    description: "Threat detection, prevention, and security training",
    icon: Lock,
  },
  {
    title: "Hardware Solutions",
    description: "Servers, infrastructure design, and deployment",
    icon: HardDrive,
  },
  {
    title: "Software Development",
    description: "Web, Mobile, and Custom software solutions",
    icon: Code,
  },
  {
    title: "Electrical Design & ELV System",
    description: "ELV systems and infrastructure design",
    icon: Zap,
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing technical support and system maintenance",
    icon: Wrench,
  },
]

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" ref={ref} className="py-32 bg-gray-50 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none parallax">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-20 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-white shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-500 cursor-pointer hover:-translate-y-3 ${
                  inView ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
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
