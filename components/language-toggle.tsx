"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"

export default function LanguageToggle() {
  const { language, setLanguage, isChanging } = useLanguage()

  const handleLanguageSwitch = () => {
    setLanguage(language === "en" ? "km" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLanguageSwitch}
      disabled={isChanging}
      className="glass hover:glass-strong text-foreground/80 hover:text-primary transition-all duration-500 flex items-center gap-2 px-4 py-2 relative overflow-hidden group border border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isChanging && (
        <>
          <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 animate-pulse" />
          <span className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </>
      )}

      <span
        className={`text-base font-bold transition-all duration-300 relative ${
          isChanging ? "opacity-0 scale-75 rotate-180 blur-sm" : "opacity-100 scale-100 rotate-0 blur-0"
        }`}
      >
        {language === "en" ? "ខ្មែរ" : "EN"}
      </span>

      {/* Hover glow effect */}
      <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/5 via-accent/10 to-primary/5" />
    </Button>
  )
}
