"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, SkipBack, SkipForward, Plus, Check, MapPin, ChevronDown, Wifi, Shield, Server, Camera, Activity, Lock, Radio, Sparkles } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"} text-center lg:text-left`}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
              Let's Empower Your
              <span className="block">Digital Future</span>
            </h1>
            
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-bold gradient-text">
                Leading IT Solutions Provider in Cambodia
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed mx-auto lg:mx-0">
                Providing comprehensive IT solutions for businesses of all sizes with cutting-edge technology and expert support
              </p>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <Button 
                className="neumorphic-btn h-14 px-8 text-lg text-[#7928CA] font-semibold hover:text-[#FF0080] bg-transparent border-none gap-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
                <Sparkles className="w-5 h-5" />
              </Button>
            </div>

          </div>

          {/* Right Column: Floating UI Cards */}
          <div className={`relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            
            <div className="relative w-full h-full max-w-[400px] lg:max-w-none scale-[0.65] sm:scale-90 lg:scale-100 origin-center lg:origin-top-left">
              {/* Card 1: CCTV Live Feed (Top Right) */}
              <div className="absolute top-0 right-0 lg:right-10 w-72 neumorphic p-4 animate-float z-20 bg-background">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold text-red-500">LIVE REC</span>
                  </div>
                  <span className="text-xs text-muted-foreground">CAM-01</span>
                </div>
                <div className="w-full h-40 neumorphic-pressed rounded-xl relative overflow-hidden mb-4 flex items-center justify-center bg-black/5">
                   <Camera className="w-12 h-12 text-muted-foreground/20" />
                   <div className="absolute bottom-2 right-2 text-[10px] font-mono text-muted-foreground">1080p HD</div>
                </div>
                <div className="flex justify-between items-center px-2">
                  <div className="flex gap-3">
                     <div className="w-8 h-8 rounded-full neumorphic flex items-center justify-center hover:text-primary cursor-pointer transition-colors">
                        <Radio className="w-4 h-4" />
                     </div>
                     <div className="w-8 h-8 rounded-full neumorphic flex items-center justify-center hover:text-primary cursor-pointer transition-colors">
                        <Activity className="w-4 h-4" />
                     </div>
                  </div>
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-primary/30 cursor-pointer">
                     <Play className="w-4 h-4 text-white fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Card 2: Network Status List (Center Left) */}
              <div className="absolute top-20 left-0 lg:left-10 w-64 neumorphic p-6 animate-float-delayed z-10 bg-background">
                <h3 className="font-bold text-foreground mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl gradient-bg text-white shadow-lg shadow-primary/20">
                    <div className="flex items-center gap-3">
                      <Wifi className="w-4 h-4" />
                      <span className="text-sm font-medium">Main Network</span>
                    </div>
                    <Check className="w-4 h-4" />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Server className="w-4 h-4" />
                      <span className="text-sm">Data Center</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100/50 cursor-pointer transition-colors">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm">Firewall</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
              </div>

              {/* Card 3: Security Analytics (Bottom Right) */}
              <div className="absolute bottom-10 right-0 lg:right-20 w-72 neumorphic p-6 animate-float z-30 bg-background">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-foreground">Security Log</h3>
                  <span className="text-xs font-bold text-primary">REALTIME</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium">Encryption</span>
                        <span className="text-primary">Secure</span>
                      </div>
                      <div className="h-2 w-full neumorphic-pressed rounded-full overflow-hidden">
                        <div className="h-full w-full gradient-bg rounded-full opacity-80" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-2xl neumorphic-pressed">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-muted-foreground">Traffic Load</span>
                      <span className="text-xs text-primary">Low</span>
                    </div>
                    <div className="flex items-end gap-1 h-8">
                      {[40, 70, 45, 90, 60, 75, 50].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Quick Action (Floating around) */}
              <div className="absolute bottom-40 -left-10 lg:left-0 w-48 neumorphic p-4 animate-float-delayed z-20 bg-background">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full neumorphic flex items-center justify-center text-primary">
                    <Plus className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-foreground">Add Device</span>
                </div>
                <div className="h-1 w-full bg-gray-200 rounded-full" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
