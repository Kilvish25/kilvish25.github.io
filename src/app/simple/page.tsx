'use client';

import React from 'react';
import Link from 'next/link';

export default function SimplePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Simple Test</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
              Basic Tailwind Test Page
            </h1>
            <p className="mt-2 text-gray-500">
              Testing if Tailwind CSS is working correctly on this page.
            </p>
            <button 
              onClick={() => alert('Styling works!')}
              className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
            >
              Test Button
            </button>
            <div className="mt-4">
              <Link href="/" className="text-indigo-500 hover:text-indigo-700">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 