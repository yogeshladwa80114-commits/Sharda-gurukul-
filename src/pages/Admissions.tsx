import React from 'react';
import { FileText, ClipboardCheck, Calendar, HelpCircle, Phone, MessageCircle } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-950 py-24 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Admissions 2026-27</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">Join the Sharda Gurukul family. Secure your child's future today.</p>
          <div className="mt-10 inline-block bg-orange-500 text-white px-6 py-2 rounded-full font-bold animate-pulse">
            Limited Seats Available!
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-950">Simple 4-Step Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inquiry", desc: "Fill the online form or visit the school campus for a detailed tour.", icon: <HelpCircle /> },
              { step: "02", title: "Registration", desc: "Submit the registration form along with the required documents.", icon: <FileText /> },
              { step: "03", title: "Interaction", desc: "A friendly interaction with the child and parents to understand goals.", icon: <ClipboardCheck /> },
              { step: "04", title: "Confirmation", desc: "Complete the fee formalities to secure the admission.", icon: <Calendar /> }
            ].map((s, i) => (
              <div key={i} className="relative p-8 bg-blue-50 rounded-3xl text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  {s.step}
                </div>
                <div className="text-blue-900 mb-6 mt-4 flex justify-center">{s.icon}</div>
                <h4 className="text-xl font-bold text-blue-950 mb-4">{s.title}</h4>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Inquiry Form */}
            <div className="lg:w-3/5 bg-white p-10 rounded-3xl shadow-xl">
              <h3 className="text-3xl font-bold text-blue-950 mb-8">Admission Inquiry Form</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Student Name *</label>
                    <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Enter name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Class Seeking Admission *</label>
                    <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none">
                      <option>Select Class</option>
                      <option>Nursery</option>
                      <option>Class I</option>
                      <option>Class V</option>
                      <option>Class IX</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Parent/Guardian Name *</label>
                    <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Enter parent name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number *</label>
                    <input type="tel" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Enter mobile number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Message (Optional)</label>
                  <textarea className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none h-32" placeholder="Any specific questions?"></textarea>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-xl font-bold text-xl shadow-lg transition-transform hover:scale-[1.02]">
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="lg:w-2/5 space-y-8">
              <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
                <h4 className="text-2xl font-bold mb-6">Required Documents</h4>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><CheckCircle size={20} className="text-orange-500" /> Birth Certificate</li>
                  <li className="flex items-center gap-3"><CheckCircle size={20} className="text-orange-500" /> Previous School TC</li>
                  <li className="flex items-center gap-3"><CheckCircle size={20} className="text-orange-500" /> Passport Size Photos (4)</li>
                  <li className="flex items-center gap-3"><CheckCircle size={20} className="text-orange-500" /> Aadhaar Card (Student & Parent)</li>
                  <li className="flex items-center gap-3"><CheckCircle size={20} className="text-orange-500" /> Report Card of Last Class</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-orange-500">
                <h4 className="text-2xl font-bold text-blue-950 mb-4">Need Help?</h4>
                <p className="text-gray-600 mb-6">Our admission counselors are available to guide you through the process.</p>
                <div className="space-y-4">
                  <a href="tel:+919876543210" className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl text-blue-900 font-bold hover:bg-blue-100 transition-colors">
                    <Phone className="text-orange-500" /> +91 98765 43210
                  </a>
                  <a href="https://wa.me/919876543210" className="flex items-center gap-4 p-4 bg-green-50 rounded-xl text-green-800 font-bold hover:bg-green-100 transition-colors">
                    <MessageCircle className="text-green-600" /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckCircle = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default Admissions;
