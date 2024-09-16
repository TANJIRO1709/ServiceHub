"use client";

// Optionally create a theme file or use the default one
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features'; 
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    
      <main>
        <Navbar />  
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </main>
  
  );
}
function mode(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}

