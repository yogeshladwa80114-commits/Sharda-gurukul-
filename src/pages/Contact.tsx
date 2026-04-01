import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-950 py-24 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">We're here to help. Reach out to us for any inquiries or to schedule a visit.</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Details */}
            <div className="lg:w-1/3 space-y-12">
              <div>
                <h3 className="text-3xl font-bold text-blue-950 mb-8">Get in Touch</h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-950 mb-1">Call Us</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                      <p className="text-gray-600">+91 98765 43211</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-950 mb-1">Email Us</h4>
                      <p className="text-gray-600">info@shardagurukul.com</p>
                      <p className="text-gray-600">admissions@shardagurukul.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-950 mb-1">Visit Us</h4>
                      <p className="text-gray-600">Kalesra, Near Main Road, District Agra, Uttar Pradesh - 282007</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 shrink-0">
                      <Clock size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-blue-950 mb-1">Working Hours</h4>
                      <p className="text-gray-600">Mon - Sat: 8:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-600 p-8 rounded-3xl text-white shadow-xl">
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MessageCircle /> WhatsApp Us
                </h4>
                <p className="mb-6 opacity-90">For quick responses, chat with our admission desk on WhatsApp.</p>
                <a href="https://wa.me/919876543210" className="bg-white text-green-600 px-8 py-3 rounded-full font-bold block text-center hover:bg-gray-100 transition-colors">
                  Start Chat
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3 bg-blue-50 p-10 lg:p-16 rounded-3xl">
              <h3 className="text-3xl font-bold text-blue-950 mb-8">Send us a Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Full Name</label>
                  <input type="text" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <input type="email" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Your email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Phone Number</label>
                  <input type="tel" className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Your mobile number" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Subject</label>
                  <select className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Career</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none h-48" placeholder="How can we help you?"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-5 rounded-xl font-bold text-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
                    Send Message <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin size={64} className="text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-blue-950 mb-2">Find Us on Google Maps</h3>
            <p className="text-gray-600">Kalesra, District Agra, Uttar Pradesh</p>
            <div className="mt-6 w-full max-w-4xl h-64 bg-white rounded-2xl shadow-inner border-2 border-dashed border-gray-300 flex items-center justify-center italic text-gray-400">
              [ Google Maps Embed Placeholder ]
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
