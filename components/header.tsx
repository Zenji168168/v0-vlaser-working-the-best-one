"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import QRModal from "./qr-modal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    if (pathname === '/') {
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
            ? "glass-strong shadow-lg shadow-gray-200/50" 
            : "bg-white/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                <Image src="/vlaser-logo.png" alt="Vlaser Logo" width={48} height={48} className="object-contain" />
              </div>
              <div className="hidden md:block">
                <div className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  វីឡាសឺសូលូសិន ខេមបូឌា ឯ.ក
                </div>
                <div className="text-sm font-semibold text-gray-600 group-hover:text-indigo-500 transition-colors">
                  Vlaser Solution Cambodia Co., Ltd
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 hover:scale-110 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                size="sm"
                className="glass-strong hover:glass text-indigo-600 hover:text-indigo-700 font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-110 transition-all duration-300 border border-indigo-200"
                onClick={() => setIsQRModalOpen(true)}
              >
                Contact
              </Button>
            </div>

            <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-2 text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
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
