"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

interface NavigationProps {
  scrollToSection: (sectionId: string) => void
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-paper-light/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TG</span>
          </div>
          <span className="font-semibold text-gray-900">Troy Garcia</span>
        </div>
        
        {/* Desktop Navigation */}
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

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-paper-light/95 backdrop-blur-md border-b border-gray-200 animate-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <button
              onClick={() => handleMobileNavClick("about")}
              className="text-gray-600 hover:text-emerald-600 transition-colors text-left py-2"
            >
              About
            </button>
            <button
              onClick={() => handleMobileNavClick("projects")}
              className="text-gray-600 hover:text-emerald-600 transition-colors text-left py-2"
            >
              Projects
            </button>
            <button
              onClick={() => handleMobileNavClick("experience")}
              className="text-gray-600 hover:text-emerald-600 transition-colors text-left py-2"
            >
              Experience
            </button>
            <button
              onClick={() => handleMobileNavClick("consulting")}
              className="text-gray-600 hover:text-emerald-600 transition-colors text-left py-2"
            >
              Consulting
            </button>
            <button
              onClick={() => handleMobileNavClick("contact")}
              className="text-gray-600 hover:text-emerald-600 transition-colors text-left py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
