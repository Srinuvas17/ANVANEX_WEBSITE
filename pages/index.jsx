import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-br from-blue-900 to-black">
        <div className="mb-8">
          <Image
            src="/logo.jpg"
            alt="Anvanex Logo"
            width={200}
            height={200}
            className="mx-auto rounded-lg"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Where Smart Innovation Meets Secure Encryption
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Anvanex Technologies Private Limited
        </p>
        <div className="space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg">
            Explore Services
          </Button>
          <Button variant="outline" className="text-white border-white text-lg">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Services</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>Network & Endpoint Protection</li>
                <li>Threat Detection & Response</li>
                <li>Penetration Testing & Hardening</li>
                <li>Zero Trust Architecture</li>
                <li>Cloud Security</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Web Designing</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>UI/UX Design</li>
                <li>Responsive Websites</li>
                <li>WordPress & CMS</li>
                <li>SEO Optimization</li>
                <li>Frontend Development</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">AI & DevOps Solutions</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
                <li>AI-Powered Tools</li>
                <li>Cloud Infrastructure</li>
                <li>Custom Applications</li>
                <li>Data Processing Pipelines</li>
                <li>DevOps Automation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-black border-t border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p>Email: <a href="mailto:support@anvanex.in" className="text-blue-400">support@anvanex.in</a></p>
          <p>Phone: <a href="tel:+919542495286" className="text-blue-400">+91 95424 95286</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Anvanex Technologies Private Limited. All rights reserved.
      </footer>
    </div>
  );
}
