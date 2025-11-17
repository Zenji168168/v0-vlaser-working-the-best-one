"use client"

import { useInView } from "react-intersection-observer"
import { Target, Users, Award } from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="py-32 bg-white relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl parallax" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <div
            className={`space-y-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl border-l-4 border-blue-600 shadow-lg shadow-gray-200/50">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                "To deliver cutting-edge IT solutions that drive efficiency, productivity, and growth for our clients."
              </p>
            </div>
            <div className="space-y-4 mt-8">
              {[
                { text: "Innovation and reliability at our core", icon: "⚡" },
                { text: "Comprehensive IT solutions for all business sizes", icon: "🎯" },
                { text: "Expert team committed to your success", icon: "👥" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group p-5 bg-white rounded-xl shadow-md shadow-gray-200/50 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 hover:translate-x-2">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`space-y-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50">
              <p className="text-lg text-gray-700 leading-relaxed">
                Vlaser Solution Cambodia Co., Ltd has been serving businesses nationwide since 2019. We combine
                innovation with reliability to deliver IT solutions that transform your digital landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: "5+", label: "Years Experience", icon: "📅" },
                { number: "50+", label: "Projects Done", icon: "🚀" },
                { number: "100%", label: "Client Satisfaction", icon: "⭐" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl shadow-md shadow-gray-200/50 hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32">
          <div className={`text-center mb-16 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">What sets us apart from the rest</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: "Experienced Professionals", icon: "👥" },
              { title: "Proven Projects Nationwide", icon: "🏆" },
              { title: "Client Satisfaction", icon: "💼" },
              { title: "Competitive Pricing", icon: "💰" },
              { title: "Continuous Innovation", icon: "⚡" },
            ].map((item, i) => (
              <div
                key={i}
                className={`bg-white p-6 rounded-2xl shadow-md shadow-gray-200/50 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-500 hover:-translate-y-3 group cursor-pointer ${
                  inView ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
