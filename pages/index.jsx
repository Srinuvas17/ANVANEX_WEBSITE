// Redesigned Homepage for Anvanex Technologies
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        <Image
          src="/logo.jpg"
          alt="Anvanex Logo"
          width={160}
          height={160}
          className="z-10 mb-6 animate-bounce drop-shadow-xl rounded-full"
        />
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight z-10">
          Innovation Meets Encryption
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 z-10">
          Welcome to Anvanex Technologies Private Limited
        </p>
        <div className="mt-8 z-10 flex gap-4">
          <Link href="#services">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-white text-lg transition-all">
              Our Services
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-6 py-3 border border-white rounded-xl text-white text-lg transition-all hover:bg-white hover:text-black">
              Contact Us
            </button>
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/30 to-black/90 -z-10"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Cybersecurity",
              points: [
                "Zero Trust Architecture",
                "Threat Intelligence",
                "Endpoint Protection",
                "Cloud & Network Security",
              ],
            },
            {
              title: "Web Design",
              points: [
                "UI/UX Strategy",
                "SEO-optimized Sites",
                "CMS (WordPress) Setup",
                "Frontend Development",
              ],
            },
            {
              title: "AI & DevOps",
              points: [
                "AI Tools Integration",
                "Infrastructure Automation",
                "Data Pipelines",
                "Scalable Applications",
              ],
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-white/5 p-6 rounded-2xl shadow-xl backdrop-blur border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {service.title}
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-black py-16 border-t border-gray-800 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-300">
          Email: <a href="mailto:support@anvanex.in" className="text-blue-400">support@anvanex.in</a>
        </p>
        <p className="text-lg text-gray-300 mt-2">
          Phone: <a href="tel:+919542495286" className="text-blue-400">+91 95424 95286</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Anvanex Technologies Pvt. Ltd. All rights reserved.
      </footer>
    </div>
  );
}
