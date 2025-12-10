"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface QRModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QRModal({ isOpen, onClose }: QRModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" />

      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full animate-scale-up z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-full shadow-xl flex items-center justify-center hover:from-red-600 hover:to-pink-700 transition-all duration-300 hover:scale-110 hover:rotate-90 z-20 group"
        >
          <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-10 text-center">
          <div className="mb-6">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 animate-gradient">
              Contact Us on Telegram
            </h3>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-pulse" />
          </div>

          <p className="text-gray-600 mb-6 text-base md:text-lg font-medium">Scan QR code to connect with us</p>

          <div className="relative w-full max-w-sm mx-auto mb-6">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 shadow-lg">
              <Image
                src="/images/image_2025-11-17_09-46-02.png"
                alt="Telegram QR Code - @SANGHAMEUK"
                width={400}
                height={400}
                className="object-contain w-full h-full rounded-xl"
                priority
              />
            </div>
          </div>

          <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            @SANGHAMEUK
          </p>

          <a
            href="https://t.me/SANGHAMEUK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group"
          >
            <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
            <span className="group-hover:tracking-wide transition-all">Open Telegram</span>
          </a>
        </div>
      </div>
    </div>
  )
}
