"use client"

import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { FileText, Users, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useIsMobile } from "@/hooks/use-mobile"

// Updated type
type TeamMember = {
  id: number
  name: string
  position: string
  image: string
  resume?: string
  bio?: string
  linkedin?: string
  email?: string
}

type TeamCategory = {
  id: string
  name: string
  members: TeamMember[]
}

const TeamCarousel = () => {
  const isMobile = useIsMobile()
  const [activeTeam, setActiveTeam] = useState("team")
  const [isOpen, setIsOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(null), 2000)
  }

  const [teamCategories] = useState<TeamCategory[]>([
    // Core Team
    {
      id: "team",
      name: "Core Team",
      members: [
        {
          id: 1,
          name: "Dr. Nilesh Bahadure",
          position: "CEO, GUIITAR Council",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drnilesh_o3ikuu.jpg",
          resume: "https://drive.google.com/file/d/1isIJeartTJQp5yJwirfFRPKvlNifryRJ/",
          linkedin: "https://www.linkedin.com/in/dr-nilesh-bhaskarrao-bahadure-2396622b/",
          email: "nilesh.bahadure@gsfcuniversity.ac.in",
        },
        {
          id: 2,
          name: "Mr. KiranKumar Parmar",
          position: "Sr. Manager, GUIITAR Council",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068658/mrkiran_wpigss.jpg",
          resume: "https://drive.google.com/file/d/1ElxEwweEeZeroWkqfCd6RtrPqxKo5ZK-/",
          linkedin: "https://www.linkedin.com/in/kirankumar-parmar-01b81499/",
          email: "kiran.parmar@gsfcuniversity.ac.in",
        },
        {
          id: 4,
          name: "Mr. Akhilesh Prajapati",
          position: "Sr. Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drprajapati_ypczef.jpg",
          resume: "https://drive.google.com/file/d/1Br9gUAJ1BXvaTveLrCcnPlYRREHgGRb2/",
          linkedin: "https://www.linkedin.com/in/dr-akhilesh-prajapati-39b20a21/",
          email: "akhilesh.prajapati@gsfcuniversity.ac.in",
        },
        {
          id: 5,
          name: "Dr. Mihir Trivedi",
          position: "Sr. Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068629/drmihir_eh0zjh.jpg",
          resume: "https://drive.google.com/file/d/12wxMOWeDQjf1SQQp38XM9Arv9U0YghSp/",
          linkedin: "https://www.linkedin.com/in/dr-mihir-trivedi-5130132a1/",
          email: "mihir.trivedi@gsfcuniversity.ac.in",
        },
        {
          id: 6,
          name: "Dr. Chandra Has",
          position: "Assistant Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068627/drchandra_lrl3it.jpg",
          resume: "https://drive.google.com/file/d/19uPcJ5kAL6r1YaAw6_Iyfy679Zeb1zQu/",
          linkedin: "https://www.linkedin.com/in/haschandra/",
          email: "chandra.has@gsfcuniversity.ac.in",
        },
      ],
    },

    // Board of Directors
    {
      id: "bod",
      name: "Board of Directors",
      members: [
        {
          id: 1,
          name: "Shri P. K. Taneja, IAS (Retd.)",
          position: "Chairman",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068724/pk_taneja_pq9i2q.jpg",
          resume: "https://drive.google.com/file/d/19leo-CdgJGIbK21nzL5gi4-j6Th2SJnf/",
          linkedin: "https://www.linkedin.com/in/p-k-taneja-056496293/",
        },
        {
          id: 2,
          name: "Dr. G. R. Sinha",
          position: "Director",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068647/mr_grsinha_bhbmg4.jpg",
          resume: "https://drive.google.com/file/d/1SXjUbqVrwRuJtDcSR1ulK9BG3tIq_x7e/",
          linkedin: "https://www.linkedin.com/in/professor-g-r-sinha-65713b18/",
        },
        {
          id: 3,
          name: "Shri Ramesh Panchal",
          position: "Director",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068661/mrpanchal_g3v5ku.jpg",
          resume: "https://drive.google.com/file/d/1GFGH8JrCwt9r891zWTe09EbZ582IsCPw/",
        },
      ],
    },

    // Advisory Board
    {
      id: "adb",
      name: "Advisory Board",
      members: [
        {
          id: 1,
          name: "Mr. Bimal Bhayani",
          position: "CEO & Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068655/mrbimal_d4r8h2.jpg",
          resume: "https://drive.google.com/file/d/112CsLKNyusAz_DtrbrzGrpJc4odCcuKw/view?usp=drive_link",
          linkedin: "https://www.linkedin.com/in/bimal-bhayani-156b67aa/",
        },
        {
          id: 2,
          name: "Dr. G R Sinha",
          position: "Director & Advisor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068647/mr_grsinha_bhbmg4.jpg",
          resume: "https://drive.google.com/file/d/1D25qxtb4duKHXe2OXh9c1KaTlOZtegeM/view?usp=drive_link",
          linkedin: "https://www.linkedin.com/in/professor-g-r-sinha-65713b18/",
        },
      ],
    },

    // Faculty Mentor
    {
      id: "fac",
      name: "Faculty Mentor",
      members: [
        {
          id: 1,
          name: "Dr. Sanjukta Bose Goswami",
          position: "Dean, SOT",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068727/sanjukta_bose_k4tfew.jpg",
          resume: "https://drive.google.com/file/d/1oUzPVx2ZyouUqacRfDDSeRTkqsBJQBIH/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/sanjukta-bose-goswami/",
          email: "dean.sot@gsfcuniversity.ac.in",
        },
        {
          id: 2,
          name: "Dr. Bharti Trivedi",
          position: "Visiting Professor",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068632/drTrivedi_efxgjx.jpg",
          resume: "https://drive.google.com/file/d/1A2q3HkyB8UPMfXCWcSFfjG1ob5zg_cuw/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/bhartitrivedi/",
          email: "bhakti.trivedi@gsfcuniversity.ac.in",
        },
      ],
    },

    // Industry Mentors
    {
      id: "industry",
      name: "Industry Mentors",
      members: [
        {
          id: 1,
          name: "Mr. Rupesh Shah",
          position: "CEO, Barodaweb",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068726/rupeshShah_odommw.jpg",
          resume: "https://drive.google.com/file/d/1gDR1HkvgLwi00oeI1p18gZbH5uUyqmiG/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/barodaweb/",
        },
        {
          id: 2,
          name: "Mr. Sudhir Gupta",
          position: "Member Strategic Advisory Board, Millennium Alliance",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068729/sudhirGupta_ozqefj.jpg",
          resume: "https://drive.google.com/file/d/1lcGUw_iv5QV_26Ws1Yw8L90m7xfyRwli/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/sudhir2016/",
        },
      ],
    },

    // Technical Associates
    {
      id: "tc",
      name: "Technical Associates",
      members: [
        {
          id: 1,
          name: "Ms. Foram Mistry",
          position: "Technical Associate",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068646/foram_msehlq.jpg",
          resume: "https://drive.google.com/file/d/1la_2SILlCEtfEqzgV0Klq5bXEFdFJ95R/view?usp=sharing",
          linkedin: "https://www.linkedin.com/in/mistry-foram/",
          email: "tc1guiitar@gsfcuniversity.ac.in",
        },
        {
          id: 2,
          name: "Mr. Krish Shah",
          position: "Technical Associate",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068650/krish_ibj5de.jpg",
          resume: "https://drive.google.com/file/d/1U1y8UrjXI7msX5wbgbTD2h1VGwlMNaiv/view?usp=sharing",
          email: "tc3guiitar@gsfcuniversity.ac.in",
        },
      ],
    },

    // Student Team
    {
      id: "students",
      name: "Student Team",
      members: [
        {
          id: 1,
          name: "Mr. Soham Kava",
          position: "Academic Associate",
          image: "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068729/Soham_vuqlss.png",
          resume: "https://drive.google.com/file/d/1c1xVXPzIx0En0QCoU_jl9U7BFlJka6i7/",
          email: "23bt04d179@gsfcuniversity.ac.in",
        },
        {
          id: 2,
          name: "Ms. Devanshi Mufti",
          position: "Academic Associate",
          image:
            "https://res.cloudinary.com/dopcjxehj/image/upload/v1743075961/WhatsApp_Image_2025-03-27_at_17.14.31_67532fc6_vevmxd.jpg",
          resume: "https://drive.google.com/file/d/1gWZmptw4iYsGJPDGOeIh1kW4YLclx-qn/",
          linkedin: "https://www.linkedin.com/in/devanshi-mufti-409b4a270/",
          email: "22bt04071@gsfcuniversity.ac.in",
        },
      ],
    },
  ])

  const activeCategory = teamCategories.find((cat) => cat.id === activeTeam)

  const handleCategoryChange = (categoryId: string) => {
    setActiveTeam(categoryId)
    setIsOpen(false)
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Meet the dedicated professionals who lead GUIITAR COUNCIL's mission to foster innovation and entrepreneurship.
        </p>
      </div>

      {/* Mobile Dropdown */}
      {isMobile ? (
        <div className="mb-8">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-blue-50 hover:bg-blue-100 rounded-lg text-left border border-blue-200 transition-colors">
              <span className="font-semibold text-lg text-blue-900">{activeCategory?.name}</span>
              <ChevronDown
                className={`h-5 w-5 text-blue-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-white rounded-lg shadow-lg mt-2 border border-gray-200 overflow-hidden">
              {teamCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`w-full text-left px-4 py-4 text-base transition-colors ${
                    category.id === activeTeam
                      ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                      : "hover:bg-gray-50 text-gray-700"
                  } ${index !== teamCategories.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="flex items-center">
                    <Users className="mr-3 h-5 w-5" />
                    <span className="font-medium">{category.name}</span>
                  </div>
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      ) : (
        /* Desktop Tabs */
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-100 rounded-lg">
            {teamCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTeam(category.id)}
                className={`flex items-center px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  category.id === activeTeam
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <Users className="mr-2 h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Team Members Display */}
      {activeCategory && (
        <div className="py-8">
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-900">{activeCategory.name}</h3>

          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {activeCategory.members.map((member, index) => (
                <CarouselItem key={member.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card className="h-full bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 rounded-lg">
                    {/* Profile Image */}
                    <div className="flex justify-center pt-8 pb-6">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                      />
                    </div>

                    {/* Member Info */}
                    <CardContent className="text-center px-6 pb-6">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">{member.name}</h4>
                      <p className="text-gray-600 text-sm mb-6">{member.position}</p>

                      {/* Social Icons */}
                      <div className="flex justify-center gap-4 mb-6">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 text-lg font-extrabold transition-colors"
                          >
                            in
                          </a>
                        )}
                        {member.email && (
                          <button
                            onClick={() => handleEmailClick(member.email!)}
                            className="text-gray-400  hover:text-gray-600 text-lg transition-colors relative"
                          >
                            ✉
                            {copiedEmail === member.email && (
                              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                Copied!
                              </span>
                            )}
                          </button>
                        )}
                      </div>

                      {/* Resume Button */}
                      {member.resume && (
                        <Button
                          variant="outline"
                          className="w-full text-sm font-medium bg-gray-100 hover:bg-orange-500 text-gray-700 hover:text-black border-gray-300 hover:border-orange-500 transition-all duration-200"
                          asChild
                        >
                          <a href={member.resume} target="_blank" rel="noopener noreferrer">
                            <FileText className="mr-2 h-4 w-4" />
                            View Resume
                          </a>
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Carousel Navigation */}
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static translate-y-0 bg-white hover:bg-orange-500 text-gray-600 hover:text-white border-gray-300 hover:border-orange-500 rounded-full w-10 h-10 transition-all duration-200" />
              <CarouselNext className="static translate-y-0 bg-white hover:bg-orange-500 text-gray-600 hover:text-white border-gray-300 hover:border-orange-500 rounded-full w-10 h-10 transition-all duration-200" />
            </div>
          </Carousel>
        </div>
      )}
    </div>
  )
}

export default TeamCarousel
