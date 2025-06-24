
import React, { useState } from 'react';
import { CONTACT_EMAIL, WHATSAPP_LINK } from '../constants';
import { PaperAirplaneIcon, DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setError('Please enter a valid email address.');
        return;
    }
    setError('');
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000); 
  };

  const mapAddress = "Tarnaka, Hyderabad, Telangana, India";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900"> {/* Dark background */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let’s Build Something Secure, Fast, and Beautiful</h2> {/* Text to white */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto"> {/* Text to light gray */}
            Have a project in mind or just want to learn more? We'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div> {/* Blue divider */}
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start"> {/* Increased gap for better spacing */}
          {/* Contact Form Card */}
          <div className="bg-slate-900 p-8 rounded-xl shadow-xl border border-slate-700" data-aos="fade-right">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Send us a Message</h3>
            {isSubmitted && (
              <div className="mb-4 p-3 rounded-md bg-green-700/30 text-green-300 border border-green-600">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="mb-4 p-3 rounded-md bg-red-700/30 text-red-300 border border-red-600">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white placeholder-gray-500"
                  placeholder="John Doe"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white placeholder-gray-500"
                  placeholder="you@example.com"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-white placeholder-gray-500"
                  placeholder="Your message..."
                  aria-required="true"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-blue-500 transition-colors"
                >
                  <PaperAirplaneIcon className="w-5 h-5 mr-2 transform -rotate-45" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Other Ways to Reach Us & Office Hours */}
          <div className="space-y-8" data-aos="fade-left">
             <div className="bg-slate-900 p-8 rounded-xl shadow-xl border border-slate-700">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">Other Ways to Reach Us</h3>
                <div className="space-y-6">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start text-gray-300 hover:text-blue-400 transition-colors group">
                        <EnvelopeIcon className="w-7 h-7 text-blue-500 mr-4 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                        <div>
                            <span className="font-semibold block text-gray-100">Email Us</span>
                            <span className="text-sm text-gray-400">{CONTACT_EMAIL}</span>
                        </div>
                    </a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start text-gray-300 hover:text-green-400 transition-colors group">
                        <DevicePhoneMobileIcon className="w-7 h-7 text-green-500 mr-4 mt-1 flex-shrink-0 group-hover:animate-bounce" />
                        <div>
                            <span className="font-semibold block text-gray-100">Chat on WhatsApp</span>
                            <span className="text-sm text-gray-400">Quick chat for instant support</span>
                        </div>
                    </a>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start text-gray-300 hover:text-red-400 transition-colors group">
                        <MapPinIcon className="w-7 h-7 text-red-500 mr-4 mt-1 flex-shrink-0 group-hover:animate-ping" />
                        <div>
                            <span className="font-semibold block text-gray-100">Find Us on Map</span>
                            <span className="text-sm text-gray-400">{mapAddress}</span>
                        </div>
                    </a>
                </div>
             </div>
             <div className="bg-slate-900 p-8 rounded-xl shadow-xl border border-slate-700 text-center">
                 <h3 className="text-xl font-semibold text-gray-100 mb-3">Office Hours</h3>
                 <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                 <p className="text-gray-400">Saturday: 10:00 AM - 2:00 PM (IST)</p>
                 <p className="text-sm text-gray-500 mt-2">Closed on Sundays and Public Holidays.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;