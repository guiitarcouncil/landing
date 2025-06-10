import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import TeamCarousel from "@/components/about/TeamCarousel";

const About = () => {
  return (
    <div className="pt-20 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* About Header */}
        <section className="bg-guiitar-primary text-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                About Us
              </h1>
              <p className="text-base md:text-lg lg:text-xl opacity-90">
                GUIITAR COUNCIL is dedicated to fostering innovation,
                entrepreneurship, and technological advancement in Vadodara and
                beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-guiitar-light p-6 md:p-8 rounded-lg">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-guiitar-primary">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  To produce success stories in innovations and start-ups that
                  will make the young minds confident, freestanding and
                  financially viable
                </p>
              </div>
              <div className="bg-guiitar-light p-6 md:p-8 rounded-lg">
                <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-guiitar-primary">
                  Our Vision
                </h2>
                <p className="text-gray-700 text-sm md:text-base">
                  To nurture young minds by providing platform to explore and
                  showcase their potential along with generation of high added
                  value with a focus on innovation as well as marketing of
                  technologies for the betterment of Scientific, Engineering,
                  Science & Management Communities and the Society
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section id="about" className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
                Our Journey
              </h2>
              <div className="space-y-4 md:space-y-6 text-gray-700 text-sm md:text-base">
                <p>
                  Founded in 2018 by GSFC University, GUIITAR COUNCIL (Gujarat
                  University Incubation, Innovation, Technology Advancement and
                  Research Council) was established to bridge the gap between
                  academic research and industry needs, while nurturing
                  entrepreneurs and innovators.
                </p>
                <p>
                  As a non-profit organization, we are committed to creating a
                  vibrant startup ecosystem in Vadodara by providing
                  comprehensive support to innovators at every stage of their
                  entrepreneurial journey.
                </p>
                <p>
                  Through our partnerships with industry leaders, government
                  bodies, and academic institutions, we have created a robust
                  support system that enables entrepreneurs to transform their
                  ideas into successful ventures.
                </p>
                <p>
                  Today, GUIITAR COUNCIL stands as a testament to the power of
                  innovation and collaboration, having supported over 50
                  startups, facilitated more than ₹10 crores in funding, and
                  conducted numerous workshops and events to foster the spirit
                  of entrepreneurship.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Messages */}
        <section id="leadership-messages" className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
                Message from Leadership
              </h2>
              {/* President */}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <div className="mb-4">
                    <img
                      src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068724/pk_taneja_pq9i2q.jpg"
                      alt="Dr. Nilesh Bhadure - CEO"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-lg mx-auto object-cover shadow-md"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-guiitar-primary">
                   Shri P. K. Taneja, IAS (Retd.) Chairman, GUIITAR
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                     President, GSFC University
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                   "Create an environment of excellence through innovation for you will forever be remembered for 
                   your contribution to the world. Innovation is a journey in which you have to say no to 
                   thousands of things which already exist while embracing the one which is yet to come"
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mb-4">
                    <img
                      src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068647/mr_grsinha_bhbmg4.jpg"
                      alt="Dr. G. R. Sinha"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-lg mx-auto object-cover shadow-md"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-guiitar-primary">
                   Dr. G. R. Sinha
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                      Provost, GSFC University
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  "Innovation is not to repeat a success story but to
                    celebrate a failure. Pick-up and never Give-up is an
                    attitude towards innovation"
                  </p>
                </div>

                {/* Provost */}
                <div className="text-center">
                  <div className="mb-4">
                    <img
                      src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743068630/drnilesh_o3ikuu.jpg"
                      alt="  Dr. Nilesh Bhadure - CEO"
                      className="w-32 h-32 md:w-40 md:h-40 rounded-lg mx-auto object-cover shadow-md"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-guiitar-primary">
                    Dr. Nilesh Bhadure
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    CEO, GUIITAR COUNCIL
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  "Every great innovation starts with a single spark of curiosity. 
                   In the world of startups, it's not the resources you have, 
                  but the relentless pursuit of your vision that turns ideas into reality."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with Carousel */}
        <section id="team" className="section-padding bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                Our Leadership Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Meet the dedicated professionals who lead GUIITAR COUNCIL's
                mission to foster innovation and entrepreneurship.
              </p>
            </div>

            <TeamCarousel />
          </div>
        </section>

        {/* Infrastructure */}
        <section id="infrastructure" className="section-padding bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                Our Infrastructure
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Explore the state-of-the-art facilities and resources available
                at GUIITAR COUNCIL to support your innovation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div>
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/coworking_space_ntgoh3.jpg"
                  alt="Co-working Space"
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Co-working Space
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Modern, well-equipped co-working areas designed to foster
                  collaboration and productivity.
                </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/library_pt4z2o.jpg"
                  alt="Co-working Space"
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  IoT Lab
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Modern, well-equipped co-working areas designed to foster
                  collaboration and productivity.
                </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/drone_lab_mkxvo9.jpg"
                  alt="Co-working Space"
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Advanced Drone Lab
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Modern, well-equipped co-working areas designed to foster
                  collaboration and productivity.
                </p>
              </div>

              <div>
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/guiitar_lab_lh8t0a.jpg"
                  alt="Prototyping Lab"
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Makers Lab
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Advanced prototyping facilities with 3D printers, laser
                  cutters, and other tools for product development.
                </p>
              </div>

              <div>
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/library_pt4z2o.jpg"
                  alt="Drone Technology Lab"
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Library
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Specialized facility for drone development, testing, and
                  research applications.
                </p>
              </div>

              <div>
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743066525/printing_lab_wrw93w.png"
                  alt="Meeting Rooms"
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  3D Printing Lab
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Well-appointed meeting rooms and conference spaces for team
                  collaborations and client presentations.
                </p>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743066520/supercomputer_lab_t0kplg.jpg"
                  alt="Meeting Rooms"
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Super Computer Lab
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Well-appointed meeting rooms and conference spaces for team
                  collaborations and client presentations.
                </p>
              </div>

              <div>
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743066521/tinkering_lab_xabcx4.jpg"
                  alt="Meeting Rooms"
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Tinkering Lab
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Well-appointed meeting rooms and conference spaces for team
                  collaborations and client presentations.
                </p>
              </div>
              {/* Conference Room */}
              {/* <div>
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743066521/tinkering_lab_xabcx4.jpg"
                  alt="Meeting Rooms"
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                  />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Tinkering Lab
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Well-appointed meeting rooms and conference spaces for team
                  collaborations and client presentations.
                </p>
              </div> */}

                  {/* Conference Room */}
              {/* <div>
                <img
                  src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743066521/tinkering_lab_xabcx4.jpg"
                  alt="Meeting Rooms"
                  className="rounded-lg shadow-md w-full h-48 sm:h-56 md:h-64 object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Tinkering Lab
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Well-appointed meeting rooms and conference spaces for team
                  collaborations and client presentations.
                </p>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
