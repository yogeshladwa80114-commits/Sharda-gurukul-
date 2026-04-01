import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, MapPin, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">SG</div>
          <div className="flex flex-col">
            <span className={cn("font-bold text-lg leading-tight", isScrolled ? "text-blue-900" : "text-white")}>SHARDA GURUKUL</span>
            <span className={cn("text-xs font-semibold tracking-widest", isScrolled ? "text-orange-600" : "text-orange-200")}>KALESRA</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "font-medium transition-colors hover:text-orange-500",
                location.pathname === link.path 
                  ? "text-orange-500" 
                  : isScrolled ? "text-blue-900" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/admissions" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition-transform hover:scale-105"
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={cn("lg:hidden p-2", isScrolled ? "text-blue-900" : "text-white")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={cn(
                    "text-lg font-semibold p-2 rounded-lg",
                    location.pathname === link.path ? "bg-orange-50 text-orange-600" : "text-blue-900"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <Link to="/admissions" className="bg-orange-500 text-white text-center py-3 rounded-lg font-bold">Apply Now</Link>
                <a href="tel:+919876543210" className="bg-blue-900 text-white text-center py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                  <Phone size={18} /> Call
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">SG</div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">SHARDA GURUKUL</span>
                <span className="text-xs font-semibold tracking-widest text-orange-400">KALESRA</span>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Empowering students with a blend of traditional Gurukul values and modern academic excellence. Shaping the leaders of tomorrow.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-orange-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-orange-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center hover:bg-orange-500 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-blue-100 hover:text-orange-400 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">Admissions</h4>
            <ul className="space-y-4">
              <li><Link to="/admissions" className="text-blue-100 hover:text-orange-400 transition-colors">Admission Process</Link></li>
              <li><Link to="/admissions" className="text-blue-100 hover:text-orange-400 transition-colors">Fee Structure</Link></li>
              <li><Link to="/admissions" className="text-blue-100 hover:text-orange-400 transition-colors">Eligibility Criteria</Link></li>
              <li><Link to="/admissions" className="text-blue-100 hover:text-orange-400 transition-colors">Required Documents</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-orange-500 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-orange-500 shrink-0" />
                <span className="text-blue-100">Kalesra, Near Main Road, District Agra, Uttar Pradesh - 282007</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-orange-500 shrink-0" />
                <span className="text-blue-100">+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-orange-500 shrink-0" />
                <span className="text-blue-100">info@shardagurukul.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-900 text-center text-blue-300 text-sm">
          <p>© {new Date().getFullYear()} Sharda Gurukul Kalesra. All Rights Reserved. | Designed for Excellence</p>
        </div>
      </div>

      {/* Sticky Mobile CTAs */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 grid grid-cols-2 z-40">
        <a href="tel:+919876543210" className="bg-blue-900 text-white py-4 flex items-center justify-center gap-2 font-bold border-r border-blue-800">
          <Phone size={20} /> Call Now
        </a>
        <a href="https://wa.me/919876543210" className="bg-green-600 text-white py-4 flex items-center justify-center gap-2 font-bold">
          <MessageCircle size={20} /> WhatsApp
        </a>
      </div>
    </footer>
  );
};
