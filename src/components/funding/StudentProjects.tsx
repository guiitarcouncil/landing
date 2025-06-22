"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// Type definition for team member
type TeamMember = {
  name: string
  photo: string
  role?: string
}

// Type definition for project data
type StudentProject = {
  id: number
  name: string
  grant: string
  mentor: string
  usp: string
  teamMembers: TeamMember[]
  projectLink: string
}

const StudentProjects = () => {
  // Real project data from the achievements carousel
  const [projects] = useState<StudentProject[]>([
    {
      id: 1,
      name: "Ayurtrix - Three Folding Life",
      grant: "₹2,50,000",
      mentor: "Prof. Devjani Banerjee",
      usp: "Ayurtrix is working to increase the production of authentic Ayurvedic products to meet the growing demand and provide consumers with products that have the desired health benefits.",
      projectLink: "/",
      teamMembers: [
        {
          name: "Mr. Dev Shitole",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142750/devShitole_vt40xu.jpg",
          role: "Team Lead",
        },
        {
          name: "Ms. Reeya Prajapati",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142753/reeyaPrajapati_iznblp.jpg",
        },
        {
          name: "Ms. Tanuja Vadi",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142752/tanujaVadi_qp3qvp.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Bio-Lastic: A Safe Future with Flowers",
      grant: "₹1,00,000",
      mentor: "Dr. Priya Goel, Assistant Professor (Chemistry)",
      usp: "BIO-LASTIC transforms flowers into biodegradable polymer, providing sustainable solutions for the future. Inspired by the beauty and abundance of flowers in ritual places, we harness their potential for environmental benefit.",
      projectLink: "https://drive.google.com/file/d/1d0qpqhYT2jZZ-hYyMwF1IQ5R36rXmWx1/view?usp=sharing",
      teamMembers: [
        {
          name: "Mr. Aayush Varia",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142776/Aayush_r2n04h.jpg",
          role: "Team Lead",
        },
        {
          name: "Ms. Foram Mistry",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142774/Foram_xsj4vq.png",
        },
        {
          name: "Mr. Urmil Patel",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142778/urmil_yeqyz2.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Bacterial Chroma: A Biopigment Factory",
      grant: "₹1,70,000",
      mentor: "Dr. Ankit Sudhir, Senior Assistant Professor",
      usp: "Biological bacterial pigment with antimicrobial and potentially therapeutic uses. Offers significant potential for industrial applications and sustainable manufacturing.",
      projectLink: "https://drive.google.com/file/d/1s0SwcNAXwdsDfl4n5JslikOrBZQgsen1/view?usp=sharing",
      teamMembers: [
        {
          name: "Ms. Archi Modi",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743654686/WhatsApp_Image_2025-03-29_at_13.56.15_d32a7284_lgnhgy.jpg",
          role: "Team Lead",
        },
        {
          name: "Ms. Bhakti Dave",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743654689/WhatsApp_Image_2025-03-29_at_13.57.15_7c2a793e_whnt9y.jpg",
        },
        {
          name: "Ms. Navya Patel",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743654692/WhatsApp_Image_2025-03-29_at_13.57.01_f59fe7bb_qjvukk.jpg",
        },
        {
          name: "Mr. Malhar Shukla",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743654684/WhatsApp_Image_2025-03-29_at_13.56.03_771bf116_c4lk96.jpg",
        },
        {
          name: "Ms. Rushali More",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743654687/WhatsApp_Image_2025-03-29_at_13.56.29_81eb4218_t2bhvh.jpg",
        },
        {
          name: "Mr. Vatsal Pandya",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743654683/WhatsApp_Image_2025-03-29_at_13.55.51_d4a33ff3_lkmvti.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Defense Robot",
      grant: "₹1,84,800",
      mentor: "Mr. Yatharth Bhatt, Lab Assistant, SOT, GSFCU",
      usp: "Durable, Multi-terrain robot with advanced cameras and professional-grade design for unmatched reliability in critical operations and surveillance missions.",
      projectLink: "/",
      teamMembers: [
        {
          name: "Aksha Vohra",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743141727/aksha_peo1ke.jpg",
          role: "Team Lead",
        },
        {
          name: "Khushi Bhingradiya",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743141728/khushi_bi9zqn.jpg",
        },
        {
          name: "Tirth Patel",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743141729/tirth_qfkov5.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "Emotion Detection through Speech using AI/ML",
      grant: "₹37,000",
      mentor: "Ms. Mosam Patel, Program Coordinator, CSE",
      usp: "Advanced signal processing and machine learning techniques to analyze vocal cues and identify human emotions in real-time, enhancing human-computer interactions for customer service and mental health monitoring.",
      projectLink: "https://drive.google.com/file/d/1UJX5Sne_bRYTovnZAdwKk4av2VZfqlM3/view?usp=sharing",
      teamMembers: [
        {
          name: "Ms. Mittal Punwar",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142597/mittal_flf71m.jpg",
          role: "Team Lead",
        },
        {
          name: "Mr. Smit Dave",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142607/smit_ssip_ifflir.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "ESRT-ALOU - The Emotional Support Robot Teddy",
      grant: "₹88,000",
      mentor: "Dr. Deepak Parashar, Associate Professor (CSE)",
      usp: "ALOU is designed to be a source of genuine comfort and companionship. The robot teddy bear serves as an emotional support system, providing tactile, conversational, and emotional engagement.",
      projectLink: "/",
      teamMembers: [
        {
          name: "Mr. Madhav Trivedi",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142756/Madhav_Trivedi_n2kmpz.png",
          role: "Team Lead",
        },
        {
          name: "Ms. Shambhavi J Vyas",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142762/shambhavi_jkjl3b.jpg",
        },
        {
          name: "Mr. Theerth K R",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142761/teerth_lfhzdh.jpg",
        },
      ],
    },
    {
      id: 7,
      name: "Noise Monitoring System",
      grant: "₹1,19,000",
      mentor: "Ms. Swati Saxena, Assistant Professor, CSE",
      usp: "Low-cost Noise Monitoring System for the Atrium at Anviksha building to reduce noise disruption in nearby classrooms and offices, creating a conducive learning environment.",
      projectLink: "https://drive.google.com/file/d/1HOX_gxhjjGNOq6q0Vvv_v-YmcDmqIGEH/view?usp=sharing",
      teamMembers: [
        {
          name: "Mr. Harsh Vaidya",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743654566/WhatsApp_Image_2025-03-29_at_09.43.19_3d68639e_ofbmmh.jpg",
          role: "Team Lead",
        },
        {
          name: "Mr. Pratik Rathod",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743654567/WhatsApp_Image_2025-03-29_at_09.43.19_f2f1a5ee_y723bg.jpg",
        },
      ],
    },
    {
      id: 8,
      name: "Unmanned Ground Vehicle (UGV)",
      grant: "₹1,52,665",
      mentor: "Mr. Yatharth Bhatt, Lab Assistant, SOT, GSFCU",
      usp: "Modular, eco-friendly, GPS-enabled vehicle built for high-stakes tasks like surveillance, industrial monitoring, military operations, and disaster response missions.",
      projectLink: "https://drive.google.com/file/d/1P3nehuLGC2JkAclkOYGnNV9lJ0T_navK/view?usp=sharing",
      teamMembers: [
        {
          name: "Mr. Aryan Vamja",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743657463/IMG-20250324-WA0056-removebg-preview-01_1_ds0sbo.jpg",
          role: "Team Lead",
        },
        {
          name: "Ms. Chahana Kamdar",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142784/chahana_rcc5vz.jpg",
        },
        {
          name: "Mr. Deepkumar Gadhethariya",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743657755/WhatsApp_Image_2025-04-03_at_10.47.50_0802800a_anttnu.jpg",
        },
        {
          name: "Ms. Kartavi Patel",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142782/kartavi_aeamjb.jpg",
        },
        {
          name: "Ms. Krina Gothi",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743657452/WhatsApp_Image_2025-04-03_at_10.44.40_c1093168_zpqfga.jpg",
        },
        {
          name: "Ms. Nishtha Berawala",
          photo:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743657446/WhatsApp_Image_2025-04-03_at_10.44.23_9dca9ccc_jbyofq.jpg",
        },
      ],
    },
    {
      id: 9,
      name: "USV Neil",
      grant: "₹1,58,000",
      mentor: "Mr. Yatharth Bhatt, Lab Assistant, SOT, GSFCU",
      usp: "A versatile solution for sustainable unmanned surface vehicle. Innovative technology redefines maritime operations with multifunctional capabilities, from surveillance and monitoring to research and rescue missions.",
      projectLink: "https://drive.google.com/file/d/19Cr-ozJPr01xM4grE6Zm6R4wP9tFRB04",
      teamMembers: [
        {
          name: "Mr. Atharva Sisodiya",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142740/AtharvaSisodiya_p0qqve.png",
          role: "Team Lead",
        },
        {
          name: "Ms. Dhruvi Gohel",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142743/dhruviGohel_wxkcar.png",
        },
        {
          name: "Mr. Eshan Devadhara",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142738/eshanDevadhara_mkkptr.jpg",
        },
        {
          name: "Mr. Ryaan Shaikh",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142745/Reeyan_mrk07q.jpg",
        },
      ],
    },
    {
      id: 10,
      name: "Rhamnolipids",
      grant: "₹2,50,000",
      mentor: "Dr. Saroj Shekhawat, Associate Professor, School of Science",
      usp: "A potent, biodegradable biosurfactant with antimicrobial and antioxidant properties for industrial, environmental, and bioremediation applications.",
      projectLink: "https://drive.google.com/file/d/1Oyz0RkYuAQN8U2-m296mr7dFzCOqRZNG/view?usp=sharing",
      teamMembers: [
        {
          name: "Mr. Atharva Patil",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743655046/IMG_20250329_125403_gihhwu.jpg",
          role: "Team Lead",
        },
        {
          name: "Ms. Mrugani Pandya",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743655134/IMG_20250329_125351_fccwgh.jpg",
        },
        {
          name: "Ms. Naiya Patel",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743655047/IMG_20250329_125418_muwhx6.jpg",
        },
        {
          name: "Ms. Priyanshi Panchal",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743655046/IMG_20241110_214037_nmmn76.jpg",
        },
      ],
    },
    {
      id: 11,
      name: "Chewable Oral Toothpaste",
      grant: "₹83,500",
      mentor: "Dr. Akhilesh Prajapati, Sr. Assistant Professor (Biological Science)",
      usp: "100% Herbal oral care solution using Ancient Indian Ayurvedic medicine. User-friendly, easy to carry, and serves as both toothpaste and mouth freshener without chemicals.",
      projectLink: "https://drive.google.com/file/d/1Kk4Ao6pW-1BY6_8hQqTcp-SDzlPGCykU/view?usp=sharing",
      teamMembers: [
        {
          name: "Ms. Aakanksha Yadav",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142719/aakankshaYadav_hflreb.jpg",
          role: "Team Lead",
        },
        {
          name: "Ms. Diya Visavni",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743142717/diyaVisani_gbixx8.jpg",
        },
      ],
    },
    {
      id: 12,
      name: "Akshi: Smart Glass for Real-time Virtual Assistance",
      grant: "₹2,50,000",
      mentor: "Ms. Zalak Kansagra, Assistant Professor, CSE",
      usp: "Revolutionary smart glass technology providing real-time virtual assistance with advanced AR capabilities for enhanced user experience and productivity.",
      projectLink: "/",
      teamMembers: [
        {
          name: "Mr. Viraj Patel",
          photo: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068744/dummy_yky2vq.jpg",
          role: "Team Lead",
        },
      ],
    },
  ])

  // Function to render team member avatars in a grid layout
  const renderTeamAvatars = (members: TeamMember[]) => {
    const maxVisible = 6
    const visibleMembers = members.slice(0, maxVisible)
    const remainingCount = Math.max(0, members.length - maxVisible)

    // Determine grid layout based on number of members
    const getGridClass = (count: number) => {
      if (count === 1) return "grid-cols-1 justify-center"
      if (count === 2) return "grid-cols-2"
      if (count === 3) return "grid-cols-3"
      if (count === 4) return "grid-cols-2"
      if (count === 5) return "grid-cols-3"
      return "grid-cols-3" // 6 or more
    }

    return (
      <div className={`grid gap-2 ${getGridClass(visibleMembers.length)}`}>
        {visibleMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <Avatar className="h-12 w-12 border-2 border-blue-600">
              <AvatarImage src={member.photo || "/placeholder.svg"} alt={member.name} />
              <AvatarFallback>{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="text-xs mt-1 text-center font-medium">{member.name.split(" ").slice(-1)[0]}</span>
            {member.role && <span className="text-xs text-blue-600 font-semibold">{member.role}</span>}
          </div>
        ))}
        {remainingCount > 0 && (
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 border-2 border-blue-600 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-xs font-semibold text-gray-600">+{remainingCount}</span>
            </div>
            <span className="text-xs mt-1 text-center text-gray-500">more</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Funded Student Projects</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover innovative projects from talented students that have received funding through our various grant
            programs. These projects showcase the creativity and problem-solving abilities of our next generation of
            entrepreneurs.
          </p>
        </div>

        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-t-4 border-blue-600 hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
                    <CardContent className="pt-6 flex-grow">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-xl mb-2 line-clamp-2">{project.name}</h3>
                        <Badge className="bg-orange-500 hover:bg-blue-500 text-white text-xs whitespace-nowrap ml-2 transition-colors duration-200">
                          {project.grant}
                        </Badge>
                      </div>

                      <div className="flex items-center text-sm text-gray-600 mb-4">
                        <Users size={16} className="mr-1 flex-shrink-0" />
                        <span className="line-clamp-2">Mentor: {project.mentor}</span>
                      </div>

                      <div className="mb-6">
                        <p className="text-gray-700 text-sm line-clamp-3">{project.usp}</p>
                      </div>

                      {/* Team Members Section */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold mb-3 text-gray-800">
                          Team Members ({project.teamMembers.length})
                        </h4>
                        {renderTeamAvatars(project.teamMembers)}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t pt-4 mt-auto">
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        onClick={() => window.open(project.projectLink, "_blank")}
                      >
                        View Project <ExternalLink size={16} className="ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static transform-none mx-2" />
              <CarouselNext className="relative static transform-none mx-2" />
            </div>
          </Carousel>

          <div className="text-center mt-10">
            <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3">
              View All Projects <ExternalLink size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentProjects
