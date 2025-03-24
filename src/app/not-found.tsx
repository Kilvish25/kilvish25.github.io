import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-4">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-md"
      >
        Go Home
      </Link>
    </div>
  );
} 