import React, { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const categories = ['All', 'Campus', 'Events', 'Activities', 'Classrooms'];
  
  const images = [
    { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop", cat: "Campus" },
    { url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", cat: "Activities" },
    { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop", cat: "Classrooms" },
    { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop", cat: "Events" },
    { url: "https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop", cat: "Activities" },
    { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop", cat: "Classrooms" },
    { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop", cat: "Events" },
    { url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop", cat: "Campus" },
    { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop", cat: "Activities" },
  ];

  const filteredImages = activeTab === 'All' ? images : images.filter(img => img.cat === activeTab);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-blue-950 py-24 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Gallery</h1>
          <p className="text-blue-200 text-xl max-w-2xl mx-auto">Glimpses of life, learning, and celebrations at Sharda Gurukul.</p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeTab === cat 
                  ? "bg-orange-500 text-white shadow-lg scale-105" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-md">
                <img 
                  src={img.url} 
                  alt={img.cat} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    {img.cat}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
