'use client';

import React from 'react';
import { FaCalendarAlt, FaTag } from 'react-icons/fa';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'Understanding the Modern JavaScript Ecosystem',
      excerpt: 'Exploring the current state of JavaScript libraries, frameworks, and tools that are shaping frontend development in 2023.',
      date: 'July 15, 2023',
      category: 'JavaScript',
      image: '/blog1.jpg',
      url: '#',
    },
    {
      title: 'Building Scalable APIs with Node.js and Express',
      excerpt: 'Learn how to create robust and maintainable backend services using Node.js and Express with best practices.',
      date: 'June 22, 2023',
      category: 'Backend',
      image: '/blog2.jpg',
      url: '#',
    },
    {
      title: 'React vs Next.js: When to Use What',
      excerpt: 'A comprehensive comparison of React and Next.js, with guidelines on choosing the right tool for your project.',
      date: 'May 10, 2023',
      category: 'Frontend',
      image: '/blog3.jpg',
      url: '#',
    },
    {
      title: 'The Rise of TypeScript in Modern Development',
      excerpt: 'How TypeScript has transformed the way we write JavaScript and why it\'s becoming a standard in professional development.',
      date: 'April 5, 2023',
      category: 'TypeScript',
      image: '/blog4.jpg',
      url: '#',
    },
  ];

  return (
    <section id="blogs" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing my thoughts, experiences, and knowledge about software development and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-300 dark:bg-gray-700 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                  Blog Image
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FaCalendarAlt className="mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center text-sm text-indigo-600 dark:text-indigo-400">
                    <FaTag className="mr-2" />
                    {post.category}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <a
                  href={post.url}
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs; 