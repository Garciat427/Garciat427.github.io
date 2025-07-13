"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Zap, Award, Server } from "lucide-react"

export function AboutSection() {
  return (
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
                city&apos;s thriving tech ecosystem. This change of scenery reinvigorated my passion for development and
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
                I believe in lifting others as I climb. Throughout my career, I&apos;ve mentored junior developers, sharing
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
              Today, I&apos;m focused on pushing the boundaries of web development through AI integration, security-first
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
  )
} 