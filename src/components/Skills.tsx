'use client';

import React from 'react';
import { FaCode, FaDatabase, FaCloud, FaCogs, FaBrain, FaUsers } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaCode,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript', level: 75 },
        { name: 'Shell Scripting', level: 85 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: FaCogs,
      skills: [
        { name: 'Django', level: 95 },
        { name: 'Spring Boot', level: 85 },
        { name: 'Apache Airflow', level: 90 },
        { name: 'Celery', level: 85 },
        { name: 'NumPy/Pandas', level: 90 },
        { name: 'Apache Kafka', level: 85 },
      ],
    },
    {
      title: 'Databases & Caching',
      icon: FaDatabase,
      skills: [
        { name: 'PostgreSQL', level: 95 },
        { name: 'MySQL', level: 90 },
        { name: 'Redis', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Amazon RDS', level: 85 },
        { name: 'Elasticsearch', level: 80 },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: FaCloud,
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 85 },
        { name: 'AWS', level: 90 },
        { name: 'Azure DevOps', level: 85 },
        { name: 'Terraform', level: 80 },
        { name: 'CI/CD', level: 90 },
      ],
    },
    {
      title: 'System Design',
      icon: FaCogs,
      skills: [
        { name: 'Microservices', level: 90 },
        { name: 'API Design', level: 95 },
        { name: 'Distributed Systems', level: 90 },
        { name: 'High Availability', level: 85 },
        { name: 'System Architecture', level: 90 },
        { name: 'Message Brokers', level: 85 },
      ],
    },
    {
      title: 'Specialized Skills',
      icon: FaBrain,
      skills: [
        { name: 'Quantitative Analysis', level: 90 },
        { name: 'Market Analysis', level: 85 },
        { name: 'Machine Learning', level: 85 },
        { name: 'Real-time Systems', level: 90 },
        { name: 'Parallel Programming', level: 85 },
        { name: 'Data Structures', level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            My technical expertise spans across various domains, from low-level system programming to high-level architecture design and quantitative analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="h-full bg-indigo-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 