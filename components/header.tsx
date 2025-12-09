"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import QRModal from "./qr-modal"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "./language-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.portfolio"), href: "#portfolio" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    if (pathname === "/") {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } else {
      router.push(`/${href}`)
      requestAnimationFrame(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-strong shadow-modern-lg border-b border-border/50" : "bg-white/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden transform group-hover:scale-105 transition-smooth shadow-modern">
                <Image
                  src="/vlaser-logo.png"
                  alt="Vlaser Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-smooth leading-tight tracking-tight">
                  វីឡាសឺសូលូសិន ខេមបូឌា ឯ.ក
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-muted-foreground group-hover:text-primary transition-smooth leading-tight">
                  Vlaser Solution Cambodia Co., Ltd
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-smooth hover:bg-secondary/50 rounded-lg group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <LanguageToggle />
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-xs sm:text-sm shadow-modern hover:shadow-modern-lg hover:scale-105 transition-smooth px-3 sm:px-6 py-2 rounded-lg"
                onClick={() => setIsQRModalOpen(true)}
              >
                <span className="hidden sm:inline">{t("header.contact")}</span>
                <span className="sm:hidden">Contact</span>
              </Button>
            </div>

            <button
              className="lg:hidden text-foreground p-2 hover:bg-secondary/50 rounded-lg transition-smooth"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border animate-fade-in">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-3 px-4 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-secondary/50 rounded-lg transition-smooth"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      <QRModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </>
  )
}
