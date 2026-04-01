import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, History, UserCheck, Quote } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-950 py-24 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">Discover our legacy, our values, and our commitment to excellence in education.</p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" 
                alt="School Philosophy" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                  <Target size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-950 mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To provide a nurturing environment that fosters intellectual curiosity, spiritual growth, and physical well-being, empowering students to become compassionate and responsible global citizens.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                  <Eye size={32} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-950 mb-4">Our Vision</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be a leading institution that redefines education by integrating traditional Gurukul values with 21st-century skills, creating a legacy of excellence and character.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1544717297-fa154da09f9b?q=80&w=2070&auto=format&fit=crop" 
                alt="Principal" 
                className="w-full h-full object-cover min-h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-2/3 p-12 lg:p-20 relative">
              <div className="absolute top-10 right-10 text-orange-100"><Quote size={120} fill="currentColor" /></div>
              <div className="relative z-10">
                <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Leadership</h2>
                <h3 className="text-4xl font-bold text-blue-950 mb-8">Principal's Message</h3>
                <p className="text-gray-600 text-lg italic mb-8 leading-relaxed">
                  "At Sharda Gurukul, we believe that education is not just about filling a bucket, but lighting a fire. Our goal is to ignite the passion for learning in every child. We are committed to providing a safe, inclusive, and challenging environment where every student can thrive and reach their full potential."
                </p>
                <div>
                  <h4 className="text-xl font-bold text-blue-950">Dr. S. K. Sharma</h4>
                  <p className="text-orange-600 font-semibold">Principal, Sharda Gurukul Kalesra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-950">Our Journey & Milestones</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: "2010", event: "Foundation Stone Laid", icon: <History /> },
              { year: "2015", event: "Awarded Best Rural School", icon: <Award /> },
              { year: "2020", event: "Digital Campus Transformation", icon: <UserCheck /> },
              { year: "2024", event: "100% Board Result Record", icon: <Award /> }
            ].map((m, i) => (
              <div key={i} className="text-center p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  {m.icon}
                </div>
                <div className="text-2xl font-bold text-blue-950 mb-2">{m.year}</div>
                <p className="text-gray-600">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
