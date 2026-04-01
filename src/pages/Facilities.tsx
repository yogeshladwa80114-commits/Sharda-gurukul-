import React from 'react';
import { Laptop, BookOpen, Trophy, Bus, ShieldCheck, Coffee, Library, Microscope } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      title: "Smart Classrooms",
      desc: "Equipped with interactive whiteboards and digital learning tools to make education engaging and visual.",
      icon: <Laptop />,
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop"
    },
    {
      title: "Science Laboratories",
      desc: "State-of-the-art Physics, Chemistry, and Biology labs for hands-on practical learning and experimentation.",
      icon: <Microscope />,
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Digital Library",
      desc: "A vast collection of books, journals, and e-resources to encourage a lifelong habit of reading and research.",
      icon: <Library />,
      img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Sports Infrastructure",
      desc: "Extensive facilities for cricket, football, basketball, and indoor games to promote physical fitness.",
      icon: <Trophy />,
      img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop"
    },
    {
      title: "Safe Transport",
      desc: "GPS-enabled school buses covering all major routes with trained staff and female attendants.",
      icon: <Bus />,
      img: "https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Safety & Security",
      desc: "24/7 CCTV surveillance, fire safety systems, and restricted entry to ensure a secure environment.",
      icon: <ShieldCheck />,
      img: "https://images.unsplash.com/photo-1557597774-9d2739f85a76?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Hygienic Cafeteria",
      desc: "Serving nutritious and balanced meals prepared in a clean environment following strict quality standards.",
      icon: <Coffee />,
      img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Computer Center",
      desc: "High-speed internet and modern systems to keep students updated with the latest technological trends.",
      icon: <Laptop />,
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-950 py-24 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Facilities</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">Infrastructure that supports excellence and inspires growth.</p>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {facilities.map((f, i) => (
              <div key={i} className="flex flex-col lg:flex-row bg-blue-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group">
                <div className="lg:w-2/5 overflow-hidden">
                  <img 
                    src={f.img} 
                    alt={f.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 min-h-[250px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center mb-4 shadow-md">
                    {f.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-950 mb-4">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Want to see our campus in person?</h2>
          <p className="text-xl mb-10 opacity-90">Schedule a guided tour of our facilities and meet our faculty.</p>
          <a href="/contact" className="bg-blue-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors inline-block">
            Book a School Visit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
