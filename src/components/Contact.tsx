'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out. I'm always open to new ideas and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Send Me a Message
            </h3>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="I'd like to discuss a project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-indigo-600 w-5 h-5 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Based in India</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-indigo-600 w-5 h-5 mr-3" />
                <a 
                  href="mailto:dharmendra.ahirwar101@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  dharmendra.ahirwar101@gmail.com
                </a>
              </div>
            </div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Connect With Me
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 