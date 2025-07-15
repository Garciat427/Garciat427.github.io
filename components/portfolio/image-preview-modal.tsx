"use client"

import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

interface ImagePreviewModalProps {
  isOpen: boolean
  images: string[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function ImagePreviewModal({ isOpen, images, currentIndex, onClose, onNext, onPrev }: ImagePreviewModalProps) {
  const [isMainImageLoaded, setIsMainImageLoaded] = useState(false)
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set())

  // Reset loading state when modal opens or image changes
  useEffect(() => {
    if (isOpen) {
      setIsMainImageLoaded(false)
    }
  }, [isOpen, currentIndex])

  // Progressive preloading with delay
  useEffect(() => {
    if (!isOpen || images.length <= 1) return

    const preloadWithDelay = (index: number, delay: number) => {
      setTimeout(() => {
        if (isOpen && !preloadedImages.has(index)) {
          setPreloadedImages(prev => new Set(prev).add(index))
        }
      }, delay)
    }

    // Preload adjacent images first (immediate neighbors)
    if (currentIndex > 0) preloadWithDelay(currentIndex - 1, 200)
    if (currentIndex < images.length - 1) preloadWithDelay(currentIndex + 1, 200)
    
    // Then preload images 2 steps away
    if (currentIndex > 1) preloadWithDelay(currentIndex - 2, 800)
    if (currentIndex < images.length - 2) preloadWithDelay(currentIndex + 2, 800)
    
    // Finally preload the rest with longer delays
    for (let i = 0; i < images.length; i++) {
      if (Math.abs(i - currentIndex) > 2) {
        preloadWithDelay(i, 1500 + Math.abs(i - currentIndex) * 300)
      }
    }
  }, [currentIndex, isOpen, images.length, preloadedImages])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          if (images.length > 1) onPrev()
          break
        case 'ArrowRight':
          if (images.length > 1) onNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onNext, onPrev, images.length])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-gray-900 bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 shadow-lg"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 z-10 bg-gray-900 bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 z-10 bg-gray-900 bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 shadow-lg"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </>
        )}

        <div className="flex items-center justify-center w-full h-full px-16 py-16">
          <div className="relative max-w-full max-h-full">
            {/* Loading spinner for main image */}
            {!isMainImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-lg">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <Image
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Preview ${currentIndex + 1}`}
              width={800}
              height={600}
              className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
                isMainImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              priority={true}
              onLoad={() => setIsMainImageLoaded(true)}
              onError={() => setIsMainImageLoaded(true)}
            />
          </div>
          
          {/* Progressive lazy preloading */}
          {images.length > 1 && (
            <div className="hidden">
              {Array.from(preloadedImages).map((imageIndex) => (
                <Image
                  key={imageIndex}
                  src={images[imageIndex]}
                  alt={`Preload ${imageIndex + 1}`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="hidden"
                />
              ))}
            </div>
          )}
        </div>

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 bg-opacity-80 text-white px-4 py-2 rounded-full text-sm shadow-lg">
            {currentIndex + 1} / {images.length}
            {!isMainImageLoaded && (
              <span className="ml-2 text-xs text-gray-300">Loading...</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
