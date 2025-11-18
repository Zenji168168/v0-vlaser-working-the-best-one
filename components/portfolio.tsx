"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X } from 'lucide-react'

const portfolioImages = [
  { id: 1, src: "/portfolio/project-1.jpg", alt: "Project 1", title: "Network Infrastructure Setup" },
  { id: 2, src: "/portfolio/project-2.jpg", alt: "Project 2", title: "Security System Implementation" },
  { id: 3, src: "/portfolio/project-3.jpg", alt: "Project 3", title: "Cloud Migration Solution" },
  { id: 4, src: "/portfolio/project-4.jpg", alt: "Project 4", title: "IT Consultation Service" },
  { id: 5, src: "/portfolio/project-5.jpg", alt: "Project 5", title: "Data Center Management" },
  { id: 6, src: "/portfolio/project-6.jpg", alt: "Project 6", title: "Cybersecurity Solution" },
]

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
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
      <section 
        id="portfolio" 
        ref={sectionRef}
        className="relative py-20 md:py-32 bg-gradient-to-br from-background via-secondary/30 to-muted/20 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/40 to-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-[480px] h-[480px] bg-gradient-to-br from-accent/40 to-destructive/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-blob-slow" />
          <div className="absolute top-1/2 right-1/3 w-[450px] h-[450px] bg-gradient-to-br from-primary/35 to-accent/30 rounded-full mix-blend-multiply filter blur-3xl animate-float-blob-fast" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Our Portfolio
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Showcasing our innovative IT solutions and successful projects delivered to clients across Cambodia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {portfolioImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer transition-all duration-600 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                } hover:-translate-y-2`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
                onClick={() => handleOpenModal(image)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-strong p-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-background/50 group-hover:border-primary/20 transition-colors duration-500">
                    <Image
                      src={image.src || "/placeholder.svg?height=400&width=600"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <h3 className="text-primary-foreground font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {image.title}
                      </h3>
                    </div>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
            isModalVisible ? 'opacity-100' : 'opacity-0'
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
              isModalVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
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
