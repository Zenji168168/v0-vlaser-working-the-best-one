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
      <section id="portfolio" ref={sectionRef} className="relative py-20 md:py-24 bg-white">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t("portfolio.title")}</h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">{t("portfolio.subtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
                onClick={() => handleOpenModal({ ...image, title: t(image.titleKey) })}
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src || "/placeholder.svg?height=400&width=600"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-white font-semibold text-lg">{t(image.titleKey)}</h3>
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
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300 ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseModal}
        >
          <button
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
            onClick={handleCloseModal}
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className={`relative max-w-5xl w-full aspect-[4/3] bg-white rounded-lg shadow-2xl transition-all duration-300 overflow-hidden ${
              isModalVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl font-semibold text-white text-center">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
