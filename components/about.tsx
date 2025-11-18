"use client"

import { useInView } from "react-intersection-observer"
import { Target, Users } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: true,
    rootMargin: "0px 0px -100px 0px"
  })

  return (
    <section id="about" ref={ref} className="py-32 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Text about company */}
          <div className={`space-y-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10 text-indigo-600" />
              <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
            </div>
            
            <div className="glass-strong rounded-3xl p-8 transition-smooth hover:shadow-2xl hover:shadow-indigo-200/50">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Vlaser Solution Cambodia Co., Ltd has been serving businesses nationwide since 2019. We combine
                innovation with reliability to deliver IT solutions that transform your digital landscape.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Innovation and reliability at our core",
                "Comprehensive IT solutions for all sizes",
                "Expert team committed to your success"
              ].map((text, i) => (
                <div key={i} className={`glass rounded-2xl p-6 hover:glass-strong transition-smooth hover:translate-x-2 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
                  <p className="text-gray-700 font-medium">✓ {text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Glass card with icon animation */}
          <div className={`space-y-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-10 h-10 text-indigo-600" />
              <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
            </div>

            <div className="glass-strong rounded-3xl p-8 border-2 border-blue-300/50 shadow-xl shadow-blue-200/50 transition-smooth hover:shadow-2xl hover:shadow-blue-300/60 hover:scale-105">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "📅", num: "5+", label: "Years" },
                  { icon: "🚀", num: "50+", label: "Projects" },
                  { icon: "⭐", num: "100%", label: "Satisfaction" },
                  { icon: "🏆", num: "24/7", label: "Support" }
                ].map((stat, i) => (
                  <div key={i} className="text-center glass rounded-2xl p-6 hover:glass-strong transition-smooth hover:scale-110">
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold text-indigo-600">{stat.num}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
