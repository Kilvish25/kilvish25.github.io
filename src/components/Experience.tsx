'use client';

import React from 'react';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const workHistory = [
    {
      title: 'Software Engineer',
      company: 'Hillroute Capital',
      location: 'Noida, India',
      period: 'August 2023 - Present',
      description: `Working with the founding team to build critical trading infrastructure and market analysis systems. 
      Developed real-time applications using websockets and parallel programming for market monitoring. 
      Implemented market sentiment analysis using AI/ML to generate actionable trading insights. 
      Technologies: Python, PostgreSQL, Redis, AWS, WebSockets, Machine Learning.`,
      achievements: [
        'Built real-time market monitoring applications with parallel processing capabilities',
        'Integrated AI/ML models for market sentiment analysis and trading signals',
        'Developed scalable infrastructure for high-frequency trading operations',
        'Implemented robust data pipelines for market data processing and analysis'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Helloverify India Private Limited',
      location: 'India',
      period: 'July 2022 - August 2023',
      description: `Led development of scalable software systems using Python and Django, achieving 200% efficiency improvement. 
      Architected microservices to resolve scaling issues and reduce downtime by 40%. 
      Implemented comprehensive security measures and automated CI/CD pipelines.`,
      achievements: [
        'Optimized database schemas improving performance by 40%',
        'Integrated SonarQube and SOOS for security assessments',
        'Reduced deployment time by 50% through CI/CD automation',
        'Improved server performance by 70% using Gunicorn, Nginx, Celery, and Redis'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Pirates India',
      location: 'India',
      period: 'May 2020 - August 2020',
      description: `Designed scalable database schemas handling 50,000+ daily transactions. 
      Engineered a Python-based recommendation engine using machine learning. 
      Collaborated with multiple stakeholders to improve development efficiency.`,
      achievements: [
        'Reduced query time by 30% for 100,000+ records',
        'Improved content relevance boosting user read-time by 25-30%',
        'Reduced development cycle time by 20%',
        'Collaborated across 3 departments to streamline development processes'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My journey in software engineering, from internship to building critical financial systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-indigo-500">
            {workHistory.map((job, index) => (
              <div 
                key={index} 
                className="mb-12 relative"
              >
                <div className="absolute -left-[25px] w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <FaBriefcase className="text-indigo-600 w-6 h-6" />
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {job.title}
                  </h3>
                  <h4 className="text-lg font-medium text-indigo-600 mb-2">
                    {job.company}
                  </h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-gray-500 w-4 h-4 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {job.location}
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-gray-500 w-4 h-4 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {job.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">
                    {job.description}
                  </p>

                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 