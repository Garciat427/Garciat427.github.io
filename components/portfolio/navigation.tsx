"use client"

import { Button } from "@/components/ui/button"

interface NavigationProps {
  scrollToSection: (sectionId: string) => void
}

export function Navigation({ scrollToSection }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full bg-paper-light/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TG</span>
          </div>
          <span className="font-semibold text-gray-900">Troy Garcia</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("consulting")}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            Consulting
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            Contact
          </button>
        </div>
        <Button variant="outline" className="md:hidden bg-transparent">
          Menu
        </Button>
      </div>
    </nav>
  )
}
