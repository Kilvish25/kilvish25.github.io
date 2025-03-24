'use client';

import React from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt, FaServer, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaCode className="w-8 h-8 text-indigo-600" />,
      title: 'Clean Code',
      description:
        'I write clean, maintainable, and efficient code following best practices and industry standards.',
    },
    {
      icon: <FaLaptopCode className="w-8 h-8 text-indigo-600" />,
      title: 'Modern Technologies',
      description:
        'I stay updated with the latest technologies and frameworks to build cutting-edge applications.',
    },
    {
      icon: <FaMobileAlt className="w-8 h-8 text-indigo-600" />,
      title: 'Responsive Design',
      description:
        'I create responsive designs that work flawlessly across all devices and screen sizes.',
    },
    {
      icon: <FaServer className="w-8 h-8 text-indigo-600" />,
      title: 'Backend Development',
      description:
        'I develop robust backend systems with secure APIs and efficient database management.',
    },
    {
      icon: <FaUsers className="w-8 h-8 text-indigo-600" />,
      title: 'Team Collaboration',
      description:
        'I thrive in collaborative environments and effectively communicate complex technical concepts.',
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-indigo-600" />,
      title: 'Problem Solving',
      description:
        'I enjoy tackling complex problems and finding elegant solutions through creative thinking.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm Dharmendra Ahirwar, also known as Kilvish in the tech community. I'm a passionate Software Engineer with a focus on creating clean, efficient, and user-friendly applications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            With a strong foundation in both frontend and backend technologies, I specialize in building comprehensive software solutions that solve real-world problems. My journey in software development began with a curiosity about how applications work, which evolved into a passion for creating them myself.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I believe in continuous learning and regularly explore new technologies to enhance my skill set. When I'm not coding, you might find me reading tech blogs, contributing to open-source projects, or mentoring aspiring developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 