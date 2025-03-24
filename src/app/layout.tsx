'use client';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dharmendra Ahirwar | Software Engineer',
  description: 'Portfolio website of Dharmendra Ahirwar, a passionate Software Engineer specializing in web development and modern application architecture.',
  keywords: ['Software Engineer', 'Web Development', 'React', 'Next.js', 'TypeScript', 'Dharmendra Ahirwar', 'kilvish25'],
  authors: [{ name: 'Dharmendra Ahirwar', url: 'https://github.com/kilvish25' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
