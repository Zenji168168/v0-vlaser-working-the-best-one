"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { MessageCircle } from 'lucide-react'
import QRModal from "./qr-modal"
import VlaserLogo from "./vlaser-logo"

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
    { name: "Client", href: "#clients" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-background/80 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 transition-transform duration-300 group-hover:scale-110">
                <VlaserLogo className="w-full h-full" />
              </div>
              <div className="flex flex-col justify-center">
                {/* Updated Khmer text size and weight to match the reference image */}
                <span className="text-sm sm:text-xl font-bold text-slate-700 leading-tight tracking-wide">
                  វីឡាសឺសូលូសិន ខេមបូឌា ឯ.ក
                </span>
                {/* Updated English text styling */}
                <span className="text-[10px] sm:text-sm font-semibold text-slate-500 leading-tight">
                  Vlaser Solution Cambodia Co., Ltd
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                className="hidden sm:flex rounded-full px-6 py-2 bg-gradient-to-r from-[#FF0080] to-[#7928CA] text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 border-none gap-2"
                onClick={() => setIsQRModalOpen(true)}
              >
                <MessageCircle className="w-4 h-4" />
                Get in Touch
              </Button>
              
              <Button
                size="icon"
                className="sm:hidden rounded-full bg-gradient-to-r from-[#FF0080] to-[#7928CA] text-white shadow-lg border-none"
                onClick={() => setIsQRModalOpen(true)}
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>

            <button className="lg:hidden text-foreground p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            <nav className="lg:hidden mt-4 pb-4 border-t border-border animate-fade-in bg-background rounded-2xl p-4 shadow-xl">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-3 px-4 text-sm font-medium text-foreground hover:bg-gray-100 rounded-lg transition-all"
                >
                  {link.name}
                </button>
              ))}
              <Button
                className="mt-4 rounded-full px-8 py-2 bg-gradient-to-r from-[#FF0080] to-[#7928CA] text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 border-none w-full gap-2"
                onClick={() => setIsQRModalOpen(true)}
              >
                <MessageCircle className="w-4 h-4" />
                Get in Touch
              </Button>
            </nav>
          )}
        </div>
      </header>

      <QRModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </>
  )
}
