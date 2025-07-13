"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Code, Server, Zap, Award, Linkedin, Globe, ExternalLink } from "lucide-react"
import { Navigation } from "@/components/portfolio/navigation"
import { ImagePreviewModal } from "@/components/portfolio/image-preview-modal"
import { HeroSection } from "@/components/portfolio/hero-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { workExperience } from "@/lib/data/work-experience"
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
    setImagePreview({
      isOpen: true,
      images,
      currentIndex: startIndex,
    })
  }

  const closeImagePreview = () => {
    setImagePreview({
      isOpen: false,
      images: [],
      currentIndex: 0,
    })
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

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 section-dark bg-grid-pattern-fine texture-overlay">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From engineering diploma to full-stack innovator — discover the journey that shaped my passion for
              creating meaningful digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🎓</span>
                  </div>
                  The Foundation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  My journey began at <strong>Seneca Polytechnic</strong>, where I earned my diploma in Electrical and
                  Computer Engineering. While I mastered the fundamentals of systems and hardware, I discovered my true
                  passion lay in the creative possibilities of code — building applications that could solve real
                  problems and create meaningful user experiences.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🚀</span>
                  </div>
                  The Spark
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  At the <strong>University of Toronto St. George</strong>, I dove deep into web development, learning
                  the craft that would define my career. It was here that I honed my skills in modern web technologies
                  and discovered my entrepreneurial spirit. This led me to found <strong>FrontEndonFront</strong>, my
                  consulting company, where I could combine technical expertise with creative problem-solving for
                  clients across various industries.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">🏔️</span>
                  </div>
                  The Adventure
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  In 2021, I made the bold move to <strong>Vancouver</strong> — drawn by the mountains, ocean, and the
                  city's thriving tech ecosystem. This change of scenery reinvigorated my passion for development and
                  opened new opportunities to work with innovative companies while staying connected to nature. The
                  Pacific Northwest became the perfect backdrop for my continued growth as a developer.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 group-hover:text-emerald-700 transition-colors duration-300">
                  <Code className="h-5 w-5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                  Technical Specialization
                </h3>
                <div className="space-y-3">
                  <div className="hover:bg-emerald-50 p-2 rounded-lg transition-colors duration-200">
                    <p className="font-medium text-gray-800 mb-2">MERN Stack Mastery</p>
                    <p className="text-sm text-gray-600">
                      MongoDB, Express.js, React, Node.js — building scalable, modern web applications from database to
                      deployment.
                    </p>
                  </div>
                  <div className="hover:bg-emerald-50 p-2 rounded-lg transition-colors duration-200">
                    <p className="font-medium text-gray-800 mb-2">AI Development & Integration</p>
                    <p className="text-sm text-gray-600">
                      Implementing intelligent features, machine learning models, and secure AI integrations for
                      next-generation applications.
                    </p>
                  </div>
                  <div className="hover:bg-emerald-50 p-2 rounded-lg transition-colors duration-200">
                    <p className="font-medium text-gray-800 mb-2">Security-First Approach</p>
                    <p className="text-sm text-gray-600">
                      Developing robust security protocols, privacy-conscious solutions, and secure data handling
                      practices.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 group-hover:text-blue-700 transition-colors duration-300">
                  <Zap className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  Core Strengths
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Fast-Paced Learner</span>
                  </div>
                  <div className="flex items-center gap-2 hover:bg-green-50 p-2 rounded-lg transition-colors duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Great Team Player</span>
                  </div>
                  <div className="flex items-center gap-2 hover:bg-purple-50 p-2 rounded-lg transition-colors duration-200">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Junior Mentor</span>
                  </div>
                  <div className="flex items-center gap-2 hover:bg-orange-50 p-2 rounded-lg transition-colors duration-200">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Creative Problem Solver</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 group-hover:text-purple-700 transition-colors duration-300">
                  <Award className="h-5 w-5 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  Leadership & Mentorship
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  I believe in lifting others as I climb. Throughout my career, I've mentored junior developers, sharing
                  knowledge and fostering growth within development teams. My collaborative approach and ability to
                  break down complex concepts has helped numerous developers accelerate their learning journey.
                </p>
              </Card>
            </div>
          </div>

          {/* Why Work With Me Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Work With Me?</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Building modern, scalable web applications with cutting-edge technologies and a strong engineering
                foundation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                    <Code className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    Technical Expertise
                  </h4>
                </div>

                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3 hover:text-emerald-600 transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Expert in the MERN stack (MongoDB, Express, React, Node.js)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-emerald-600 transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Strong with TypeScript and PostgreSQL</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-emerald-600 transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Committed to clean code and maintainable architecture
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    Innovation Focus
                  </h4>
                </div>

                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3 hover:text-blue-600 transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Early adopter of AI-assisted development tools</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-blue-600 transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Skilled at building and scaling SaaS platforms</span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-blue-600 transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">Experienced in leading full development lifecycles</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                    <Server className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    Scalability
                  </h4>
                </div>

                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3 hover:text-purple-600 transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Architected systems for high-traffic, high-performance needs
                    </span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-purple-600 transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Leveraged Docker and CI/CD pipelines for efficient deployment
                    </span>
                  </li>
                  <li className="flex items-start gap-3 hover:text-purple-600 transition-colors duration-200">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Implemented scalable infrastructure with load balancing and auto-scaling
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Current Focus */}
          <div className="text-center">
            <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-gray-900 to-gray-800 text-white">
              <h3 className="text-2xl font-bold mb-4">Current Focus</h3>
              <p className="text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                Today, I'm focused on pushing the boundaries of web development through AI integration, security-first
                development practices, and building scalable solutions that make a real impact. Whether working with
                startups or established companies, I bring the same passion for innovation and commitment to excellence
                that has driven my journey from day one.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-emerald-600 text-white px-4 py-2">MERN Stack</Badge>
                <Badge className="bg-blue-600 text-white px-4 py-2">AI Development</Badge>
                <Badge className="bg-purple-600 text-white px-4 py-2">Security</Badge>
                <Badge className="bg-orange-600 text-white px-4 py-2">Mentorship</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <ProjectsSection openImagePreview={openImagePreview} />

      {/* Work Experience Section */}
      <section id="experience" className="py-20 px-6 section-dark bg-grid-pattern-fine texture-overlay">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600">My journey through innovative companies and impactful projects</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-green-400 to-teal-400"></div>

            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <div key={index} className="relative flex items-start gap-8">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FrontEndonFront Consulting Section */}
      <section id="consulting" className="py-20 px-6 bg-gray-900">
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
                Since founding FrontEndonFront in 2019, I've had the privilege of partnering with over 50 satisfied
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Build the Future Together</h2>
            <p className="text-xl text-gray-600 mb-4">
              I'm actively looking for full-time opportunities where I can contribute to ambitious teams and deliver
              high-impact web applications.
            </p>
            <p className="text-lg text-gray-600 mb-12">
              Let's connect and talk about how I can bring value to your engineering team.
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
