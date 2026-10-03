import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

/* Social icons as inline SVGs (lucide-react v1.48 removed Facebook/Instagram/Twitter) */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Tree Services', href: '#services' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Safe Tree Removal',
  'Tree Trimming & Pruning',
  'Stump Grinding',
  'Debris & Brush Cleanup',
  'Storm Damage Response',
  'Crane-Assisted Removal',
];

export const Footer = () => {
  return (
    <footer className="bg-[#061a10] text-stone-300 border-t border-emerald-950">

      {/* Top CTA Bar */}
      <div className="bg-emerald-700 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold text-base sm:text-lg font-display uppercase tracking-wide text-center sm:text-left">
            Ready for your free, no-obligation estimate?
          </p>
          <a
            href="tel:8135551212"
            className="shrink-0 bg-white text-emerald-800 hover:bg-emerald-50 font-bold px-6 py-2.5 rounded-lg shadow transition text-sm"
          >
            Call (813) 555-1212 Now
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Brand */}
        <div className="space-y-4">
          <Logo className="h-auto" />
          <p className="text-stone-400 text-sm leading-relaxed">
            Florida's #1 Locally Owned Tree Service. Serving the greater Tampa Bay area for 15+ years with honesty, expertise, and care.
          </p>
          <div className="flex gap-3 pt-1">
            <a href="#" aria-label="Facebook" className="w-9 h-9 bg-emerald-900 hover:bg-emerald-700 rounded-full flex items-center justify-center transition">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="w-9 h-9 bg-emerald-900 hover:bg-emerald-700 rounded-full flex items-center justify-center transition">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="Twitter/X" className="w-9 h-9 bg-emerald-900 hover:bg-emerald-700 rounded-full flex items-center justify-center transition">
              <XIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 font-display border-b border-emerald-900 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="text-stone-400 hover:text-emerald-400 text-sm transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 font-display border-b border-emerald-900 pb-2">
            Our Services
          </h4>
          <ul className="space-y-2">
            {serviceLinks.map((service, idx) => (
              <li key={idx}>
                <a
                  href="#services"
                  className="text-stone-400 hover:text-emerald-400 text-sm transition"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 font-display border-b border-emerald-900 pb-2">
            Contact
          </h4>
          <ul className="space-y-3">
            <li>
              <a href="tel:8135551212" className="flex items-start gap-2 text-stone-400 hover:text-emerald-400 text-sm transition">
                <Phone className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                (813) 555-1212
              </a>
            </li>
            <li>
              <a href="mailto:info@floridasTreeSurgeons.com" className="flex items-start gap-2 text-stone-400 hover:text-emerald-400 text-sm transition">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                info@floridasTreeSurgeons.com
              </a>
            </li>
            <li>
              <span className="flex items-start gap-2 text-stone-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                Brandon, FL 33510<br />Hillsborough County
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-950 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Florida's Tree Surgeons LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
