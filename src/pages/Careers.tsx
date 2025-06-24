"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Briefcase,
  Users,
  BriefcaseBusiness,
  GraduationCap,
  Calendar,
  FileText,
  FileSearch,
  Check,
  ChevronDown,
  ArrowRight,
} from "lucide-react"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"

interface JobPostingProps {
  title: string
  department: string
  location: string
  type: string
  description: string
  postedDate: string
}

const JobPosting: React.FC<JobPostingProps> = ({ title, department, location, type, description, postedDate }) => {
  return (
    <div className=" bg-white rounded-lg shadow-md p-6 border border-gray-100 transition-all hover:shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-serif font-bold text-guiitar-primary">{title}</h3>
          <p className="text-gray-600">{department}</p>
        </div>
        <span className="bg-guiitar-light text-guiitar-primary text-sm py-1 px-3 rounded-full">{type}</span>
      </div>
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <span className="mr-4">{location}</span>
        <span>Posted: {postedDate}</span>
      </div>
      <p className="text-gray-700 mb-4 line-clamp-3">{description}</p>
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          className="text-guiitar-primary hover:text-guiitar-primary/90 border-guiitar-primary/20 hover:bg-guiitar-light"
        >
          Learn More
        </Button>
        <Button className="bg-guiitar-accent hover:bg-guiitar-accent/90 text-white">Apply Now</Button>
      </div>
    </div>
  )
}

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 mb-4 bg-guiitar-light flex items-center justify-center rounded-full text-guiitar-primary">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  skills: string[]
  duration: string
  type: string
  eligibility: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, skills, duration, type, eligibility }) => {
  return (
    <Card className="w-full h-full border border-gray-200">
      <CardHeader className="bg-gradient-to-r from-guiitar-primary/10 to-guiitar-secondary/10">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-serif text-guiitar-primary">{title}</CardTitle>
          <Badge className="bg-guiitar-accent text-white">{type}</Badge>
        </div>
        <CardDescription className="pt-2">
          <div className="flex items-center text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{duration}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Skills Required:</h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-guiitar-light/50 text-guiitar-primary border-guiitar-primary/20"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Eligibility Criteria:</h4>
          <ul className="list-none space-y-1">
            {eligibility.map((item, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-4 h-4 mr-2 text-guiitar-accent mt-1 shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <Button
          variant="outline"
          className="text-guiitar-primary hover:text-guiitar-primary/90 border-guiitar-primary/20 hover:bg-guiitar-light"
        >
          <FileText className="mr-2" size={16} />
          Learn More
        </Button>
        <Button className="bg-guiitar-accent hover:bg-guiitar-accent/90 text-white">
          <FileSearch className="mr-2" size={16} />
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  )
}

const Careers = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  const jobPostings: JobPostingProps[] = [
    {
      title: "Research Associate",
      department: "Innovation & Research",
      location: "Vadodara, Gujarat",
      type: "Full-time",
      description:
        "Join our research team to work on cutting-edge innovations in the fields of AI, blockchain, and sustainable technology. You will be responsible for conducting research, preparing reports, and collaborating with industry partners.",
      postedDate: "May 2, 2025",
    },
    {
      title: "Program Coordinator",
      department: "Incubation Center",
      location: "Vadodara, Gujarat",
      type: "Full-time",
      description:
        "Coordinate various startup programs, mentor sessions, and workshops. You'll be managing the day-to-day operations of our incubation center and helping startups thrive.",
      postedDate: "May 1, 2025",
    },
    {
      title: "Marketing Specialist",
      department: "Marketing & Outreach",
      location: "Vadodara, Gujarat",
      type: "Part-time",
      description:
        "Help us spread the word about GUIITAR Council's initiatives and events. You will be responsible for digital marketing, social media management, and content creation.",
      postedDate: "April 28, 2025",
    },
    {
      title: "Student Intern",
      department: "Technology Development",
      location: "Remote",
      type: "Internship",
      description:
        "Gain hands-on experience working with our technology team on various projects. This internship is perfect for students looking to apply their academic knowledge to real-world problems.",
      postedDate: "April 25, 2025",
    },
  ]

  const values = [
    {
      icon: <Briefcase size={24} />,
      title: "Innovation First",
      description: "We believe in fostering a culture of innovation where new ideas are welcomed and nurtured.",
    },
    {
      icon: <Users size={24} />,
      title: "Collaborative Environment",
      description: "Work with diverse professionals from academia, industry, and the startup ecosystem.",
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Continuous Learning",
      description:
        "We encourage continuous professional development through workshops, seminars, and training programs.",
    },
    {
      icon: <BriefcaseBusiness size={24} />,
      title: "Entrepreneurial Spirit",
      description:
        "Embrace an entrepreneurial mindset and contribute to the growth of startups and innovative ventures.",
    },
  ]

  const projects: ProjectCardProps[] = [
    {
      title: "AI-Enhanced Agriculture Solution",
      description:
        "Develop machine learning models to analyze soil data and provide recommendations for optimal crop growth in Gujarat's climate conditions.",
      skills: ["Python", "Machine Learning", "TensorFlow", "Agriculture Knowledge"],
      duration: "6 months",
      type: "Research Project",
      eligibility: [
        "Students in final year of Computer Science or Agriculture Engineering",
        "Experience with data analysis and ML frameworks",
        "Knowledge of agricultural practices is a plus",
      ],
    },
    {
      title: "Blockchain for Supply Chain Transparency",
      description:
        "Create a blockchain-based solution to track and verify the authenticity of locally produced goods from manufacturing to retail.",
      skills: ["Blockchain", "Smart Contracts", "JavaScript", "Solidity"],
      duration: "8 months",
      type: "Development Project",
      eligibility: [
        "Graduate students or recent graduates in Computer Science",
        "Understanding of blockchain technology and smart contracts",
        "Experience with web development",
      ],
    },
    {
      title: "Renewable Energy Monitoring System",
      description:
        "Design and implement an IoT-based system to monitor the performance of solar panels installed at GSFC University campus.",
      skills: ["IoT", "Embedded Systems", "Data Visualization", "Electronics"],
      duration: "4 months",
      type: "Implementation Project",
      eligibility: [
        "Engineering students with background in electronics or IoT",
        "Experience with sensor integration and data handling",
        "Knowledge of renewable energy systems is beneficial",
      ],
    },
    {
      title: "Women Entrepreneurship Platform",
      description:
        "Create a mobile application to connect women entrepreneurs in Gujarat with mentors, resources, and potential investors.",
      skills: ["Mobile App Development", "UI/UX Design", "Backend Development"],
      duration: "5 months",
      type: "Startup Project",
      eligibility: [
        "Students or graduates with app development experience",
        "Good understanding of user experience design",
        "Interest in entrepreneurship and social impact",
      ],
    },
  ]

  // Enhanced scroll function with animation
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    setIsScrolling(true)

    const startPosition = window.pageYOffset
    const targetPosition = element.offsetTop - 80 // Account for navbar height
    const distance = targetPosition - startPosition
    const duration = 1200 // Animation duration in milliseconds

    let start: number | null = null

    // Easing function for smooth animation
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    }

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime
      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)

      const ease = easeInOutCubic(progress)
      window.scrollTo(0, startPosition + distance * ease)

      if (progress < 1) {
        requestAnimationFrame(animation)
      } else {
        setIsScrolling(false)
        // Add a subtle highlight animation to the target section
        element.style.transform = "scale(1.02)"
        element.style.transition = "transform 0.3s ease-out"
        setTimeout(() => {
          element.style.transform = "scale(1)"
        }, 300)
      }
    }

    requestAnimationFrame(animation)
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-guiitar-primary to-guiitar-secondary text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in">
                Join Our Mission to Foster Innovation
              </h1>
              <p className="text-xl mb-8 animate-fade-in-delay">
                Be part of a team dedicated to transforming ideas into impactful innovations.
              </p>
              <Button
                className={`bg-guiitar-accent hover:bg-guiitar-accent/90 text-white text-lg px-8 py-6 transition-all duration-300 transform hover:scale-105 ${
                  isScrolling ? "animate-pulse" : ""
                }`}
                onClick={() => scrollToSection("current-openings")}
                disabled={isScrolling}
              >
                {isScrolling ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Scrolling...
                  </>
                ) : (
                  <>
                    View Open Positions
                    <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full animate-float"></div>
            <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/10 rounded-full animate-float-delay"></div>
            <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-white/5 rounded-full animate-float-slow"></div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Our Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                At GUIITAR Council, we believe in creating an environment where innovation thrives and individuals grow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ValueCard key={index} icon={value.icon} title={value.title} description={value.description} />
              ))}
            </div>
          </div>
        </section>

        {/* Open Projects Section */}
        <section id="open" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Open Projects</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our existing research and development projects. We're looking for talented individuals to
                contribute to these innovative initiatives.
              </p>
            </div>

            <Carousel className="mb-8">
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <div className="h-full">
                      <ProjectCard {...project} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="mx-2 relative static translate-y-0" />
                <CarouselNext className="mx-2 relative static translate-y-0" />
              </div>
            </Carousel>

            <div className="bg-guiitar-light/30 rounded-lg p-8 border border-guiitar-primary/20 mt-12">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-guiitar-primary">Application Process</h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-guiitar-primary text-white rounded-full flex items-center justify-center mr-3">
                        1
                      </div>
                      <div className="pt-1">
                        <h4 className="font-medium mb-1">Review Projects</h4>
                        <p className="text-gray-600 text-sm">
                          Browse our open projects and find one that matches your skills and interests.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-guiitar-primary text-white rounded-full flex items-center justify-center mr-3">
                        2
                      </div>
                      <div className="pt-1">
                        <h4 className="font-medium mb-1">Submit Application</h4>
                        <p className="text-gray-600 text-sm">
                          Click "Apply Now" and submit your resume along with a brief statement of interest.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-guiitar-primary text-white rounded-full flex items-center justify-center mr-3">
                        3
                      </div>
                      <div className="pt-1">
                        <h4 className="font-medium mb-1">Interview</h4>
                        <p className="text-gray-600 text-sm">
                          Selected candidates will be invited for an interview with the project team.
                        </p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 bg-guiitar-primary text-white rounded-full flex items-center justify-center mr-3">
                        4
                      </div>
                      <div className="pt-1">
                        <h4 className="font-medium mb-1">Onboarding</h4>
                        <p className="text-gray-600 text-sm">
                          If selected, you'll receive an offer and begin the onboarding process.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-guiitar-primary">General Eligibility</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-guiitar-accent mr-3 mt-0.5" />
                      <span>
                        Currently enrolled students or recent graduates (within last 2 years) from recognized
                        institutions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-guiitar-accent mr-3 mt-0.5" />
                      <span>Strong academic background with minimum 60% aggregate in relevant field</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-guiitar-accent mr-3 mt-0.5" />
                      <span>Demonstrated interest in innovation, entrepreneurship, or research</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-guiitar-accent mr-3 mt-0.5" />
                      <span>Ability to commit the required time for project duration</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-guiitar-accent mr-3 mt-0.5" />
                      <span>Specific skills as mentioned in individual project requirements</span>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <h4 className="font-medium mb-3">Benefits of Joining Our Projects</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <li className="bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                        <span className="font-medium block">Mentorship</span>
                        <span className="text-sm text-gray-600">From industry experts and faculty</span>
                      </li>
                      <li className="bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                        <span className="font-medium block">Stipend</span>
                        <span className="text-sm text-gray-600">Competitive compensation offered</span>
                      </li>
                      <li className="bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                        <span className="font-medium block">Certificate</span>
                        <span className="text-sm text-gray-600">Official recognition of your work</span>
                      </li>
                      <li className="bg-white p-3 rounded-md border border-gray-100 shadow-sm">
                        <span className="font-medium block">Networking</span>
                        <span className="text-sm text-gray-600">Connect with innovators and leaders</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button className="bg-guiitar-primary hover:bg-guiitar-primary/90 text-white px-8">
                  View All Open Projects
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section id="current-openings" className="py-16 bg-white transition-transform duration-300">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Current Openings</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore opportunities to be part of our dynamic team working towards innovation and entrepreneurship.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobPostings.map((job, index) => (
                <JobPosting key={index} {...job} />
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 bg-guiitar-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 bg-guiitar-primary p-12 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-4">Can't find what you're looking for?</h3>
                  <p className="mb-6">
                    We're always on the lookout for talented individuals. Send us your resume and we'll keep you in mind
                    for future opportunities.
                  </p>
                   <p className="flex items-center gap-2 cursor-pointer hover:underline transition-all duration-200">
                      Send us your resume <ArrowRight className="w-5 h-5" />
                    </p>
                </div>
                <div className="md:w-1/2 p-12">
                  <h3 className="text-2xl font-serif font-bold mb-4">Attach Resume</h3>

                  {/* File Upload Section */}
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="resume-upload" className="block text-sm font-medium mb-2 text-gray-700">
                        Attach your resume
                      </label>
                      <input
                        type="file"
                        id="resume-upload"
                        accept=".pdf,.doc,.docx"
                        className="block w-full text-sm text-gray-900
                           file:mr-4 file:py-2 file:px-4
                           file:rounded-full file:border-0
                           file:text-sm file:font-semibold
                           file:bg-guiitar-primary file:text-white
                           hover:file:bg-guiitar-primary/90
                           file:cursor-pointer cursor-pointer"
                      />
                      <p className="text-xs text-gray-500 mt-1">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                    </div>

                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delay {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite 2s;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite 4s;
        }
      `}</style>
    </>
  )
}

export default Careers
