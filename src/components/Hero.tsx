'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import EditableContent from './admin/EditableContent';

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
    <section id="home" className="relative min-h-screen flex items-center transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 transition-colors duration-300 -z-10" />
      
      <div className="container mx-auto px-4 py-16 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <EditableContent
              identifier="hero-title"
              type="TEXT"
              defaultContent="Hello, I'm Dharmendra Ahirwar"
              className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4 transition-colors duration-300"
              as="h2"
            />
            <EditableContent
              identifier="hero-subtitle"
              type="TEXT"
              defaultContent="Software Engineer"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300"
              as="h1"
            />
            <EditableContent
              identifier="hero-description"
              type="TEXT"
              defaultContent="I build beautiful, responsive, and user-friendly websites and applications. Passionate about creating exceptional digital experiences with modern technologies."
              className="text-lg text-gray-700 dark:text-gray-200 mb-8 transition-colors duration-300"
              as="p"
            />
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-md hover:shadow-lg 
                           transition-all duration-300 text-gray-800 dark:text-gray-200 hover:text-indigo-600 
                           dark:hover:text-indigo-400 hover:transform hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg 
                         hover:bg-indigo-700 dark:hover:bg-indigo-600 shadow-md transition-all duration-300 
                         hover:transform hover:scale-105"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-8 py-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 
                         dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                         shadow-md transition-all duration-300 hover:transform hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden 
                          shadow-xl transform hover:scale-105 transition-all duration-300">
              <Image
                src="/images/profile.JPG"
                alt="Dharmendra Ahirwar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 