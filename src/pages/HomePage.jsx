import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { ServiceAreasSection } from '../components/ServiceAreasSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage = ({ onOpenQuote }) => (
  <main>
    <HeroSection onOpenQuote={onOpenQuote} />
    <AboutSection />
    <ServicesSection onOpenQuote={onOpenQuote} />
    <ServiceAreasSection onOpenQuote={onOpenQuote} />
    <ReviewsSection />
    <FAQSection />
    <ContactSection />
  </main>
);
