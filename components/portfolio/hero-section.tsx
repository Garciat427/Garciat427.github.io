"use client"

import { Button } from "@/components/ui/button"
import { Download, Star, Award, Clipboard, Code, Coffee } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  const stats = [
    {
      number: "5+",
      label: "Years Experience",
      color: "text-emerald-600",
      icon: <Award className="h-8 w-8 md:h-10 md:w-10" />,
      iconColor: "text-emerald-600",
    },
    {
      number: "15+",
      label: "Projects Completed",
      color: "text-green-600",
      icon: <Clipboard className="h-8 w-8 md:h-10 md:w-10" />,
      iconColor: "text-green-600",
    },
    {
      number: "1M+",
      label: "Lines of Code",
      color: "text-teal-600",
      icon: <Code className="h-8 w-8 md:h-10 md:w-10" />,
      iconColor: "text-teal-600",
    },
    {
      number: "1000+",
      label: "Cups of Coffee",
      color: "text-lime-600",
      icon: <Coffee className="h-8 w-8 md:h-10 md:w-10" />,
      iconColor: "text-lime-600",
    },
  ]

  return (
    <section className="pt-32 pb-20 px-6 hero-gradient bg-grid-pattern texture-overlay">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Star className="h-4 w-4 text-yellow-500 fill-current" aria-hidden="true" />
          <span className="text-sm text-gray-600">Trusted by startups and enterprises worldwide</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">
            Troy Garcia
          </span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Welcome to My Portfolio</h2>

        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Full-stack software engineer specializing in MERN stack development, AI integration, and building scalable web
          applications that drive business growth.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-20 mb-12 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-pointer">
              <div className="flex items-center justify-center gap-6 mb-4 transition-all duration-300 group-hover:scale-110">
                <div
                  className={`${stat.iconColor} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
                >
                  {stat.icon}
                </div>
                <span
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color} transition-all duration-300 group-hover:scale-105`}
                >
                  {stat.number}
                </span>
              </div>
              <p className="text-gray-600 text-sm md:text-base font-medium transition-colors duration-300 group-hover:text-gray-800">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white px-8 py-3 text-lg"
            aria-label="Navigate to projects section"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg bg-transparent"
            asChild
          >
            <a href="https://cdn.frontendonfront.com/TroyGarcia-Resume-Online.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Troy Garcia's resume (PDF)">
              <Download className="mr-2 h-5 w-5" aria-hidden="true" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
