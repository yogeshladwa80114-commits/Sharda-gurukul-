import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Users, GraduationCap, ShieldCheck, BookOpen, Laptop, Trophy, Bus, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
            alt="School Campus" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Admissions Open 2026-27
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Shaping Future Leaders with <span className="text-orange-500">Values & Excellence</span>
            </h1>
            <p className="text-xl text-blue-50 mb-10 leading-relaxed max-w-2xl">
              At Sharda Gurukul, we blend traditional Indian values with modern education to provide a holistic learning environment for your child's bright future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admissions" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
                Apply Now <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105">
                Book a Visit
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 right-0 hidden md:block">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-8 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">15+</div>
                <div className="text-white text-sm">Years of Legacy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">1200+</div>
                <div className="text-white text-sm">Active Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">80+</div>
                <div className="text-white text-sm">Expert Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-white text-sm">Safety Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators / Quick Stats Mobile */}
      <section className="py-12 bg-blue-50 md:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <GraduationCap className="text-orange-500" />, label: "15+ Years", sub: "Legacy" },
              { icon: <Users className="text-orange-500" />, label: "1200+", sub: "Students" },
              { icon: <ShieldCheck className="text-orange-500" />, label: "Safe", sub: "Campus" },
              { icon: <Trophy className="text-orange-500" />, label: "Top", sub: "Results" },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="font-bold text-blue-900">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">The Gurukul Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Why Sharda Gurukul is the Right Choice for Your Child</h3>
            <p className="text-gray-600 text-lg">We don't just teach subjects; we build character and instill values that last a lifetime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Gurukul Philosophy", 
                desc: "Blending ancient wisdom with modern science for a balanced perspective.",
                icon: <BookOpen className="w-8 h-8" />
              },
              { 
                title: "Academic Excellence", 
                desc: "Proven track record of outstanding board results and competitive success.",
                icon: <GraduationCap className="w-8 h-8" />
              },
              { 
                title: "Safe & Secure", 
                desc: "24/7 CCTV monitoring and trained security staff for peace of mind.",
                icon: <ShieldCheck className="w-8 h-8" />
              },
              { 
                title: "Holistic Growth", 
                desc: "Equal focus on sports, arts, and personality development.",
                icon: <Users className="w-8 h-8" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-blue-50 p-8 rounded-2xl border-b-4 border-orange-500"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-blue-950 mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-24 bg-blue-950 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4">Our Programs</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Nurturing Minds from Foundation to Excellence</h3>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                Our curriculum is designed to challenge and inspire students at every level of their educational journey.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Pre-Primary (Nursery - UKG)", desc: "Play-based learning focusing on sensory development and social skills." },
                  { title: "Primary (Class I - V)", desc: "Building strong foundations in literacy, numeracy, and environmental awareness." },
                  { title: "Secondary (Class VI - XII)", desc: "Rigorous academic training with specialized streams for career readiness." }
                ].map((prog, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1"><CheckCircle2 className="text-orange-500" size={24} /></div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{prog.title}</h4>
                      <p className="text-blue-200">{prog.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/academics" className="inline-flex items-center gap-2 mt-12 text-orange-500 font-bold hover:gap-4 transition-all">
                Explore Curriculum <ArrowRight size={20} />
              </Link>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                  alt="Students" 
                  className="rounded-2xl h-80 object-cover mt-12"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
                  alt="Classroom" 
                  className="rounded-2xl h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-center p-4 shadow-2xl animate-pulse">
                Admissions Open!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">World-Class Infrastructure</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Facilities that Foster Learning</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Smart Classrooms", icon: <Laptop />, img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop" },
              { title: "Science & Computer Labs", icon: <BookOpen />, img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" },
              { title: "Sports Complex", icon: <Trophy />, img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop" },
              { title: "Safe Transport", icon: <Bus />, img: "https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?q=80&w=2070&auto=format&fit=crop" }
            ].map((fac, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl h-80">
                <img 
                  src={fac.img} 
                  alt={fac.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-orange-500 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
                    {fac.icon}
                  </div>
                  <h4 className="text-xl font-bold">{fac.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/facilities" className="bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-colors">
              View All Facilities
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Parent Stories</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">What Our Parents Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: "Rajesh Kumar", 
                role: "Parent of Class VIII Student", 
                text: "The transformation in my son's discipline and academic focus since joining Sharda Gurukul has been remarkable. The teachers truly care." 
              },
              { 
                name: "Sunita Sharma", 
                role: "Parent of Class III Student", 
                text: "I love how they balance modern technology with traditional values. My daughter is learning coding and Sanskrit at the same time!" 
              },
              { 
                name: "Amit Patel", 
                role: "Parent of Class X Student", 
                text: "The safety measures and the personal attention each student receives is what sets this school apart from others in the region." 
              }
            ].map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm relative">
                <div className="text-orange-500 mb-6"><MessageSquare size={40} fill="currentColor" opacity={0.2} /></div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{test.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold">
                    {test.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-blue-950">{test.name}</h5>
                    <p className="text-xs text-gray-500">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Give Your Child the Gift of <br /> <span className="text-orange-500">Quality Education</span></h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Limited seats available for the academic year 2026-27. Secure your child's future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/admissions" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 shadow-xl">
              Start Admission Process
            </Link>
            <a href="tel:+919876543210" className="bg-white hover:bg-gray-100 text-blue-900 px-10 py-5 rounded-full font-bold text-xl transition-all hover:scale-105 flex items-center justify-center gap-2">
              <Phone size={24} /> Call for Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
