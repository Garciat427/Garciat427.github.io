"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Code, Server, Zap, Linkedin, ExternalLink } from "lucide-react"
import { Navigation } from "@/components/portfolio/navigation"
import { ImagePreviewModal } from "@/components/portfolio/image-preview-modal"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { workExperience } from "@/lib/data/projects"
import Image from "next/image"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [imagePreview, setImagePreview] = useState<{ isOpen: boolean; images: string[]; currentIndex: number }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const openImagePreview = (images: string[], startIndex = 0) => {
    setImagePreview({ isOpen: true, images, currentIndex: startIndex })
  }

  const closeImagePreview = () => {
    setImagePreview({ isOpen: false, images: [], currentIndex: 0 })
  }

  const nextImage = () => {
    setImagePreview((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }))
  }

  const prevImage = () => {
    setImagePreview((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? prev.images.length - 1 : prev.currentIndex - 1,
    }))
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-paper-light">
      <ImagePreviewModal
        isOpen={imagePreview.isOpen}
        images={imagePreview.images}
        currentIndex={imagePreview.currentIndex}
        onClose={closeImagePreview}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <Navigation scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ProjectsSection openImagePreview={openImagePreview} />

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-6 section-dark bg-grid-pattern-fine texture-overlay">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600">My journey through innovative companies and impactful projects</p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-green-400 to-teal-400"></div>

            <div className="space-y-12 md:space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="relative">
                  {/* Desktop layout */}
                  <div className="hidden md:flex md:items-start md:gap-8">
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-full ${job.color} flex items-center justify-center text-2xl shadow-lg border-4 border-white`}
                      >
                        {job.icon}
                      </div>
                      {job.current && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>

                    <Card
                      className={`flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${job.borderColor} bg-white/90 backdrop-blur-sm`}
                    >
                      <div className="p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                            <p className="text-lg font-semibold text-emerald-700">{job.company}</p>
                            <p className="text-sm text-gray-500">{job.location}</p>
                          </div>
                          <Badge
                            variant="outline"
                            className={`${job.borderColor} ${job.current ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-gray-50 text-gray-700"} whitespace-nowrap`}
                          >
                            {job.period}
                          </Badge>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                          <ul className="space-y-1">
                            {job.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                <span className="text-emerald-500 mt-1.5 flex-shrink-0">•</span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tech Stack:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.techStack.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Mobile layout */}
                  <Card
                    className={`md:hidden hover:shadow-xl transition-all duration-300 border-2 ${job.borderColor} bg-white/90 backdrop-blur-sm relative`}
                  >
                    {/* Top-left icon */}
                    <div className="absolute -top-3 -left-3 z-10">
                      <div
                        className={`w-12 h-12 rounded-full ${job.color} flex items-center justify-center text-lg shadow-lg border-3 border-white`}
                      >
                        {job.icon}
                      </div>
                      {job.current && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6 pt-8">
                      <div className="flex flex-col gap-2 mb-4">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
                            <p className="text-base font-semibold text-emerald-700">{job.company}</p>
                            <p className="text-sm text-gray-500">{job.location}</p>
                          </div>
                          <Badge
                            variant="outline"
                            className={`${job.borderColor} ${job.current ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-gray-50 text-gray-700"} whitespace-nowrap text-xs`}
                          >
                            {job.period}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">{job.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Responsibilities:</h4>
                        <ul className="space-y-1">
                          {job.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-emerald-500 mt-1.5 flex-shrink-0">•</span>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.techStack.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FrontEndonFront Consulting Section */}
      <section id="consulting" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex flex-col items-center mb-8">
              <div className="mb-4">
                <Image
                  src="/logo.svg"
                  alt="FrontEndonFront Logo"
                  width={80}
                  height={80}
                  className="mx-auto shadow-lg rounded-2xl"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">FrontEndonFront</h2>
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>🚀</span>
                <span>Delivering High-Quality, Business-Driven Results Since 2019</span>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Transform Your Business With Custom Software Solutions
              </h3>

              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Since founding FrontEndonFront in 2019, I&apos;ve had the privilege of partnering with over 50 satisfied
                clients to transform their digital visions into reality. What started as a passion project has evolved
                into a trusted consulting practice specializing in modern web development and scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="flex items-center justify-center gap-2 text-green-400">
                <span>✓</span>
                <span className="text-sm">Free consultation</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-400">
                <span>✓</span>
                <span className="text-sm">5+ years experience</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-400">
                <span>✓</span>
                <span className="text-sm">North America wide</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-400">
                <span>✓</span>
                <span className="text-sm">Rapid delivery</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">50+</div>
              <p className="text-gray-300 text-sm">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">6</div>
              <p className="text-gray-300 text-sm">Years in Business</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-teal-400 mb-2">100+</div>
              <p className="text-gray-300 text-sm">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lime-400 mb-2">15+</div>
              <p className="text-gray-300 text-sm">Industries Served</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-gray-800 border-gray-700 text-center hover:bg-gray-750 transition-all duration-300 group hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Code className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                Full-Stack Development
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                End-to-end web application development using modern MERN stack technologies. From concept to deployment,
                I handle every aspect of your software development lifecycle.
              </p>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700 text-center hover:bg-gray-750 transition-all duration-300 group hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                AI Integration
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Implementing AI-powered features and intelligent automation into existing platforms. Stay ahead of the
                curve with cutting-edge AI solutions tailored to your business needs.
              </p>
            </Card>

            <Card className="p-6 bg-gray-800 border-gray-700 text-center hover:bg-gray-750 transition-all duration-300 group hover:scale-105 cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Server className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                SaaS Solutions
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Building scalable Software-as-a-Service platforms with modern architecture. From MVP to
                enterprise-scale, I create solutions that grow with your business.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                <a href="https://frontendonfront.com" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/logo.svg"
                    alt="FrontEndonFront Logo"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Visit FrontEndonFront
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 section-dark bg-grid-pattern-fine texture-overlay">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let&apos;s Build the Future Together</h2>
            <p className="text-xl text-gray-600 mb-4">
              I&apos;m actively looking for full-time opportunities where I can contribute to ambitious teams and deliver
              high-impact web applications.
            </p>
            <p className="text-lg text-gray-600 mb-12">
              Let&apos;s connect and talk about how I can bring value to your engineering team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white px-16 py-6 text-xl font-semibold w-full sm:w-auto group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[280px]"
              asChild
            >
              <a href="https://cdn.frontendonfront.com/TroyGarcia-Resume.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-6 text-xl font-semibold w-full sm:w-auto group transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[280px]"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/troy-garcia-software-developer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                View LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 section-dark bg-grid-pattern-fine texture-overlay">
        <div className="container mx-auto text-center">
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Troy Garcia. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 