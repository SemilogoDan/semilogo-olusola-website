import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Github, Linkedin, Mail, GraduationCap, Award, Medal } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Electrical Engineering
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Specializing in Information Communication Technology (ICT) and Power Systems
              </p>
              <a
                href="#projects"
                className="inline-block bg-primary text-white dark:bg-white dark:text-gray-900 px-8 py-3 rounded-lg hover:bg-primary/90 dark:hover:bg-white/90 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                   src="/Profile_pic.jpg" // Reference image directly from the public folder
                  alt="Semilogo Olusola OGUNGBURE"
                  className="rounded-lg shadow-lg"
                />
                <div className="flex justify-center mt-6 space-x-4 social-icons">
                  <a
                    href="https://github.com/SemilogoDan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/SemilogoDan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:semilogoolusola@gmail.com"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Recent graduate with a Master's degree in Electrical Engineering, specializing in Information Communication Technology (ICT).
                  Possessing hands-on experience with LAN/WAN systems, Software Defined Networking (SDN), and network security.
                </p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Scholarships</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      <a 
                        href="https://www.scholarship-link.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        ✓ Agbami Scholarship (2013-2016)
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.scholarship-link.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        ✓ Professor Olufolaji D.B Scholarship Prize (2014)
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>✓ Network Infrastructure & Security</li>
                  <li>✓ AI/ML Model Development</li>
                  <li>✓ Power Systems Design</li>
                  <li>✓ Cloud Technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="text-gray-900" size={24} />
                  <h3 className="text-xl font-semibold">Master of Science in Electrical Engineering</h3>
                </div>
                <p className="text-gray-600">Vrije Brussels Universiteit (VUB)/ULB • 2024</p>
                <p className="text-gray-600 mt-2">
                  Network Security, Communication Networks, Machine Learning & Big Data
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="text-gray-900" size={24} />
                  <h3 className="text-xl font-semibold">Bachelor's in Engineering</h3>
                </div>
                <p className="text-gray-600">Federal University of Technology Akure (FUTA) • 2011-2016</p>
                <p className="text-gray-600 mt-2">
                  Control Systems, Digital Communication, Power System Analysis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="project-section py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Design of Two Stages Operational Amplifier",
                  description: "This project focuses on designing a two-stage operational amplifier to meet key parameters like DC gain, phase margin, and frequency response.",
                  image: "OTA Two stages.png",
                  link: "https://github.com/SemilogoDan/Analog-Electronics-Design/tree/main",
                },
                {
                  title: "Voice Isolation System",
                  description: "Python program using PyTorch to isolate vocals from audio signals",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
                  link: "https://github.com/SemilogoDan/Voice_Isolation",
                },
                {
                  title: "Personal VPN over TOR",
                  description: "Secure personal VPN implementation over the TOR network",
                  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
                  link: "https://medium.com/@SemilogoDan/tor-personal-vpn-exploring-home-based-and-cloud-based-solutions-for-personal-vpn-over-tor-57e6ae0c100d",
                },
              ].map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg group relative">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                      <p className="text-white text-center">{project.description}</p>
                    </div>
                  </a>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 project-title dark:text-white">{project.title}</h3>
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary dark:text-white hover:text-primary/90 dark:hover:text-gray-300"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="certification-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Networking Basics",
                  issuer: "Cisco",
                  date: "Dec 2024"
                },
                {
                  title: "IT Automation with Python",
                  issuer: "Google",
                  date: "Nov 2024"
                },
                {
                  title: "Network Automation Professional",
                  issuer: "Arista Networks",
                  date: "Dec 2024"
                },
                {
                  title: "Power BI Data Analyst",
                  issuer: "Microsoft AI",
                  date: "Nov 2024"
                }
              ].map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <div className="flex items-center gap-4 mb-4">
                    <Medal className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{cert.issuer} • {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Honors & Awards Section */}
        <section className="honors-section py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Honors & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold award-title">Agbami Scholarship</h3>
                </div>
                <p className="text-gray-600">Agbami Oilfield • 2013-2016</p>
                <p className="text-gray-600 mt-2">
                  Scholarship for Engineering and Medical Professions
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="text-primary" size={24} />
                  <h3 className="text-xl font-semibold award-title">Best Student Award</h3>
                </div>
                <p className="text-gray-600">Professor Olufolaji D.B Scholarship Prize • 2014</p>
                <p className="text-gray-600 mt-2">
                  Awarded for outstanding academic performance in Year 2
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always open to discussing new projects and opportunities.
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
