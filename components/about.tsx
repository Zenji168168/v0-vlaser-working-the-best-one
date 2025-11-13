"use client"

import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <section id="about" ref={ref} className="py-20 sm:py-32 bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div
            className={`space-y-6 transition-all duration-700 ${inView ? "animate-slide-in-up opacity-100" : "opacity-0"}`}
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-foreground/80 leading-relaxed border-l-4 border-accent pl-6 font-medium italic">
                "To deliver cutting-edge IT solutions that drive efficiency, productivity, and growth for our clients."
              </p>
            </div>
            <div className="space-y-4 mt-6">
              {[
                "Innovation and reliability at our core",
                "Comprehensive IT solutions for all business sizes",
                "Expert team committed to your success",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="text-accent font-bold text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* About */}
          <div
            className={`space-y-6 transition-all duration-700 ${inView ? "animate-slide-in-up opacity-100" : "opacity-0"}`}
            style={{ animationDelay: "0.1s", transitionDelay: "0.1s" }}
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">About Us</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Vlaser Solution Cambodia Co., Ltd has been serving businesses nationwide since 2019. We combine
                innovation with reliability to deliver IT solutions that transform your digital landscape.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { number: "5+", label: "Years of Service" },
                { number: "20+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-accent/10 to-primary/10 p-4 rounded-lg border border-accent/20 hover:border-accent/40 transition-all group cursor-pointer"
                >
                  <div className="text-2xl font-bold text-accent group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-xs text-foreground/70 group-hover:text-foreground/90 transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20 pt-20 border-t border-border/50">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: "Experienced Professionals", icon: "👥" },
              { title: "Proven Projects Nationwide", icon: "🏆" },
              { title: "Commitment to Client Satisfaction", icon: "💼" },
              { title: "Competitive Pricing", icon: "💰" },
              { title: "Continuous Innovation", icon: "⚡" },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-lg bg-white/50 border border-border hover:border-accent hover:bg-white hover:shadow-lg transition-all group ${
                  inView ? "animate-slide-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
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
