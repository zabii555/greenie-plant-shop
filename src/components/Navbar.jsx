import React, { useState } from 'react';
import { Phone, ChevronDown, Menu, X, ShieldCheck, Clock } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const services = [
    { name: 'Safe Tree Removal', href: '#services' },
    { name: 'Tree Trimming & Pruning', href: '#services' },
    { name: 'Stump Grinding', href: '#services' },
    { name: 'Debris & Brush Cleanup', href: '#services' },
    { name: 'Storm Damage Response', href: '#services' },
    { name: 'Crane-Assisted Removal', href: '#services' },
  ];

  return (
    <header className="w-full bg-[#f6f6f0] border-b border-stone-200 sticky top-0 z-50 transition-all">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4 border-b border-stone-200/70">
          {/* Phone Call Section */}
          <div className="flex items-center gap-2">
            <span className="text-xs md:text-sm font-semibold text-stone-500 uppercase tracking-wider hidden sm:inline">
              Call Us Today:
            </span>
            <a 
              href="tel:8135551212" 
              className="text-lg md:text-xl font-bold text-stone-900 hover:text-emerald-700 transition flex items-center gap-1.5 font-display"
            >
              <Phone className="w-5 h-5 text-emerald-700 fill-emerald-100" />
              (813) 555-1212
            </a>
          </div>

          {/* Logo Center */}
          <a href="#" className="flex items-center justify-center">
            <Logo />
          </a>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm md:text-base px-5 py-2.5 rounded-md shadow-sm transition hover:shadow duration-200 flex items-center gap-2 border border-emerald-800"
            >
              Get A Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-emerald-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Main Navigation Links Bar */}
        <nav className="hidden md:flex items-center justify-center space-x-8 py-3.5 text-sm font-medium text-stone-700">
          <a href="#" className="hover:text-emerald-700 font-semibold transition py-1 text-stone-900 border-b-2 border-emerald-700">
            Homepage
          </a>
          <a href="#about" className="hover:text-emerald-700 transition py-1">
            About Us
          </a>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <a 
              href="#services" 
              className="hover:text-emerald-700 transition py-1 flex items-center gap-1 cursor-pointer"
            >
              Tree Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-emerald-700' : ''}`} />
            </a>

            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-60 bg-white rounded-lg shadow-xl border border-stone-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {services.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-stone-700 hover:bg-emerald-50 hover:text-emerald-800 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#service-areas" className="hover:text-emerald-700 transition py-1">
            Service Areas
          </a>
          <a href="#reviews" className="hover:text-emerald-700 transition py-1">
            Reviews
          </a>
          <a href="#faq" className="hover:text-emerald-700 transition py-1">
            FAQ
          </a>
          <a href="#contact" className="hover:text-emerald-700 transition py-1">
            Contact
          </a>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-emerald-800 border-b border-stone-200"
          >
            Homepage
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-700 hover:text-emerald-700 border-b border-stone-200"
          >
            About Us
          </a>
          <div className="py-2 border-b border-stone-200">
            <span className="block text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Our Services
            </span>
            <div className="grid grid-cols-1 gap-1 pl-2">
              {services.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-1 text-sm text-stone-600 hover:text-emerald-700"
                >
                  • {s.name}
                </a>
              ))}
            </div>
          </div>
          <a
            href="#service-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-700 hover:text-emerald-700 border-b border-stone-200"
          >
            Service Areas
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-700 hover:text-emerald-700 border-b border-stone-200"
          >
            Reviews
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-700 hover:text-emerald-700 border-b border-stone-200"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-700 hover:text-emerald-700 border-b border-stone-200"
          >
            Contact Us
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full mt-3 bg-emerald-700 text-white font-semibold py-3 rounded-md shadow text-center"
          >
            Get A Free Quote
          </button>
        </div>
      )}
    </header>
  );
};
