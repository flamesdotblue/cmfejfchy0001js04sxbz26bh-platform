import React from 'react';
import Hero from './components/Hero';
import ProgramFlow from './components/ProgramFlow';
import Partners from './components/Partners';
import MentorsTestimonialsCTA from './components/MentorsTestimonialsCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0e12] text-white font-inter">
      <Hero />
      <ProgramFlow />
      <Partners />
      <MentorsTestimonialsCTA />
    </div>
  );
}
