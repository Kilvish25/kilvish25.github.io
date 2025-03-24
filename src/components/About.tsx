'use client';

import React from 'react';
import { FaCode, FaChartLine, FaLaptopCode, FaServer, FaBrain, FaBasketballBall } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaChartLine className="w-8 h-8 text-indigo-600" />,
      title: 'Quantitative Finance',
      description:
        'Passionate about financial markets and building sophisticated trading systems using technology and data science.',
    },
    {
      icon: <FaCode className="w-8 h-8 text-indigo-600" />,
      title: 'Complex Problem Solving',
      description:
        'I thrive on tackling complex technical challenges and building scalable solutions that make a real impact.',
    },
    {
      icon: <FaLaptopCode className="w-8 h-8 text-indigo-600" />,
      title: 'Competitive Programming',
      description:
        'Active participant in competitive programming, constantly honing my algorithmic and problem-solving skills.',
    },
    {
      icon: <FaServer className="w-8 h-8 text-indigo-600" />,
      title: 'System Architecture',
      description:
        'Experienced in designing and implementing distributed systems and microservices architectures.',
    },
    {
      icon: <FaBrain className="w-8 h-8 text-indigo-600" />,
      title: 'AI Integration',
      description:
        'Skilled in integrating AI/ML solutions for market analysis and automated decision-making systems.',
    },
    {
      icon: <FaBasketballBall className="w-8 h-8 text-indigo-600" />,
      title: 'Sports Enthusiast',
      description:
        'Passionate about basketball and badminton, bringing the same competitive spirit to both sports and coding.',
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
            I'm Dharmendra Ahirwar, a Software Engineer with a passion for building impactful technology solutions in quantitative finance and distributed systems.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Currently working with the founding team at Hillroute Capital, a Crypto Hedge Fund, where I'm responsible for building critical trading infrastructure and market analysis systems. My expertise spans real-time applications, parallel programming, and integrating AI for market sentiment analysis.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            With a B.Tech in Mathematics and Computing from IIT Delhi, I combine strong technical skills with a deep interest in quantitative finance. When I'm not coding or analyzing markets, you'll find me on the basketball court or engaging in competitive programming challenges.
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