"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const portfolioImages = [
  { id: 1, src: "/portfolio/project-1.jpg", alt: "Project 1", titleKey: "portfolio.project1" },
  { id: 2, src: "/portfolio/project-2.jpg", alt: "Project 2", titleKey: "portfolio.project2" },
  { id: 3, src: "/portfolio/project-3.jpg", alt: "Project 3", titleKey: "portfolio.project3" },
  { id: 4, src: "/portfolio/project-4.jpg", alt: "Project 4", titleKey: "portfolio.project4" },
  { id: 5, src: "/portfolio/project-5.jpg", alt: "Project 5", titleKey: "portfolio.project5" },
  { id: 6, src: "/portfolio/project-6.jpg", alt: "Project 6", titleKey: "portfolio.project6" },
]

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleCloseModal = () => {
    setIsModalVisible(false)
    setTimeout(() => setSelectedImage(null), 300)
  }

  const handleOpenModal = (image: { src: string; alt: string; title: string }) => {
    setSelectedImage(image)
    setTimeout(() => setIsModalVisible(true), 10)
  }

  return (
    <>
      <section id="portfolio" ref={sectionRef} className="relative py-20 md:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-[#dbeafe] opacity-[0.09] rounded-full blur-[100px] animate-gentle-float" />
          <div
            className="absolute bottom-[20%] right-[15%] w-[480px] h-[480px] bg-[#dbeafe] opacity-[0.08] rounded-full blur-[120px] animate-gentle-float-alt"
            style={{ animationDelay: "5s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              {t("portfolio.title")}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t("portfolio.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {portfolioImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer transition-all duration-600 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } hover:-translate-y-2`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
                onClick={() => handleOpenModal({ ...image, title: t(image.titleKey) })}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm p-4 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/50 transition-all duration-500 border border-slate-100">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-slate-100 group-hover:border-blue-200 transition-colors duration-500">
                    <Image
                      src={image.src || "/placeholder.svg?height=400&width=600"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b]/80 via-[#1e293b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <h3 className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {t(image.titleKey)}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300 ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseModal}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full glass-strong hover:glass-ultra text-foreground transition-all z-10 hover:scale-110"
            onClick={handleCloseModal}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className={`relative max-w-5xl w-full aspect-[4/3] glass-ultra p-6 rounded-2xl shadow-2xl transition-all duration-300 ${
              isModalVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-border">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h3 className="text-xl font-semibold text-foreground">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
