"use client"

import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/80 border-t border-border py-12 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/vlaser-logo.png" alt="Vlaser Logo" width={40} height={40} className="object-contain" />
              <div>
                <div className="text-xs font-bold text-foreground/60" style={{ fontFamily: "var(--font-khmer)" }}>
                  វីឡាសឺសូលូសិន
                </div>
                <div className="font-bold text-foreground">Vlaser Solution</div>
              </div>
            </div>
            <p className="text-foreground/70 text-sm">Delivering cutting-edge IT solutions since 2019</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-accent transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              {/* Removed 012 989 784 phone number from footer */}
              <p>✉️ info@vlasersolutions.com</p>
              <p>📍 Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-foreground/70">
          <p>Copyright © {currentYear} Vlaser Solution Cambodia Co., Ltd. All rights reserved.</p>
          <p className="mt-2 text-xs">Bilingual • Innovative • Reliable</p>
        </div>
      </div>
    </footer>
  )
}
