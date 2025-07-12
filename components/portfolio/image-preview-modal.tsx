"use client"

import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImagePreviewModalProps {
  isOpen: boolean
  images: string[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function ImagePreviewModal({ isOpen, images, currentIndex, onClose, onNext, onPrev }: ImagePreviewModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
        >
          <X className="h-6 w-6 text-white" />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </>
        )}

        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Preview ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  )
}
