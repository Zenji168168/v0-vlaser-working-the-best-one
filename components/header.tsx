"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import QRModal from "./qr-modal"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "./language-toggle"
import { MessageCircle } from "lucide-react"

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
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/50 border-b border-slate-200/50"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-accent/10 to-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <div className="relative w-12 h-12 rounded-xl overflow-hidden transform group-hover:scale-105 transition-smooth">
                <Image
                  src="/vlaser-logo.png"
                  alt="Vlaser Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block relative">
                <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                  វីឡាសឺសូលូសិន ខេមបូឌា ឯ.ក
                </div>
                <div className="text-xs font-semibold text-muted-foreground group-hover:text-primary/70 transition-colors leading-tight">
                  Vlaser Solution Cambodia Co., Ltd
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3 flex-shrink-0">
              <LanguageToggle />
              <Button
                size="sm"
                className="bg-[#1e293b] hover:bg-[#0f172a] text-white font-medium text-sm shadow-sm hover:shadow-md hover:shadow-slate-800/20 hover:scale-105 transition-all duration-300 px-4 py-2 rounded-xl"
                onClick={() => setIsQRModalOpen(true)}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">{t("header.contact")}</span>
                <span className="sm:hidden">Contact</span>
              </Button>
            </div>

            <button
              className="lg:hidden text-foreground p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border/50 animate-soft-fade-in">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-3 px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-xl transition-smooth"
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
