import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaShieldAlt, 
  FaPalette, 
  FaRobot, 
  FaBitcoin,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaArrowRight,
  FaQuoteLeft
} from "react-icons/fa";

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const services = [
    {
      title: "Cybersecurity Services",
      icon: <FaShieldAlt className="text-4xl" />,
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      features: [
        "Zero Trust Architecture",
        "Threat Detection & Response", 
        "Cloud & Endpoint Protection"
      ],
      link: "/services/cybersecurity"
    },
    {
      title: "Web Designing",
      icon: <FaPalette className="text-4xl" />,
      gradient: "from-purple-600 via-pink-500 to-rose-400",
      features: [
        "UI/UX Strategy",
        "SEO-optimized & Mobile Responsive",
        "CMS (WordPress, custom)"
      ],
      link: "/services/web-design"
    },
    {
      title: "AI & DevOps",
      icon: <FaRobot className="text-4xl" />,
      gradient: "from-green-600 via-emerald-500 to-teal-400",
      features: [
        "AI Integration",
        "Infrastructure Automation",
        "Scalable Data Pipelines"
      ],
      link: "/services/ai-devops"
    },
    {
      title: "Digital Asset Services",
      icon: <FaBitcoin className="text-4xl" />,
      gradient: "from-yellow-600 via-orange-500 to-red-400",
      features: [
        "Blockchain Integration",
        "Secure Wallets",
        "Asset Tokenization",
        "Crypto Payment Gateways"
      ],
      link: "/services/digital-assets"
    }
  ];

  const testimonials = [
    {
      quote: "Anvanex transformed our cybersecurity infrastructure with their Zero Trust implementation. Outstanding results.",
      author: "Sarah Chen",
      position: "CTO, TechCorp Solutions"
    },
    {
      quote: "Their AI integration services helped us automate 80% of our deployment pipeline. Incredible expertise.",
      author: "Michael Rodriguez",
      position: "DevOps Lead, InnovateLabs"
    },
    {
      quote: "The blockchain wallet solution they built is secure, scalable, and user-friendly. Highly recommended.",
      author: "David Kim",
      position: "Founder, CryptoVentures"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen font-poppins overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-900"></div>
        
        {/* Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-96 h-96 bg-green-500/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Particle Grid */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Mouse Follower */}
        <motion.div
          className="absolute w-6 h-6 bg-cyan-400/30 rounded-full blur-sm pointer-events-none"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Logo */}
          <motion.div 
            className="mb-12"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Image
                src="/logo.jpg"
                alt="Anvanex Technologies Logo"
                width={200}
                height={200}
                className="relative z-10 rounded-full border-4 border-cyan-400/50 shadow-2xl"
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Innovation
            </span>
            <br />
            <span className="text-white">Meets</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Encryption
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Anvanex Technologies Private Limited
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Pioneering the future of cybersecurity, web innovation, AI automation, and digital asset management with cutting-edge technology solutions
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Link href="#services">
              <motion.button 
                className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl text-white text-lg font-semibold overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Services <FaArrowRight />
                </span>
              </motion.button>
            </Link>
            
            <Link href="#contact">
              <motion.button 
                className="group relative px-10 py-4 border-2 border-green-500 rounded-2xl text-green-400 text-lg font-semibold overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-green-500"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                  Contact Us
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to secure, innovate, and transform your digital presence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 overflow-hidden">
                  {/* Animated Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Glowing Border Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div 
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={feature} 
                          className="flex items-start text-gray-300 group-hover:text-white transition-colors duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    <Link href={service.link}>
                      <motion.button 
                        className="w-full py-3 text-sm font-semibold text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 border border-gray-600 rounded-xl group-hover:border-cyan-400/50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More →
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
                  About Anvanex
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                We are pioneers in the convergence of cybersecurity, artificial intelligence, and blockchain technology. Our mission is to empower businesses with cutting-edge solutions that protect, innovate, and scale.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                From Zero Trust security architectures to AI-powered automation and blockchain integration, we deliver comprehensive technology solutions that drive digital transformation and secure your future.
              </p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {["Innovation", "Security", "Scalability", "Excellence"].map((value, index) => (
                  <motion.span 
                    key={value}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {value}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    To be the global leader in secure, intelligent, and decentralized technology solutions that shape the future of digital business.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                      <div className="text-sm text-gray-400">Projects Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
                      <div className="text-sm text-gray-400">Uptime Guarantee</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <FaQuoteLeft className="text-cyan-400 text-2xl mb-6" />
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-700 pt-6">
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6 bg-gradient-to-r from-gray-900/50 via-black/50 to-gray-900/50 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-green-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ready to transform your digital infrastructure? Let's discuss your next project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-5xl mb-6">📧</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                Email Us
              </h3>
              <a 
                href="mailto:support@anvanex.in" 
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-lg font-semibold"
              >
                support@anvanex.in
              </a>
            </motion.div>
            
            <motion.div
              className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-5xl mb-6">📱</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300">
                Call Us
              </h3>
              <a 
                href="tel:+919542495286" 
                className="text-green-400 hover:text-green-300 transition-colors duration-300 text-lg font-semibold"
              >
                +91 95424 95286
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Business Hours</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Monday - Friday: 9:00 AM - 6:00 PM IST<br />
              Saturday: 10:00 AM - 4:00 PM IST
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-gray-800 bg-black/80 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <Image
                  src="/logo.jpg"
                  alt="Anvanex Logo"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <span className="text-2xl font-bold text-white">Anvanex Technologies</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Pioneering innovation in cybersecurity, web development, AI automation, and digital asset management with cutting-edge technology solutions.
              </p>
              <div className="flex space-x-4">
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter />
                </motion.a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Services", "About", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.title}>
                    <Link 
                      href={service.link}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500">
              © 2025 Anvanex Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}