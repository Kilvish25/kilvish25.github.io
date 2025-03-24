'use client';

import React from 'react';
import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-indigo-600 mb-4">Test Page</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          This is a simple test page to verify that Tailwind CSS is working correctly.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-blue-100 p-4 rounded-lg text-blue-700">Blue Box</div>
          <div className="bg-green-100 p-4 rounded-lg text-green-700">Green Box</div>
          <div className="bg-red-100 p-4 rounded-lg text-red-700">Red Box</div>
          <div className="bg-yellow-100 p-4 rounded-lg text-yellow-700">Yellow Box</div>
        </div>
        
        <Link href="/" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
} 