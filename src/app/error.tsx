'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Error</h1>
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Something went wrong!</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        An unexpected error has occurred. Please try again later.
      </p>
      <button
        onClick={reset}
        className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md"
      >
        Try Again
      </button>
    </div>
  );
} 