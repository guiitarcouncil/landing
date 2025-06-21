import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // Added import for Link
import Navbar from '@/components/layout/Navbar';

function Programs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
  ];

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
  ];

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
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
                <Button variant="outline" className=" bg-guiitar-primary  hover:bg-guiitar-accent/90 text-white text-sm xl:text-base px-3 xl:px-4">
                  <Link to="/funding" className='text-white'>Explore All Funding Options</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Programs;