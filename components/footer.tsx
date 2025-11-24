"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useLanguage } from "@/lib/language-context"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const pathname = usePathname()
  const router = useRouter()
  const { t } = useLanguage()

  const handleNavigation = (link: string) => {
    if (link === "Portfolio") {
      router.push("/portfolio")
    } else {
      const sectionId = `#${link.toLowerCase()}`
      if (pathname !== "/") {
        router.push(`/${sectionId}`)
      } else {
        document.querySelector(sectionId)?.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="glass-strong border-t-4 border-gradient-to-r from-primary via-accent to-primary py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image src="/vlaser-logo.png" alt="Vlaser Logo" width={48} height={48} className="object-contain" />
              <div>
                <div className="text-sm font-bold text-foreground/70">វីឡាសឺសូលូសិន</div>
                <div className="text-lg font-bold text-primary">Vlaser Solution</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">{t("footer.tagline")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">{t("footer.quicklinks")}</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => handleNavigation(link)}
                    className="text-muted-foreground hover:text-primary transition-smooth hover:translate-x-2 inline-block font-light"
                  >
                    → {t(`nav.${link.toLowerCase()}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">{t("footer.contact")}</h3>
            <div className="space-y-3 text-sm text-muted-foreground font-light">
              <p>📧 info@vlasersolutions.com</p>
              <p>📍 Phnom Penh, Cambodia</p>
              <p>📞 096 666 9545</p>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://web.facebook.com/profile.php?id=61583380988974"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-primary/20"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://t.me/SanghaMeuk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary/80 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-primary/20"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {currentYear} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
