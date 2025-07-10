"use client"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Calendar, User, Search, Eye, Tag, Download, ArrowLeft, ChevronRight } from "lucide-react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

// Updated Resources data with filled titles
const resources = [
  {
    id: 1,
    title: "",
    description: "Comprehensive guidelines for Student Startup and Innovation Policy 2.0 implementation",
    category: "SSIP 2.0 Guidelines",
    type: "document",
    uploadDate: "2025-06-17",
    uploadedBy: "GUIITAR Council",
    tags: ["ssip", "startup", "innovation", "policy", "guidelines"],
    slug: "ssip-2-0-guidelines",
    fullDescription:
      "The Student Startup and Innovation Policy (SSIP) 2.0 is a comprehensive framework designed to foster entrepreneurship and innovation among students in educational institutions. This document provides detailed guidelines for implementation, covering policy objectives, institutional framework, student support mechanisms, and evaluation criteria.",
    pdfUrl: "/pdfs/ssip-2-0-guidelines.pdf",
  },
  {
    id: 2,
    title: "",
    description: "Official guidelines for nodal institutes under GUIITAR Council framework",
    category: "Nodal Institute Guidelines",
    type: "document",
    uploadDate: "2024-09-26",
    uploadedBy: "GUIITAR Council",
    tags: ["nodal", "institute", "guidelines", "framework"],
    slug: "nodal-institute-guidelines",
    fullDescription:
      "These guidelines outline the roles, responsibilities, and operational procedures for nodal institutes operating under the GUIITAR Council framework. It covers institutional setup, governance structure, reporting mechanisms, and quality assurance protocols.",
    pdfUrl: "/pdfs/nodal-institute-guidelines.pdf",
  },
  {
    id: 3,
    title: "",
    description: "Intellectual Property Rights guidelines for startups and innovators",
    category: "IPR Guidelines",
    type: "document",
    uploadDate: "2024-09-26",
    uploadedBy: "GUIITAR Council",
    tags: ["ipr", "intellectual-property", "patent", "copyright", "legal"],
    slug: "ipr-guidelines",
    fullDescription:
      "Comprehensive guidelines covering intellectual property rights for startups and innovators. This document provides detailed information on patents, copyrights, trademarks, and trade secrets, helping entrepreneurs protect their innovations and navigate the complex landscape of intellectual property law.",
    pdfUrl: "/pdfs/ipr-guidelines.pdf",
  },
  {
    id: 4,
    title: "",
    description: "Official policies and procedures of GUIITAR Council operations",
    category: "GUIITAR Council Policy",
    type: "document",
    uploadDate: "2024-09-26",
    uploadedBy: "GUIITAR Council",
    tags: ["policy", "procedures", "governance", "council"],
    slug: "guiitar-council-policy",
    fullDescription:
      "Official policies and procedures governing GUIITAR Council operations. This comprehensive document outlines the organizational structure, decision-making processes, operational guidelines, and strategic objectives of the council.",
    pdfUrl: "/pdfs/guiitar-council-policy.pdf",
  },
  {
    id: 5,
    title: "",
    description:
      "Technology Readiness Level, Manufacturing Readiness Level, and Innovation Readiness Level assessment framework",
    category: "TRL, MRL, IRL Framework",
    type: "document",
    uploadDate: "2024-09-26",
    uploadedBy: "GUIITAR Council",
    tags: ["trl", "mrl", "irl", "readiness-level", "assessment", "technology"],
    slug: "trl-mrl-irl-framework",
    fullDescription:
      "Comprehensive framework for assessing Technology Readiness Level (TRL), Manufacturing Readiness Level (MRL), and Innovation Readiness Level (IRL). This tool helps evaluate the maturity of technologies and innovations at different stages of development.",
    pdfUrl: "/pdfs/trl-mrl-irl-framework.pdf",
  },
  {
    id: 6,
    title: "",
    description: "Financial literacy and management guide for non-finance professionals and entrepreneurs",
    category: "Finance for Non-Finance",
    type: "document",
    uploadDate: "2024-09-26",
    uploadedBy: "GUIITAR Council",
    tags: ["finance", "financial-literacy", "accounting", "budgeting", "entrepreneurs"],
    slug: "finance-for-non-finance",
    fullDescription:
      "A comprehensive guide to financial literacy and management specifically designed for non-finance professionals and entrepreneurs. Covers essential topics including budgeting, cash flow management, financial planning, and basic accounting principles.",
    pdfUrl: "/pdfs/finance-for-non-finance.pdf",
  },
  {
    id: 7,
    title: "",
    description: "Complete manuals and guides for operating and utilizing maker lab facilities",
    category: "Maker Lab Manuals",
    type: "document",
    uploadDate: "2024-09-26",
    uploadedBy: "GUIITAR Council",
    tags: ["maker-lab", "manual", "fabrication", "prototyping", "equipment"],
    slug: "maker-lab-manuals",
    fullDescription:
      "Complete operational manuals for maker lab facilities, including equipment usage guidelines, safety protocols, project management procedures, and best practices for prototyping and fabrication activities.",
    pdfUrl: "/pdfs/maker-lab-manuals.pdf",
  },
  {
    id: 8,
    title: "",
    description: "Collection of recorded training webinars on entrepreneurship and innovation",
    category: "Training Webinar Videos",
    type: "video",
    uploadDate: "2024-11-07",
    uploadedBy: "GUIITAR Council",
    tags: ["webinar", "training", "video", "entrepreneurship", "innovation"],
    slug: "training-webinar-videos",
    fullDescription:
      "Curated collection of recorded training webinars covering various aspects of entrepreneurship and innovation. These sessions feature expert speakers, case studies, and practical insights for aspiring entrepreneurs and innovators.",
    pdfUrl: "/videos/training-webinar-videos.mp4",
  },
  {
    id: 9,
    title: "",
    description: "Curated problem statements for innovation challenges and startup opportunities",
    category: "Problem Statements",
    type: "document",
    uploadDate: "2024-12-10",
    uploadedBy: "GUIITAR Council",
    tags: ["problem-statements", "challenges", "innovation", "opportunities"],
    slug: "problem-statements",
    fullDescription:
      "Carefully curated collection of problem statements designed to inspire innovation and identify startup opportunities. These challenges span various sectors and provide a foundation for developing innovative solutions.",
    pdfUrl: "/pdfs/problem-statements.pdf",
  },
  {
    id: 10,
    title: "",
    description: "Detailed Project Report template and guidelines specifically designed for student projects",
    category: "DPR for Students",
    type: "document",
    uploadDate: "2024-09-26",
    uploadedBy: "GUIITAR Council",
    tags: ["dpr", "project-report", "students", "template", "academic"],
    slug: "dpr-for-students",
    fullDescription:
      "Comprehensive Detailed Project Report (DPR) template and guidelines specifically tailored for student projects. Includes formatting guidelines, content structure, evaluation criteria, and submission requirements.",
    pdfUrl: "/pdfs/dpr-for-students.pdf",
  },
  {
    id: 11,
    title: "",
    description: "Comprehensive collection of all GUIITAR Council policies and governance documents",
    category: "GUIITAR Council Policies",
    type: "document",
    uploadDate: "2024-12-10",
    uploadedBy: "GUIITAR Council",
    tags: ["policies", "governance", "council", "regulations", "framework"],
    slug: "guiitar-council-policies",
    fullDescription:
      "Complete collection of GUIITAR Council policies covering all aspects of governance, operations, and strategic initiatives. This comprehensive document serves as the primary reference for institutional policies and procedures.",
    pdfUrl: "/pdfs/guiitar-council-policies.pdf",
  },
  {
    id: 12,
    title: "",
    description: "Comprehensive guide to design thinking methodology for innovation and problem-solving",
    category: "Design Thinking",
    type: "document",
    uploadDate: "2024-09-26",
    uploadedBy: "GUIITAR Council",
    tags: ["design-thinking", "innovation", "methodology", "problem-solving", "creativity"],
    slug: "design-thinking",
    fullDescription:
      "A comprehensive guide to design thinking methodology, covering the five stages of the design thinking process: empathize, define, ideate, prototype, and test. This resource provides practical tools and techniques for innovation and creative problem-solving.",
    pdfUrl: "/pdfs/design-thinking.pdf",
  },
  {
    id: 13,
    title: "",
    description: "Guide to developing and validating business models for startups and enterprises",
    category: "Business Model",
    type: "document",
    uploadDate: "2024-12-10",
    uploadedBy: "GUIITAR Council",
    tags: ["business-model", "canvas", "strategy", "validation", "startup"],
    slug: "business-model",
    fullDescription:
      "Comprehensive guide to business model development, including business model canvas, value proposition design, customer development, and business model validation techniques. Essential resource for entrepreneurs and business strategists.",
    pdfUrl: "/pdfs/business-model.pdf",
  },
  {
    id: 14,
    title: "",
    description: "Essential resources and tools for aspiring entrepreneurs and startup founders",
    category: "Founder Starter Pack",
    type: "document",
    uploadDate: "2024-09-26",
    uploadedBy: "GUIITAR Council",
    tags: ["founder", "startup", "entrepreneur", "toolkit", "resources"],
    slug: "founder-starter-pack",
    fullDescription:
      "A comprehensive starter pack for aspiring entrepreneurs and startup founders, containing essential resources, templates, checklists, and guides to help launch and grow successful ventures. Covers everything from idea validation to scaling strategies.",
    pdfUrl: "/pdfs/founder-starter-pack.pdf",
  },
  {
    id: 15,
    title: "",
    description: "Research report on entrepreneurial intentions and attitudes among Indian students",
    category: "GUESSS India Report on Who Want to be an Entrepreneur",
    type: "document",
    uploadDate: "2024-11-01",
    uploadedBy: "GUIITAR Council",
    tags: ["guesss", "research", "entrepreneurship", "students", "india", "survey"],
    slug: "guesss-india-entrepreneur-report",
    fullDescription:
      "Comprehensive research report from the Global University Entrepreneurial Spirit Students' Survey (GUESSS) focusing on entrepreneurial intentions, attitudes, and behaviors among Indian university students. Provides valuable insights into the entrepreneurial ecosystem in Indian higher education.",
    pdfUrl: "/pdfs/guesss-india-entrepreneur-report.pdf",
  },
  {
    id: 16,
    title: "",
    description: "Visual showcase of GUIITAR Council's initiatives, success stories, and impact",
    category: "Coffee Table Book",
    type: "document",
    uploadDate: "2024-12-10",
    uploadedBy: "GUIITAR Council",
    tags: ["coffee-table", "showcase", "success-stories", "impact", "visual"],
    slug: "coffee-table-book",
    fullDescription:
      "A beautifully designed coffee table book showcasing GUIITAR Council's journey, initiatives, success stories, and impact on the entrepreneurial ecosystem in Gujarat. Features inspiring stories, photographs, and achievements of the council and its beneficiaries.",
    pdfUrl: "/pdfs/coffee-table-book.pdf",
  },
  {
    id: 17,
    title: "",
    description: "Comprehensive guide for implementing Atal Tinkering Lab programs and activities",
    category: "ATL Implementation Guide",
    type: "document",
    uploadDate: "2025-02-01",
    uploadedBy: "GUIITAR Council",
    tags: ["atl", "atal-tinkering-lab", "implementation", "guide", "activities"],
    slug: "atl-implementation-guide",
    fullDescription:
      "This comprehensive guide provides step-by-step instructions for implementing Atal Tinkering Lab programs and activities. It covers lab setup, equipment management, curriculum integration, and best practices for fostering innovation and creativity among students.",
    pdfUrl: "/pdfs/atl-implementation-guide.pdf",
  },
  {
    id: 18,
    title: "",
    description: "Innovation and Product Development Facilitation Center documentation and procedures",
    category: "IPFC Documentation",
    type: "document",
    uploadDate: "2024-12-30",
    uploadedBy: "GUIITAR Council",
    tags: ["ipfc", "innovation", "product-development", "facilitation", "center"],
    slug: "ipfc-documentation",
    fullDescription:
      "Complete documentation for Innovation and Product Development Facilitation Centers, including operational procedures, quality standards, resource management, and guidelines for supporting innovation projects and product development initiatives.",
    pdfUrl: "/pdfs/ipfc-documentation.pdf",
  },
]

const categories = [
  "All",
  "Guidelines",
  "Resource",
  "Policies",
  "Training Materials",
  "Templates",
  "Videos",
  "Reports",
  "Publications",
  "Assessment Tools",
]

// Category mapping for filtering
const categoryMapping = {
  Guidelines: [
    "SSIP 2.0 Guidelines",
    "ATL Implementation Guide",
    "IPFC Documentation",
    "Nodal Institute Guidelines",
    "IPR Guidelines",
  ],
  Policies: ["GUIITAR Council Policies", "GUIITAR Council Policy"],
  Resource: ["Problem Statements", "Founder Starter Pack"],
  "Training Materials": ["Finance for Non-Finance", "Training Webinar Videos", "Design Thinking"],
  Templates: ["DPR for Students", "Business Model"],
  Videos: ["Training Webinar Videos"],
  Reports: ["GUESSS India Report on Who Want to be an Entrepreneur"],
  Publications: ["Coffee Table Book"],
  "Assessment Tools": ["TRL, MRL, IRL Framework", "Maker Lab Manuals"],
}

export default function Resources() {
  const { slug } = useParams<{ slug?: string }>()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")

  // Check if we're viewing a specific resource
  const isDetailView = !!slug
  const currentResource = isDetailView ? resources.find((r) => r.slug === slug) : null

  // Enhanced filter function with category mapping
  const getFilteredResources = () => {
    return resources.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      let matchesCategory = false

      if (selectedCategory === "All") {
        matchesCategory = true
      } else if (categoryMapping[selectedCategory as keyof typeof categoryMapping]) {
        // Check if resource category is in the mapped categories
        matchesCategory = categoryMapping[selectedCategory as keyof typeof categoryMapping].includes(resource.category)
      } else {
        // For other categories, use exact match
        matchesCategory = resource.category === selectedCategory
      }

      return matchesSearch && matchesCategory
    })
  }

  // Filter resources for list view
  const filteredResources = getFilteredResources()

  // Sort resources
  const sortedResources = [...filteredResources].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
    }
    return a.title.localeCompare(b.title)
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const formatDateLong = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const handleResourceClick = (resourceSlug: string) => {
    navigate(`/resources/${resourceSlug}`)
  }

  const handleDownload = (resource: (typeof resources)[0]) => {
    const link = document.createElement("a")
    link.href = resource.pdfUrl
    link.download = `${resource.slug}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Resource Detail View
  if (isDetailView) {
    if (!currentResource) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <div className="pt-16 flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <div className="text-center">
              <FileText className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Resource Not Found</h1>
              <p className="text-gray-600 mb-6">The resource you're looking for doesn't exist.</p>
              <Button onClick={() => navigate("/resources")} className="bg-blue-600 hover:bg-blue-700 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Resources
              </Button>
            </div>
          </div>
          <Footer />
        </div>
      )
    }

    const relatedResources = resources
      .filter((r) => r.id !== currentResource.id && r.category === currentResource.category)
      .slice(0, 3)

    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16 max-w-7xl mx-auto px-4 py-8">
          {/* Enhanced Breadcrumbs */}
          <div className="mb-8 mt-7">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-gray-600" />
                <Badge
                  className="bg-guiitar-primary text-white px-4 py-2 text-sm font-medium cursor-pointer hover:bg-guiitar-accent/90 transition-colors"
                  onClick={() => navigate("/resources")}
                >
                  Resources
                </Badge>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
              <span className="text-gray-900 font-semibold text-lg">{currentResource.category}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader className="border-b bg-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-6 h-6 text-gray-600" />
                      <Badge className="bg-guiitar-primary text-white px-3 py-1">{currentResource.category}</Badge>
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold mb-3 text-gray-900">{currentResource.category}</CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    {currentResource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">About this Resource</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{currentResource.fullDescription}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentResource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="px-3 py-1 text-sm">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {/* Enhanced PDF Viewer Section */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
                    <div className="max-w-md mx-auto">
                      <FileText className="w-20 h-20 mx-auto text-gray-400 mb-6" />
                      <h3 className="text-xl font-semibold text-gray-700 mb-3">PDF Document</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        This resource contains a comprehensive PDF document. Click the button below to download and view
                        the full content.
                      </p>
                      <div className="space-y-3">
                        <Button
                          onClick={() => handleDownload(currentResource)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-base font-medium"
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Download PDF ({currentResource.type.toUpperCase()})
                        </Button>
                        <p className="text-sm text-gray-500">File: {currentResource.slug}.pdf</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Resource Information Card */}
              

              {/* Related Resources */}
              {relatedResources.length > 0 && (
                <Card className="shadow-md">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Related Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedResources.map((resource) => (
                      <div
                        key={resource.id}
                        className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => handleResourceClick(resource.slug)}
                      >
                        <h4 className="font-medium text-sm text-gray-900 mb-1">{resource.title}</h4>
                        <p className="text-xs text-gray-600 line-clamp-2">{resource.description}</p>
                        <p className="text-xs text-gray-500 mt-2">{formatDate(resource.uploadDate)}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // Resources List View
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow py-16">
        <section className="bg-guiitar-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Resource</h1>
              <p className="text-lg md:text-xl opacity-90">
                Explore our comprehensive collection of resources, guidelines, and tools to support your entrepreneurial
                journey and innovation endeavors.
              </p>
            </div>
          </div>
        </section>

        {/* Header - add pt-16 to account for fixed navbar */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="alphabetical">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Category Filters - Mobile Dropdown + Desktop Buttons */}
            <div className="mb-4">
              {/* Mobile Dropdown */}
              <div className="block sm:hidden">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full h-10 bg-white border border-gray-300 rounded-md px-3 py-2 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-700">Category:</span>
                      <SelectValue placeholder="Select Category" className="text-sm" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    {categories.map((category) => (
                      <SelectItem
                        key={category}
                        value={category}
                        className="text-sm py-2 px-3 hover:bg-gray-50 focus:bg-gray-50"
                      >
                        <span>{category}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Desktop Buttons */}
              <div className="hidden sm:flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`text-sm transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-gray-600">Showing {sortedResources.length} resources</p>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedResources.map((resource) => (
              <Card
                key={resource.id}
                className="hover:shadow-lg transition-shadow duration-200 cursor-pointer flex flex-col h-full"
                onClick={() => handleResourceClick(resource.slug)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <Badge className="bg-guiitar-primary text-white text-sm px-3 py-1 font-medium">
                      {resource.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight mb-2">{resource.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 line-clamp-3">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex-grow flex flex-col">
                  <div className="space-y-4 flex-grow">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs px-2 py-1 text-gray-600 border-gray-300">
                          <Tag className="w-3 h-3 mr-1 " />
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1 text-gray-600 border-gray-300">
                          +{resource.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    {/* Meta info */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center  gap-1">
                        <User className="w-4 h-4" />
                        <span>Last updated</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(resource.uploadDate)}</span>
                      </div>
                    </div>
                  </div>
                  {/* View button - this will now stick to the bottom */}
                  <div className="mt-4">
                    <Button
                      className="w-full bg-guiitar-primary hover:bg-guiitar-accent text-white py-2"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleResourceClick(resource.slug)
                      }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Resource
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No results */}
          {sortedResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No resources found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
