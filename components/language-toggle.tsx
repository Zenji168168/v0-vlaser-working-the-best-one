"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { useState } from "react"

function LanguageIcon({ isChanging, language }: { isChanging: boolean; language: string }) {
  return (
    <div className="relative w-5 h-5">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-5 h-5 transition-all duration-700 ${
          isChanging ? "rotate-[360deg] scale-110" : "rotate-0 scale-100"
        }`}
      >
        {/* Globe base */}
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" className="text-primary" />

        {/* Language switch indicator - animated lines */}
        <path
          d="M12 3C12 3 9 7 9 12C9 17 12 21 12 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-all duration-500 ${isChanging ? "opacity-30" : "opacity-100"}`}
        />
        <path
          d="M12 3C12 3 15 7 15 12C15 17 12 21 12 21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-all duration-500 ${isChanging ? "opacity-30" : "opacity-100"}`}
        />

        {/* Horizontal lines */}
        <path
          d="M3 12H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className={`transition-all duration-700 ${isChanging ? "translate-y-1 opacity-40" : "translate-y-0 opacity-100"}`}
        />
        <path
          d="M5 8H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={`transition-all duration-700 ${isChanging ? "translate-y-2 opacity-20" : "translate-y-0 opacity-70"}`}
        />
        <path
          d="M5 16H19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={`transition-all duration-700 ${isChanging ? "-translate-y-2 opacity-20" : "translate-y-0 opacity-70"}`}
        />

        {/* Sparkle effect during switch */}
        {isChanging && (
          <>
            <circle cx="18" cy="6" r="1.5" fill="currentColor" className="text-accent animate-ping" />
            <circle
              cx="6"
              cy="18"
              r="1.5"
              fill="currentColor"
              className="text-accent animate-ping"
              style={{ animationDelay: "150ms" }}
            />
          </>
        )}
      </svg>
    </div>
  )
}

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [isChanging, setIsChanging] = useState(false)

  const handleLanguageSwitch = () => {
    setIsChanging(true)
    // Add slight delay for visual feedback
    setTimeout(() => {
      setLanguage(language === "en" ? "km" : "en")
      setTimeout(() => setIsChanging(false), 400)
    }, 250)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLanguageSwitch}
      className="glass hover:glass-strong text-foreground/80 hover:text-primary transition-all duration-500 flex items-center gap-2.5 px-3.5 py-2 relative overflow-hidden group border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20"
    >
      {/* Animated background ripple effect */}
      {isChanging && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-ping rounded-md" />
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse rounded-md"
            style={{ animationDelay: "150ms" }}
          />
        </>
      )}

      {/* Icon with custom animation */}
      <LanguageIcon isChanging={isChanging} language={language} />

      {/* Language text with slide and fade animation */}
      <span
        className={`text-sm font-semibold transition-all duration-400 relative ${
          isChanging ? "opacity-0 translate-x-3 scale-95 blur-sm" : "opacity-100 translate-x-0 scale-100 blur-0"
        }`}
      >
        {language === "en" ? "ខ្មែរ" : "EN"}
      </span>

      {/* Hover glow effect */}
      <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5" />
    </Button>
  )
}
