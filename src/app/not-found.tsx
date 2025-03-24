import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Page not found</p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Go back home
        </a>
      </div>
    </div>
  );
} 