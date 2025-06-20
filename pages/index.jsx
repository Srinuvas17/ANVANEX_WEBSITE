import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Cybersecurity",
      icon: "🛡️",
      gradient: "from-blue-600 to-purple-600",
      points: [
        "Zero Trust Architecture",
        "Threat Detection & Response", 
        "Endpoint Protection",
        "Cloud Security"
      ],
    },
    {
      title: "Web Designing",
      icon: "🎨",
      gradient: "from-purple-600 to-pink-600",
      points: [
        "UI/UX Design",
        "Responsive Frontends",
        "WordPress & CMS",
        "SEO Optimization"
      ],
    },
    {
      title: "AI & DevOps",
      icon: "🤖",
      gradient: "from-green-500 to-teal-500",
      points: [
        "AI Tools Integration",
        "Infrastructure Automation",
        "Data Pipelines",
        "Scalable Applications"
      ],
    },
    {
      title: "Digital Asset Services",
      icon: "💎",
      gradient: "from-yellow-500 to-orange-500",
      points: [
        "Blockchain Integration",
        "Secure Wallet Management",
        "Asset Tokenization",
        "Crypto Payment Gateways"
      ],
    }
  ];

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white min-h-screen font-inter overflow-x-hidden">
      {/* Matrix Background Effect */}
      <div className="fixed inset-0 matrix-bg pointer-events-none z-0"></div>
      
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-green-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Logo */}
        <div className="relative z-10 mb-8">
          <div className="relative">
            <Image
              src="/logo.jpg"
              alt="Anvanex Technologies Logo"
              width={180}
              height={180}
              className="animate-float animate-glow rounded-full border-4 border-blue-500/30 shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 animate-pulse-glow"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            <span className="text-gradient">Innovation</span>
            <br />
            <span className="text-white">Meets</span>
            <br />
            <span className="text-gradient">Encryption</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
            Anvanex Technologies Private Limited
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Pioneering the future of cybersecurity, web innovation, AI automation, and digital asset management
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="#services">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 cyber-border">
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </Link>
            
            <Link href="#contact">
              <button className="group relative px-8 py-4 border-2 border-green-500 rounded-2xl text-green-400 text-lg font-semibold transition-all duration-300 hover:bg-green-500 hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                <span className="relative z-10">Contact Us</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`relative py-24 px-6 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient">Our Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to secure, innovate, and transform your digital presence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`service-card glassmorphism rounded-3xl p-8 cyber-border group transition-all duration-500 delay-${index * 100}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {service.points.map((point, pointIndex) => (
                    <li key={point} className="flex items-start text-gray-300 group-hover:text-white transition-colors duration-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-green-300 transition-colors duration-300"></div>
                      <span className="text-sm leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-gray-700 group-hover:border-gray-600 transition-colors duration-300">
                  <button className="w-full py-2 text-sm font-semibold text-gray-400 group-hover:text-green-400 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`relative py-24 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            Ready to transform your digital infrastructure? Let's discuss your next project.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glassmorphism rounded-3xl p-8 cyber-border group hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2 text-white">Email Us</h3>
              <a 
                href="mailto:support@anvanex.in" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-lg font-semibold"
              >
                support@anvanex.in
              </a>
            </div>
            
            <div className="glassmorphism rounded-3xl p-8 cyber-border group hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-2 text-white">Call Us</h3>
              <a 
                href="tel:+919542495286" 
                className="text-green-400 hover:text-green-300 transition-colors duration-300 text-lg font-semibold"
              >
                +91 95424 95286
              </a>
            </div>
          </div>

          <div className="glassmorphism rounded-3xl p-8 cyber-border">
            <h3 className="text-2xl font-bold mb-4 text-white">Business Hours</h3>
            <p className="text-gray-300 text-lg">
              Monday - Friday: 9:00 AM - 6:00 PM IST<br />
              Saturday: 10:00 AM - 4:00 PM IST
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-gray-800 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/logo.jpg"
                  alt="Anvanex Logo"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <span className="text-xl font-bold text-white">Anvanex Technologies</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pioneering innovation in cybersecurity, web development, AI automation, and digital asset management.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
                  <span className="text-sm">Li</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-300">
                  <span className="text-sm">Tw</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300">
                  <span className="text-sm">Gh</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Anvanex Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}