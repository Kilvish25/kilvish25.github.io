'use client';

import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const workHistory = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'Bangalore, India',
      period: 'Jan 2022 - Present',
      description: 'Leading the development of enterprise web applications using React, Next.js, and Node.js. Implementing CI/CD pipelines and mentoring junior developers. Reduced application load time by 40% through code optimization.',
      responsibilities: [
        'Architected and developed scalable frontend solutions',
        'Implemented authentication and authorization systems',
        'Optimized application performance and reduced load times',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Digital Innovations Ltd.',
      location: 'Hyderabad, India',
      period: 'Jun 2019 - Dec 2021',
      description: 'Developed responsive web applications using React, TypeScript, and Redux. Collaborated with UX designers and backend teams to implement new features and improve user experience.',
      responsibilities: [
        'Built reusable UI components using React and styled-components',
        'Implemented state management using Redux and Context API',
        'Created unit tests with Jest and React Testing Library',
        'Participated in agile development process and sprint planning'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'WebTech Solutions',
      location: 'Pune, India',
      period: 'Aug 2017 - May 2019',
      description: 'Started as an intern and quickly progressed to a full-time role. Worked on frontend development using HTML, CSS, JavaScript, and React. Assisted in developing and maintaining company websites and web applications.',
      responsibilities: [
        'Developed responsive user interfaces using HTML, CSS, and JavaScript',
        'Assisted in migrating legacy applications to React',
        'Fixed bugs and implemented new features',
        'Collaborated with team members on code reviews and debugging'
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
            My professional journey and the companies I've had the pleasure to work with.
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
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {job.description}
                  </p>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Responsibilities:
                    </h5>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 pl-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="mb-1">{responsibility}</li>
                      ))}
                    </ul>
                  </div>
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