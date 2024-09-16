"use client"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features"; 
import CTA from "./components/CTA";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="">
    <Navbar/>  
    <Hero/>
    <Features/>
    <CTA/>
    <Footer/>
    </main>
  );
}
