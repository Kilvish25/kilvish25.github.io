'use client';

import React from 'react';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaTrophy } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const educationHistory = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Mathematics and Computing',
      institution: 'Indian Institute of Technology, Delhi',
      location: 'New Delhi, India',
      period: '2018 - 2022',
      description: 'Graduated with honors, focusing on software development, algorithms, and data structures.',
      achievements: [
        'Awarded Kishor Vaigyanik Protsahan Yojana (KVPY) Fellowship (SX Stream) – 2018',
        'Qualified Joint Entrance Exam (JEE) Advanced with top ranks',
        'Participated in various coding competitions and hackathons',
        'Key courses: Data Structures, Algorithms, Operating Systems, Database Management, Machine Learning'
      ]
    },
    {
      degree: 'Higher Secondary Education',
      field: 'Science & Mathematics',
      institution: 'Jawahar Navodaya Vidyalaya, Bundi',
      location: 'Bundi, Rajasthan, India',
      period: '2016 - 2018',
      description: 'Completed higher secondary education with distinction in Physics, Chemistry, and Mathematics.',
      achievements: [
        'Awarded Dakshana Fellowship for JEE coaching',
        'Achieved excellent academic performance',
        'Participated in various academic competitions',
        'Selected for specialized JEE preparation program'
      ]
    },
    {
      degree: 'Secondary Education',
      field: 'General',
      institution: 'Jawahar Navodaya Vidyalaya, Vidisha',
      location: 'Vidisha, Madhya Pradesh, India',
      period: '2014 - 2016',
      description: 'Completed secondary education with excellent academic performance.',
      achievements: [
        'Consistently maintained top academic performance',
        'Participated in various extracurricular activities',
        'Developed strong foundation in mathematics and sciences',
        'Active participation in sports and cultural activities'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey and achievements that laid the foundation for my career in software engineering and quantitative finance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-indigo-500">
            {educationHistory.map((education, index) => (
              <div 
                key={index} 
                className="mb-12 relative"
              >
                <div className="absolute -left-[25px] w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                  <FaGraduationCap className="text-indigo-600 w-6 h-6" />
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md ml-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <h4 className="text-lg font-medium text-indigo-600 mb-2">
                    {education.field}
                  </h4>
                  <div className="flex items-center mb-2">
                    <FaUniversity className="text-gray-500 w-4 h-4 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {education.institution}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-gray-500 w-4 h-4 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {education.location}
                      </span>
                    </div>
                    
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-gray-500 w-4 h-4 mr-2" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {education.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {education.description}
                  </p>

                  <div>
                    <h5 className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <FaTrophy className="text-yellow-500 w-4 h-4 mr-2" />
                      Key Achievements
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {education.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
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

export default Education; 