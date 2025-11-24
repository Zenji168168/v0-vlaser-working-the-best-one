"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "km" : "en")}
      className="glass hover:glass-strong text-foreground/70 hover:text-primary transition-all duration-300 flex items-center gap-2 px-3 py-2"
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-medium">{language === "en" ? "ខ្មែរ" : "EN"}</span>
    </Button>
  )
}
