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
      console.log("[v0] QR Modal opened")
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full z-[10000] p-8 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="text-center space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Us on Telegram</h3>
            <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>

          <p className="text-gray-600">Scan QR code to connect with us</p>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
            <div className="bg-white rounded-lg p-4 shadow-inner">
              <Image
                src="/images/image_2025-11-17_09-46-02.png"
                alt="Telegram QR Code - @SANGHAMEUK"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg"
                priority
                unoptimized
                onError={() => console.log("[v0] Image failed to load")}
                onLoad={() => console.log("[v0] Image loaded successfully")}
              />
            </div>
          </div>

          <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            @SANGHAMEUK
          </p>

          <a
            href="https://t.me/SANGHAMEUK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg w-full justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
            </svg>
            Open Telegram
          </a>
        </div>
      </div>
    </div>
  )
}
