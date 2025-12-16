"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import LanguageToggle from "./language-toggle"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
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
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      router.push(`/${href}`)
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src="/vlaser-logo.png"
                alt="Vlaser Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-primary leading-tight">វីឡាសឺសូលូសិន ខេមបូឌា ឯ.ក</div>
              <div className="text-xs text-primary/60 leading-tight">Vlaser Solution Cambodia Co., Ltd</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-primary/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />

            {/* Contact button */}
            <a
              href="https://t.me/SANGHAMEUK"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L8.08 13.768l-2.994-.924c-.653-.204-.657-.653.136-.969l11.566-4.458c.538-.196 1.006.128.832.804z" />
              </svg>
              {t("header.contact")}
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-primary hover:bg-primary/5 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-3 px-4 text-sm font-medium text-primary/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
