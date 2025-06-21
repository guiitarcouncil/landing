"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Users, Clock } from "lucide-react"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming")

  const upcomingEvents = [
    {
      id: 1,
      title: "Drone Technology Workshop",
      date: "June 15, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "GUIITAR COUNCIL Innovation Hub",
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=1000",
      category: "Workshop",
      seats: 30,
      description:
        "Learn about the latest drone technologies and their applications in various industries. This hands-on workshop will cover drone assembly, flight control, and programming basics.",
    },
    {
      id: 2,
      title: "3D Printing Masterclass",
      date: "July 10, 2025",
      time: "9:30 AM - 4:00 PM",
      location: "Tech Lab, GSFC University",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000",
      category: "Workshop",
      seats: 25,
      description:
        "A comprehensive workshop on 3D printing technologies, covering design principles, material selection, and practical printing techniques. Create your own 3D printed prototype by the end of the session.",
    },
    {
      id: 3,
      title: "Startup Pitch Day",
      date: "August 5, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Auditorium, GSFC University",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1000",
      category: "Event",
      seats: 100,
      description:
        "An opportunity for startups to pitch their ideas to a panel of investors and industry experts. Selected startups will get a chance to receive funding and mentorship from leading business minds.",
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "AI in Healthcare Symposium",
      date: "March 22, 2025",
      location: "Conference Hall, GUIITAR COUNCIL",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",

      category: "Event",
      description:
        "A discussion on the applications of artificial intelligence in healthcare, featuring speakers from medical institutions and AI development companies.",
    },
    {
      id: 5,
      title: "IoT Bootcamp",
      date: "February 15, 2025",
      location: "GUIITAR COUNCIL Innovation Hub",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",

      category: "Workshop",
      description:
        "An intensive two-day bootcamp covering Internet of Things (IoT) concepts, hardware, software, and practical applications through hands-on projects.",
    },
    {
      id: 6,
      title: "Entrepreneurship Summit",
      date: "January 10, 2025",
      location: "Auditorium, GSFC University",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000",
      category: "Event",
      description:
        "A gathering of entrepreneurs, investors, and industry leaders to discuss current trends, challenges, and opportunities in the startup ecosystem.",
    },
    {
      id: 7,
      title: "Blockchain Technology Workshop",
      date: "December 18, 2024",
      location: "Tech Lab, GSFC University",
      image: "https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&fit=crop&q=80&w=1000",
      category: "Workshop",
      description:
        "An introduction to blockchain technology, covering its principles, applications, and potential impact on various industries through practical demonstrations.",
    },
  ]

  const workshopDetails = [
    {
      title: "Drone Technology Workshop",
      description:
        "This comprehensive workshop covers all aspects of drone technology, from the basic principles of flight to advanced programming and applications. Participants will learn about drone assembly, flight control systems, and practical applications in various industries.",
      topics: [
        "Introduction to drone technology and its applications",
        "Understanding drone components and assembly",
        "Flight principles and control systems",
        "Programming autonomous flight paths",
        "Data collection and analysis using drones",
        "Regulations and safety considerations",
      ],
      outcomes: [
        "Build and configure a basic drone",
        "Program flight paths and autonomous operations",
        "Understand data collection and processing from drone sensors",
        "Knowledge of drone regulations and safety protocols",
      ],
      image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "3D Printing Workshop",
      description:
        "This hands-on workshop introduces participants to the world of 3D printing, covering everything from design principles to practical printing techniques. Learn how to create, modify, and print your own 3D models using industry-standard tools and equipment.",
      topics: [
        "Introduction to 3D printing technologies",
        "3D design principles and software tools",
        "Material selection and properties",
        "Slicing software and print optimization",
        "Post-processing techniques",
        "Practical applications and case studies",
      ],
      outcomes: [
        "Design 3D models using CAD software",
        "Prepare models for printing using slicing software",
        "Successfully print and post-process 3D objects",
        "Understand material properties and selection criteria",
      ],
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1000",
    },
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
    <section className="bg-guiitar-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Workshops & Events</h1>
              <p className="text-lg md:text-xl opacity-90">
                Enhance your skills, expand your network, and stay updated with the latest trends through our specialized workshops and networking events.
              </p>
            </div>
          </div>
        </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center py-6">
            <div className="flex bg-gray-100 rounded-lg p-1 max-w-md w-full">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`flex-1 py-3 px-6 text-center font-semibold rounded-md transition-all duration-200 ${
                  activeTab === "upcoming" ? "bg-sky-500 text-white shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab("past")}
                className={`flex-1 py-3 px-6 text-center font-semibold rounded-md transition-all duration-200 ${
                  activeTab === "past" ? "bg-sky-500 text-white shadow-sm" : "text-gray-600 hover:text-gray-800"
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {activeTab === "upcoming" && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
                  <p className="text-gray-600 text-lg">Join us for these exciting upcoming workshops and events</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {upcomingEvents.map((event) => (
                    <Card
                      key={event.id}
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                    >
                      <div className="relative h-60 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <Badge className="absolute top-4 right-4 bg-sky-500 hover:bg-sky-600 text-white px-3 py-1">
                          {event.category}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{event.title}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center text-gray-700">
                            <CalendarDays size={18} className="mr-3 text-sky-500" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Clock size={18} className="mr-3 text-sky-500" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <MapPin size={18} className="mr-3 text-sky-500" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Users size={18} className="mr-3 text-sky-500" />
                            <span>{event.seats} seats available</span>
                          </div>
                        </div>

                        <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 font-semibold">
                          Register Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "past" && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Events</h2>
                  <p className="text-gray-600 text-lg">Take a look at our previously conducted workshops and events</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pastEvents.map((event) => (
                    <Card
                      key={event.id}
                      className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-md"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="text-white font-bold text-lg px-4 py-2 border-2 border-white rounded-full">
                            Completed
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <Badge variant="outline" className="mb-3 bg-blue-50 border-blue-200 text-blue-700">
                          {event.category}
                        </Badge>
                        <h3 className="text-lg font-bold mb-3 text-gray-900">{event.title}</h3>
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-600 text-sm">
                            <CalendarDays size={16} className="mr-2 text-sky-500" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center text-gray-600 text-sm">
                            <MapPin size={16} className="mr-2 text-sky-500" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-sky-500 text-sky-500 hover:bg-sky-50"
                        >
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Workshops */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Workshops</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our specialized workshops designed to provide hands-on experience with cutting-edge technologies.
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {workshopDetails.map((workshop, index) => (
              <Card key={index} className="overflow-hidden shadow-lg border-0">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 h-full">
                    <img
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                  </div>
                  <div className="lg:col-span-3 p-8">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{workshop.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{workshop.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-bold mb-4 text-sky-600">Workshop Topics</h4>
                        <ul className="space-y-2">
                          {workshop.topics.map((topic, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-sky-500 mr-3 mt-1">•</span>
                              <span className="text-gray-700">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-4 text-sky-600">Learning Outcomes</h4>
                        <ul className="space-y-2">
                          {workshop.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-sky-500 mr-3 mt-1">•</span>
                              <span className="text-gray-700">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 font-semibold">
                      Learn More & Register
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Events
