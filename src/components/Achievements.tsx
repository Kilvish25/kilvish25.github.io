'use client';

import React from 'react';
import { FaTrophy, FaMedal, FaCertificate, FaAward } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy className="w-10 h-10 text-yellow-500" />,
      title: 'Hackathon Winner',
      organization: 'Tech Conference 2023',
      description: 'First place in the 48-hour hackathon, developing an innovative solution for healthcare challenges.',
    },
    {
      icon: <FaCertificate className="w-10 h-10 text-indigo-600" />,
      title: 'AWS Certified Solutions Architect',
      organization: 'Amazon Web Services',
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
    },
    {
      icon: <FaMedal className="w-10 h-10 text-amber-600" />,
      title: 'Outstanding Contributor',
      organization: 'Open Source Project',
      description: 'Recognized for significant contributions to a major open-source project used by thousands of developers.',
    },
    {
      icon: <FaAward className="w-10 h-10 text-blue-600" />,
      title: 'Best Technical Article',
      organization: 'Tech Blog Platform',
      description: 'Award for authoring a comprehensive technical guide that received over 100,000 views.',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition and accomplishments throughout my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex"
            >
              <div className="mr-4 flex-shrink-0">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-indigo-600 font-medium mb-3">
                  {achievement.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 