"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"
import { X } from "lucide-react"
import { useEffect } from "react"

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
      subtitle: "Officially Authorized Hikvision Dealer Partner in Cambodia",
      description:
        "We are proud to be officially appointed by Hikvision to deliver genuine products, professional solutions, and trusted services across Cambodia.",
      caption: "Official Authorization issued by Hikvision Digital Technology Co., Ltd.",
    },
    km: {
      title: "ដៃគូចែកចាយផ្លូវការរបស់ Hikvision",
      subtitle: "ដៃគូចែកចាយផ្លូវការរបស់ Hikvision ក្នុងប្រទេសកម្ពុជា",
      description:
        "យើងខ្ញុំមានមោទនភាពក្នុងការទទួលបានការតែងតាំងជាដៃគូចែកចាយផ្លូវការពី Hikvision ដើម្បីផ្តល់ជូនផលិតផលដើម សេវាកម្មវិជ្ជាជីវៈ និងដំណោះស្រាយដែលអាចទុកចិត្តបាននៅទូទាំងប្រទេសកម្ពុជា។",
      caption: "ការអនុញ្ញាតឱ្យផ្លូវការលេខដោយបច្ចេកវិទ្យាឌីជីថល Hikvision Co., Ltd.",
    },
  }

  const t = content[language as keyof typeof content] || content.en
  const selectedCertData = certificates.find((cert) => cert.id === selectedCert)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedCert])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-5xl mx-auto">
        {/* Header - Centered */}
        <div className="text-center mb-8">
          <h2
            className={`text-4xl sm:text-5xl lg:text-5xl font-bold mb-3 text-foreground ${
              language === "km" ? "font-khmer" : ""
            }`}
          >
            {t.title}
          </h2>
          <h3
            className={`text-xl sm:text-2xl font-semibold mb-6 text-primary ${
              language === "km" ? "font-khmer" : ""
            }`}
          >
            {t.subtitle}
          </h3>
          <p
            className={`text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed ${
              language === "km" ? "font-khmer" : ""
            }`}
          >
            {t.description}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="flex justify-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
            {certificates.map((cert, index) => (
              <div key={cert.id} className="animate-smooth-fade-up flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Certificate Card */}
                <button
                  onClick={() => setSelectedCert(cert.id)}
                  className="relative bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg hover-lift flex-1 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`Open ${cert.alt} in fullscreen`}
                >
                  <div className="relative aspect-[3/4] w-full bg-gradient-to-br from-muted to-secondary/50 flex items-center justify-center p-3">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.alt}
                      width={350}
                      height={450}
                      className="w-full h-full object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                </button>

                {/* Certificate Info */}
                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold text-foreground mb-2">Certificate {cert.year}</p>
                  <p className={`text-sm text-muted-foreground leading-relaxed ${language === "km" ? "font-khmer" : ""}`}>
                    {t.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {selectedCert && selectedCertData && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full z-[10000] animate-smooth-scale overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-primary-foreground" />
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="relative aspect-[3/4] w-full bg-gradient-to-br from-muted to-secondary/50 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src={selectedCertData.image}
                  alt={selectedCertData.alt}
                  width={500}
                  height={650}
                  className="w-full h-full object-contain p-4"
                  priority
                />
              </div>

              {/* Modal Title */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">Certificate {selectedCertData.year}</h3>
                <p className={`text-base text-muted-foreground ${language === "km" ? "font-khmer" : ""}`}>
                  {t.caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

  const t = content[language as keyof typeof content] || content.en

  const selectedCertData = certificates.find(cert => cert.id === selectedCert)

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
              <div key={cert.id} className="animate-smooth-fade-up flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Certificate Image */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 flex-1">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.alt}
                    width={400}
                    height={550}
                    className="w-full h-full object-contain p-4"
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
      </div>
    </section>
  )
}
