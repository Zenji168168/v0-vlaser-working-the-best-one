"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"

export default function Certificates() {
  const { language } = useLanguage()
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  const certificates = [
    {
      id: "cert-2024",
      year: "2024",
      image: "/certificates/hikvision-2024.png",
      alt: "Hikvision Authorized Dealer Partner Certificate 2024",
    },
    {
      id: "cert-2023",
      year: "2023",
      image: "/certificates/hikvision-2023.png",
      alt: "Hikvision Authorized Dealer Partner Certificate 2023",
    },
  ]

  const content = {
    en: {
      title: "Hikvision Authorized Dealer Partner",
      description:
        "Vlaser Solution Cambodia Co., Ltd is officially appointed as a Hikvision Authorized Dealer Partner for Full Range products in Cambodia.",
      caption: "Official Authorization issued by Hikvision Digital Technology Co., Ltd.",
    },
    km: {
      title: "ដៃគូលក់ផលិតផលដែលបានស័ក្តិសម Hikvision",
      description:
        "ក្រុមហ៊ុនលឺសូលូសិននៃកម្ពុជា ត្រូវបានតែងតាំងជាផ្នែកหุ้នក្រុមលក់ផលិតផលដែលបានស័ក្តិសមរបស់ Hikvision សម្រាប់ផលិតផលឧសម្ភាគ៍នៅកម្ពុជា។",
      caption: "ការអនុញ្ញាតឱ្យផ្លូវការលេខដោយបច្ចេកវិទ្យាឌីជីថល Hikvision Co., Ltd.",
    },
  }

  const t = content[language as keyof typeof content] || content.en

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${language === "km" ? "font-khmer" : ""}`}>
            {t.title}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${language === "km" ? "font-khmer" : ""}`}>
            {t.description}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-4xl">
            {certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="group cursor-pointer animate-smooth-fade-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedCert(cert.id)}
              >
                {/* Certificate Image */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex-1">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.alt}
                    width={400}
                    height={550}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Certificate Label */}
                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold text-foreground mb-2">Certificate {cert.year}</p>
                  <p className={`text-sm text-muted-foreground ${language === "km" ? "font-khmer" : ""}`}>
                    {t.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedCert(null)}
          >
            <div className="relative max-w-2xl w-full max-h-[85vh] rounded-xl overflow-hidden bg-white" onClick={(e) => e.stopPropagation()}>
              <Image
                src={certificates.find((c) => c.id === selectedCert)?.image || ""}
                alt={certificates.find((c) => c.id === selectedCert)?.alt || ""}
                width={800}
                height={1000}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
