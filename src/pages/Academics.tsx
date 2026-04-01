import React from 'react';
import { BookOpen, Code, Music, Palette, Dumbbell, Globe, CheckCircle } from 'lucide-react';

const Academics = () => {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-950 py-24 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Academics</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">A curriculum designed for the future, rooted in tradition.</p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Pre-Primary Wing",
                level: "Nursery to UKG",
                desc: "Focus on 'Learning through Play'. We use Montessori methods to develop motor skills, language, and social interaction.",
                features: ["Thematic Learning", "Activity Rooms", "Phonetics Focus", "Safe Play Area"]
              },
              {
                title: "Primary Wing",
                level: "Class I to V",
                desc: "Emphasis on core subjects while introducing environmental studies and computer basics. Building strong conceptual foundations.",
                features: ["Conceptual Math", "Language Lab", "EVS Projects", "Creative Writing"]
              },
              {
                title: "Secondary Wing",
                level: "Class VI to XII",
                desc: "Rigorous academic preparation for board exams with a focus on critical thinking and career orientation.",
                features: ["Science Labs", "Career Counseling", "Competitive Prep", "Digital Literacy"]
              }
            ].map((wing, i) => (
              <div key={i} className="bg-blue-50 p-10 rounded-3xl border-t-8 border-orange-500">
                <h3 className="text-2xl font-bold text-blue-950 mb-2">{wing.title}</h3>
                <div className="text-orange-600 font-bold mb-6">{wing.level}</div>
                <p className="text-gray-600 mb-8">{wing.desc}</p>
                <ul className="space-y-4">
                  {wing.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-blue-900 font-medium">
                      <CheckCircle size={18} className="text-green-600" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">Our Teaching Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Experiential Learning", icon: <Globe size={40} /> },
              { title: "Smart Classrooms", icon: <BookOpen size={40} /> },
              { title: "Personalized Attention", icon: <CheckCircle size={40} /> },
              { title: "Value-Based Education", icon: <Palette size={40} /> }
            ].map((m, i) => (
              <div key={i} className="space-y-6">
                <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  {m.icon}
                </div>
                <h4 className="text-xl font-bold">{m.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Curricular */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-950">Beyond Academics</h2>
            <p className="text-gray-600 mt-4">We believe in the holistic development of every child.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Sports & Yoga", icon: <Dumbbell />, color: "bg-blue-100 text-blue-600" },
              { title: "Music & Dance", icon: <Music />, color: "bg-orange-100 text-orange-600" },
              { title: "Arts & Crafts", icon: <Palette />, color: "bg-green-100 text-green-600" },
              { title: "Coding & Robotics", icon: <Code />, color: "bg-purple-100 text-purple-600" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl text-center hover:shadow-xl transition-all border border-gray-50">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-blue-950">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
