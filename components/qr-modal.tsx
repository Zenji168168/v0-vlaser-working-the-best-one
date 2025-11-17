"use client"

import { X } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

interface QRModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QRModal({ isOpen, onClose }: QRModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h3>
          <p className="text-gray-600 mb-6">Scan the QR code to connect with us on Telegram</p>
          
          <div className="relative w-full aspect-square max-w-sm mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image_2025-11-17_09-46-02-4cktAURTJBVisvsP3CiF7t4okyaRPS.png"
              alt="QR Code - @SANGHAMEUK"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="text-lg font-semibold text-blue-600 mb-4">@SANGHAMEUK</p>
          
          <a
            href="https://t.me/SanghaMeuk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-600/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
            Open Telegram
          </a>
        </div>
      </div>
    </div>
  )
}
