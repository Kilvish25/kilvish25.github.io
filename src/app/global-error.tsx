'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl font-bold text-red-600 mb-4">Error</h1>
          <h2 className="text-3xl font-semibold mb-6">Something went wrong!</h2>
          <p className="mb-8 max-w-md">
            An unexpected error has occurred at the root level.
          </p>
          <button
            onClick={reset}
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
} 