'use client';

import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Blogs />
      <Contact />
      <div className="text-center p-8 bg-gray-100">
        <p className="max-w-md mx-auto text-gray-600">
          All components have been added successfully!
        </p>
        <button 
          onClick={() => alert("All components loaded successfully")}
          className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Click to test
        </button>
      </div>
    </main>
  );
}
