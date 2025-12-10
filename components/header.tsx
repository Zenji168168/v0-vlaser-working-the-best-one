"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "./language-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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
              <a
                href="https://t.me/SANGHAMEUK"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#7B2D2D] via-[#8B3A3A] to-[#D4AF37] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 group relative overflow-hidden"
                aria-label="Contact via Telegram"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L8.08 13.768l-2.994-.924c-.653-.204-.657-.653.136-.969l11.566-4.458c.538-.196 1.006.128.832.804z" />
                </svg>
                <span className="text-sm font-semibold relative z-10">Contact</span>
              </a>
            </div>

            <button
              className="lg:hidden text-foreground p-2 hover:bg-secondary/50 rounded-lg transition-smooth"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h16" />
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
    </>
  )
}
