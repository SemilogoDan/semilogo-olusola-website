import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Github, Linkedin, Mail, GraduationCap, Award, Medal } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg backdrop-blur-sm">
              <div className="text-center">
                <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                  Electrical Engineering
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Driven by Innovation in ICT/IT, Network Automation, and Digital Communications
                </p>
                <a
                  href="#projects"
                  className="inline-block bg-primary text-white dark:bg-white dark:text-gray-900 px-8 py-3 rounded-xl hover:bg-primary/90 dark:hover:bg-white/90 transition-colors"
                >
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <img
                    src="/Profile_pic.jpg"
                    alt="Semilogo Olusola OGUNGBURE"
                    className="w-64 h-64 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="flex justify-center mt-6 space-x-4">
                    <a
                      href="https://github.com/SemilogoDan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/semilogo-dan-s-ba86b2206/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="mailto:semilogoolusola@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-left dark:text-white">About Me</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-left">
                    I am a recent graduate with a Master's degree in Electrical Engineering, with a passion for ICT/IT, network automation, and digital communications. My thesis focused on developing an AI/ML model to optimize product quality by integrating process parameters and inspection data using Python and MySQL. My academic journey and hands-on roles in data science, automation, and network troubleshooting have prepared me to excel in roles such as Technical Support Engineer, IT Project Manager, Data Center Engineer, Telecommunications Engineer, Systems Engineer, and Network Engineer.
                  </p>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-left dark:text-white">Scholarships</h3>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-left">
                      <li>
                        <a 
                          href="https://imgur.com/35T7Fqa" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary dark:hover:text-primary"
                        >
                          ✓ Agbami Scholarship (2013-2016)
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://www.facebook.com/profile/100001585760055/search/?q=OLUFOLAJI%2FCAC%20GLORY%20SCHORLARSHIP%20AWARD" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary dark:hover:text-primary"
                        >
                          ✓ Professor Olufolaji D.B Scholarship Prize (2014)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-left dark:text-white">Interests</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-left">
                    <li>✓ Network Infrastructure & Security</li>
                    <li>✓ IT Automation & Cloud Computing</li>
                    <li>✓ Data Analytics & Digital Communications</li>
                    <li>✓ Systems Integration & Project Management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Education</h2>
            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="relative group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="text-primary dark:text-white" size={24} />
                  <h3 className="text-xl font-semibold dark:text-white">
                    Master of Science in Electrical Engineering
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-left">
                  Vrije Brussels Universiteit (VUB)/ULB • 2024
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-left">
                  Thesis: Development of an AI/ML Model to Optimize Product Quality by Integrating Process Parameters and Inspection Data (Python, MySQL)
                </p>
              </div>
              
              <div className="relative group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <GraduationCap className="text-primary dark:text-white" size={24} />
                  <h3 className="text-xl font-semibold dark:text-white">
                    Bachelor's in Engineering
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-left">
                  Federal University of Technology Akure (FUTA) • 2011-2016
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-left">
                  Relevant Courses: Networking and Communication, Operating Systems, Cloud Computing & Virtualization, Computer Architecture, Information Security Principles, IT Service Management (ITIL), Telecommunications Systems, Digital Signal Processing
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Work Experience Section */}
        <section className="work-experience-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Work Experience</h2>
            <div className="space-y-12 max-w-3xl mx-auto">
              {[
                {
                  title: "Data Scientist Intern",
                  company: "Agfa-Gevaert Group",
                  location: "Antwerpen, Belgium",
                  period: "Dec 2023 – Apr 2024",
                  responsibilities: [
                    "Developed and deployed AI/ML models for sensor-based product quality analysis, achieving 98% accuracy.",
                    "Analyzed sensor data using TCP/IP protocols to optimize product quality.",
                    "Communicated findings and recommendations to stakeholders through visualizations and reports."
                  ],
                  achievements: []
                },
                {
                  title: "Field Support Engineer",
                  company: "IPT Power Tech & IHS Telecom",
                  location: "Lebanon",
                  period: "Nov 2019 – Aug 2021",
                  responsibilities: [
                    "Applied statistical analysis to optimize network infrastructure across 10 locations, enhancing system reliability.",
                    "Conducted R&D on battery backup systems using time series analysis to extend operational uptime by 25%.",
                    "Led a team of 5 engineers in troubleshooting and resolving network issues using diagnostic tools and data analysis with Python and SQL."
                  ],
                  achievements: []
                },
                {
                  title: "Automation Engineer",
                  company: "TLS International Service Limited",
                  location: "Lagos, Nigeria",
                  period: "Apr 2017 – Nov 2019",
                  responsibilities: [
                    "Designed and implemented automated data collection pipelines between PLC panels and remote control systems, reducing manual intervention.",
                    "Created interactive dashboards with PowerBI to visualize data from PLC panels, improving operational efficiency by 15%.",
                    "Streamlined system diagnostics and data analysis processes using Python and Bash."
                  ],
                  achievements: []
                }
              ].map((job, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold dark:text-white mb-2">{job.title}</h3>
                  <p className="text-primary font-medium mb-1">{job.company}, {job.location}</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{job.period}</p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 dark:text-white">Key Responsibilities</h4>
                      <ul className="list-disc pl-5 space-y-2 text-left text-gray-600 dark:text-gray-300">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="ml-4">{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                    {job.achievements.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-2 dark:text-white">Achievements</h4>
                        <ul className="list-disc pl-5 space-y-2 text-left text-gray-600 dark:text-gray-300">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx} className="ml-4">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
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
                  title: "Simulation of Wireless Channels and Digital Communications",
                  description:
                    "Designed and implemented a real-life MIMO-OFDM transceiver for wireless communications using SDRs to validate performance in multipath environments.",
                  image: "WCCDC.png", // Update with your correct image filename if needed
                  link: "https://github.com/SemilogoDan/Wireless-Communication-Channel_Digital-Communication?tab=readme-ov-file#introduction",
                },
                {
                  title: "Communication Networks Protocol (IPSec VPN Configuration)",
                  description:
                    "Configured a site-to-site IPSec VPN tunnel between Cisco routers using GNS3 and Virtual Machine, reducing unauthorized access attempts by 95% and optimizing network traffic.",
                  image: "Network_protocol.png", // Update with your correct image filename if needed
                  link: "https://github.com/SemilogoDan/Communication-Network-Protocol",
                },
                {
                  title: "Audio Signal Processing for Voice Communication",
                  description:
                    "Applied signal processing techniques (STFT, spectrogram analysis) and deep learning architectures (CNN, U-Net) to enhance voice quality and reduce noise in communication systems.",
                  image: "/CNN.png", // Update with your correct image filename if needed
                  link: "https://github.com/SemilogoDan/Voice_Isolation",
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
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {[
                {
                  title: "Amazon Cloud Practitioner",
                  issuer: "Amazon",
                  date: "Dec 2024",
                  link: "https://www.coursera.org/accomplishments"
                },
                {
                  title: "Network Automation Professional",
                  issuer: "Arista Networks",
                  date: "Nov 2024",
                  link: "https://bit.ly/NetworkAutomation"
                },
                {
                  title: "Google IT Automation with Python",
                  issuer: "Google",
                  date: "Nov 2024",
                  link: "https://github.com/SemilogoDan/Google-IT-Automation"
                },
                {
                  title: "Learn By Doing: AWS Workshop with Terraform",
                  issuer: "AWS",
                  date: "Dec 2024",
                  link: "https://www.coursera.org/accomplishments"
                },
                {
                  title: "Introduction to CISSP",
                  issuer: "ISC²",
                  date: "Dec 2024",
                  link: "https://www.coursera.org/accomplishments"
                },
                {
                  title: "Ethical Hacking 101: Beginners Guide",
                  issuer: "Udemy",
                  date: "Dec 2024",
                  link: "https://www.coursera.org/accomplishments"
                },
                {
                  title: "Introduction to ITIL Foundation 4",
                  issuer: "AXELOS",
                  date: "Dec 2024",
                  link: "https://www.coursera.org/accomplishments"
                }
              ].map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer">
                  <div className="flex items-center gap-4 mb-4">
                    <Medal className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {cert.title}
                      </a>
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{cert.issuer} • {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Honors & Awards Section */}
        <section className="honors-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Honors & Awards</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                <a 
                  href="https://i.imgur.com/35T7Fqa.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <Award className="text-primary" size={24} />
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors dark:text-white">
                        Agbami Scholarship
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Agbami Oilfield • 2013-2016</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Scholarship for Engineering and Medical Professions
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                      <span className="text-white text-sm">View Scholarship Declaration</span>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://i.imgur.com/LCkQX43.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <Award className="text-primary" size={24} />
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors dark:text-white">
                        Best Student Award
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Professor Olufolaji D.B Scholarship Prize • 2014</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      Awarded for outstanding academic performance in Year 2
                    </p>
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                      <span className="text-white text-sm">View Scholarship Declaration</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="contact-section py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Get In Touch</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="max-w-7xl mx-auto">
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to discussing new projects and opportunities.
                </p>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-left dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-left dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-left dark:text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-600 focus:ring-2 focus:ring-primary"
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
