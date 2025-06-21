

import { useState, useEffect, useRef } from "react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { CheckCircle, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import StudentProjects from "@/components/funding/StudentProjects"
import SupportedStartups from "@/components/funding/SupportedStartups"

const Funding = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const modernFundingPrograms = [
    {
      title: "SSIP Grant",
      description: "Supporting student-led innovations with comprehensive funding and mentorship.",
      amount: "Up to ₹2.5 Lakhs",
      backgroundColor: "#ADD8E6",
      features: ["Student startup support", "Innovation development", "Prototype funding", "Mentorship included"],
    },
    {
      title: "Nodal Grant",
      description: "Funding for established startups to scale operations and expand market reach.",
      amount: "Up to ₹30 Lakhs",
      backgroundColor: "#90EE90",
      features: ["Scaling support", "Market expansion", "Operational growth", "Strategic guidance"],
    },
    {
      title: "IPR Grant",
      description: "Support for patent filing and intellectual property protection initiatives.",
      amount: "Up to ₹5 Lakhs",
      backgroundColor: "#FFDAB9",
      features: ["Patent filing support", "IP protection", "Legal assistance", "Commercialization help"],
    },
  ]

  const testimonials = [
    {
      quote:
        "The SSIP Grant helped us transform our college project into a viable startup. The mentorship was invaluable.",
      author: "Priya Sharma",
      company: "TechInnovate Solutions",
      grant: "SSIP Grant Recipient",
    },
    {
      quote: "With the Nodal Grant, we scaled from 5 to 50 employees and expanded to three new cities.",
      author: "Rajesh Kumar",
      company: "GreenTech Ventures",
      grant: "Nodal Grant Recipient",
    },
    {
      quote: "The IPR Grant enabled us to protect our innovative algorithm and secure international patents.",
      author: "Dr. Anita Patel",
      company: "AI Research Labs",
      grant: "IPR Grant Recipient",
    },
    {
      quote: "The comprehensive support system helped us navigate the complex startup ecosystem successfully.",
      author: "Vikram Singh",
      company: "HealthTech Innovations",
      grant: "SSIP Grant Recipient",
    },
  ]

  const fundingPrograms = [
    {
      title: "SSIP Grant",
      description: "Student Startup and Innovation Policy grants for student entrepreneurs.",
      amount: "Up to ₹2.5 Lakhs",
      color: "border-guiitar-primary",
      eligibility: [
        "Current students or recent graduates (within 3 years)",
        "Innovative product or service idea with market potential",
        "Working prototype or proof of concept",
        "Team of at least 2 members",
      ],
      process: [
        "Submit application form with project proposal",
        "Initial screening by GUIITAR COUNCIL team",
        "Pitch presentation to selection committee",
        "Due diligence and documentation",
        "Fund disbursement in milestone-based tranches",
      ],
    },
    {
      title: "Nodal Grant",
      description: "Funding support for established startups looking to scale their operations.",
      amount: "Up to ₹30 Lakhs",
      color: "border-guiitar-secondary",
      eligibility: [
        "Registered startup with operational history of at least 1 year",
        "Innovative product or service with validated market traction",
        "Clear growth strategy and expansion plans",
        "Revenue-generating business model",
      ],
      process: [
        "Submit detailed business plan and scaling strategy",
        "Financial assessment and business model evaluation",
        "Due diligence by external experts",
        "Presentation to investment committee",
        "Milestone-based fund disbursement with monitoring",
      ],
    },
    {
      title: "IPR Grant",
      description: "Support for intellectual property protection including patents, trademarks, and copyrights.",
      amount: "Up to ₹5 Lakhs",
      color: "border-guiitar-accent",
      eligibility: [
        "Novel invention, design, or creative work with commercial potential",
        "Clear IP ownership or assignment documentation",
        "Detailed plan for IP commercialization",
        "Commitment to share IP benefits with GUIITAR COUNCIL",
      ],
      process: [
        "Submit detailed IP description and commercialization plan",
        "Initial novelty assessment by IP experts",
        "IP strategy development and documentation",
        "Filing of appropriate IP protection documents",
        "Monitoring and support throughout IP prosecution process",
      ],
    },
  ]

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="pt-20 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Funding Header */}
        <section className="bg-guiitar-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Funding Opportunities</h1>
              <p className="text-lg md:text-xl opacity-90">
              Access capital to fuel your innovation journey through our diverse funding programs designed for entrepreneurs at various stages.
              </p>
            </div>
          </div>
        </section>

        {/* Modern Funding Programs Section */}
        <section ref={sectionRef} className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Funding Programs</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                 GUIITAR COUNCIL offers various funding options to support innovators and entrepreneurs at different stages of their journey. Our programs are designed to provide not just financial support, but also mentorship and resources to ensure your success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {modernFundingPrograms.map((program, index) => (
                  <div
                    key={index}
                    className={`transform transition-all duration-700 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 overflow-hidden bg-white">
                      <div className="h-2" style={{ backgroundColor: program.backgroundColor }} />
                      <CardContent className="p-8">
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                          <p className="text-gray-600 mb-4">{program.description}</p>
                          <div
                            className="inline-block px-6 py-3 rounded-full text-gray-800 font-bold text-lg"
                            style={{ backgroundColor: program.backgroundColor }}
                          >
                            {program.amount}
                          </div>
                        </div>

                        <div className="space-y-3 mb-8">
                          {program.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <div
                                className="w-2 h-2 rounded-full mr-3"
                                style={{ backgroundColor: program.backgroundColor }}
                              />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 font-semibold">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  Explore All Funding Options
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
                <p className="text-lg text-gray-600">
                  Hear from entrepreneurs who have transformed their ideas into successful ventures with our funding
                  support.
                </p>
              </div>

              <div className="relative">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <div className="text-center">
                      <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                      <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                        "{testimonials[currentTestimonial].quote}"
                      </blockquote>
                      <div className="space-y-2">
                        <p className="font-bold text-lg text-gray-900">{testimonials[currentTestimonial].author}</p>
                        <p className="text-gray-600">{testimonials[currentTestimonial].company}</p>
                        <p className="text-sm text-blue-600 font-medium">{testimonials[currentTestimonial].grant}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Fund Your Innovation?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join hundreds of successful entrepreneurs who have received funding and support through our programs.
                Start your application today and take the first step towards turning your vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                  Start Application
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Funding Overview */}
     

        {/* Student Projects Section */}
        <StudentProjects />

        {/* Supported Startups Section */}
        <SupportedStartups />

        {/* Additional Resources */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Additional Resources</h2>

              <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Mentorship & Support</h3>
                <p className="text-gray-700 mb-6">
                  Beyond funding, we provide comprehensive support to help you succeed in your entrepreneurial journey:
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Business model development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Market research assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Product development guidance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Legal and regulatory compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Networking with industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-guiitar-primary mr-2 h-5 w-5 mt-0.5" />
                    <span className="text-gray-700">Investor pitch preparation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Funding FAQs</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">How long does the application process take?</h4>
                    <p className="text-gray-700">
                      The typical application process takes 4-6 weeks from initial submission to final decision. This
                      includes screening, evaluation, presentations, and due diligence.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Can I apply for multiple funding programs?</h4>
                    <p className="text-gray-700">
                      Yes, you can apply for multiple programs if you meet the eligibility criteria for each. However,
                      we recommend focusing on the most suitable program for your current stage.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Is equity participation required?</h4>
                    <p className="text-gray-700">
                      SSIP and IPR grants do not require equity participation. For Nodal grants, a small equity stake
                      (typically 2-5%) may be requested depending on the funding amount and business valuation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Funding
