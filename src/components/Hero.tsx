'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/kilvish25',
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kilvish25',
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kilvish25',
      icon: <FaTwitter className="w-6 h-6" />,
    },
    {
      name: 'Email',
      url: 'mailto:dharmendra.ahirwar101@gmail.com',
      icon: <FaEnvelope className="w-6 h-6" />,
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-900 dark:to-indigo-950 -z-10" />
      
      <div className="container mx-auto px-4 py-16 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Hello, I'm Dharmendra Ahirwar
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Software Engineer
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              I build beautiful, responsive, and user-friendly websites and applications.
              Passionate about creating exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden shadow-xl">
              {/* Replace with your profile image */}
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                DA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 