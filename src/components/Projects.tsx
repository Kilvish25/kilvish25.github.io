'use client';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.com',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/yourusername/taskmanager',
      demo: 'https://taskmanager-demo.com',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://portfolio-demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A collection of my recent work and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-xl bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                <span className="text-xl font-bold text-indigo-600 dark:text-indigo-300">{project.title}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 