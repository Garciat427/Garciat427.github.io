"use client"
import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Github, ExternalLink, ZoomIn } from "lucide-react"
import { currentProjects, pastProjects, type Project } from "@/lib/data/projects"
import Image from "next/image"

interface ProjectsSectionProps {
  openImagePreview: (images: string[], startIndex?: number) => void
}

// Lazy loading image component
const LazyImage = ({
  src,
  alt,
  width,
  height,
  className,
  onClick,
  children,
}: {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  onClick?: () => void
  children?: React.ReactNode
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} className={`relative ${className}`} onClick={onClick}>
      {isInView ? (
        <>
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-gray-300 border-t-emerald-500 rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 group-hover:scale-[1.02] ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            quality={85}
          />
          {children}
        </>
      ) : (
        <div className="w-full h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
    </div>
  )
}

export function ProjectsSection({ openImagePreview }: ProjectsSectionProps) {
  const workProjects = pastProjects
    .filter((project) => project.type === "Work Project")
    .sort((a, b) => {
      const yearA = Number.parseInt(a.year.split("–")[0] || a.year)
      const yearB = Number.parseInt(b.year.split("–")[0] || b.year)
      return yearB - yearA
    })

  const personalProjects = pastProjects
    .filter((project) => project.type === "Personal Project")
    .sort((a, b) => {
      const yearA = Number.parseInt(a.year.split("–")[0] || a.year)
      const yearB = Number.parseInt(b.year.split("–")[0] || b.year)
      return yearB - yearA
    })

  const ProjectCard = ({ project, colorScheme }: { project: Project; colorScheme: string }) => {
    const IconComponent = project.icon
    return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <div
            className={`w-12 h-12 bg-gradient-to-br ${colorScheme} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
          >
            <IconComponent className="h-6 w-6" />
          </div>
          <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
            {project.type}
          </Badge>
        </div>
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <Badge variant="outline" className="border-gray-200 text-gray-700 bg-gray-50">
            {project.year}
          </Badge>
        </div>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
              {tech}
            </Badge>
          ))}
          {project.stack.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
              +{project.stack.length - 3}
            </Badge>
          )}
        </div>
        <div className="flex gap-2 mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${colorScheme} rounded-lg flex items-center justify-center`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </div>
                  {project.title}
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                    {project.type}
                  </Badge>
                </DialogTitle>
                <DialogDescription className="text-left pt-4">{project.fullDescription}</DialogDescription>
              </DialogHeader>

              {/* Image Gallery */}
              {project.images && project.images.length > 0 && (
                <div className="my-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <ZoomIn className="h-4 w-4" />
                    Screenshots
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <LazyImage
                        key={index}
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} Screenshot ${index + 1}`}
                        width={400}
                        height={300}
                        className="group cursor-pointer"
                        onClick={() => openImagePreview(project.images, index)}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                          <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                      </LazyImage>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Click images to view in full size</p>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-200 text-gray-700 bg-gray-50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 pt-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild className="bg-gradient-to-r from-emerald-600 to-green-700">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
          {project.demo && (
            <Button variant="ghost" size="sm" asChild className="hover:bg-gray-50">
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  )}

  return (
    <section id="projects" className="py-20 px-6 section-dark bg-grid-pattern-fine texture-overlay">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Discover powerful applications designed to solve real-world problems</p>
        </div>

        {/* Current Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
            <h3 className="text-2xl font-bold text-gray-900">Current Projects</h3>
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">In Development</Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                colorScheme="from-emerald-100 to-green-100 text-emerald-600"
              />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-900">Personal Projects</h3>
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">Side Projects</Badge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} colorScheme="from-blue-100 to-indigo-100 text-blue-600" />
            ))}
          </div>
        </div>

        {/* Work Projects */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <h3 className="text-2xl font-bold text-gray-900">Work Projects</h3>
            <Badge className="bg-purple-100 text-purple-700 border-purple-200">Professional</Badge>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {workProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                colorScheme="from-purple-100 to-indigo-100 text-purple-600"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
