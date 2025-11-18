"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

// Portfolio images - add your images to /public/portfolio folder
const portfolioImages = [
  { id: 1, src: "/portfolio/project-1.jpg", alt: "Project 1" },
  { id: 2, src: "/portfolio/project-2.jpg", alt: "Project 2" },
  { id: 3, src: "/portfolio/project-3.jpg", alt: "Project 3" },
  { id: 4, src: "/portfolio/project-4.jpg", alt: "Project 4" },
  { id: 5, src: "/portfolio/project-5.jpg", alt: "Project 5" },
  { id: 6, src: "/portfolio/project-6.jpg", alt: "Project 6" },
]

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleCloseModal = () => {
    setIsModalVisible(false)
    setTimeout(() => setSelectedImage(null), 300)
  }

  const handleOpenModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image)
    setTimeout(() => setIsModalVisible(true), 10)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10">
        <Header />
        
        <main className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {/* Page Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing our innovative IT solutions and successful projects delivered to clients across Cambodia
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {portfolioImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleOpenModal(image)}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white p-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-gray-100 group-hover:border-blue-200 transition-colors duration-500">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {portfolioImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No portfolio items yet. Add images to /public/portfolio folder.</p>
            </div>
          )}
        </main>

        <Footer />
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-300 ${
            isModalVisible ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={handleCloseModal}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={handleCloseModal}
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className={`relative max-w-5xl w-full aspect-[4/3] bg-white p-6 rounded-2xl shadow-2xl transition-all duration-300 ${
              isModalVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-gray-200">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
