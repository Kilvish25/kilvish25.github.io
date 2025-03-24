'use client';

import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FaCog, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';

export default function AdminPanel() {
  const { data: session } = useSession();
  const [isExpanded, setIsExpanded] = useState(false);

  if (!session) {
    return (
      <button
        onClick={() => signIn()}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200"
        title="Sign In"
      >
        <FaSignInAlt className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div
      className={`fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-200 ${
        isExpanded ? 'w-64 p-4' : 'w-auto p-2'
      }`}
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
          title={isExpanded ? 'Collapse' : 'Expand'}
        >
          <FaCog className={`w-6 h-6 text-indigo-600 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`} />
        </button>
        
        {isExpanded && (
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <p className="font-medium text-gray-900 dark:text-white">
                {session.user?.name}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                {session.user?.email}
              </p>
            </div>
            <button
              onClick={() => signOut()}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              title="Sign Out"
            >
              <FaSignOutAlt className="w-5 h-5 text-red-500" />
            </button>
          </div>
        )}
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Admin Mode Active
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Double-click any text to edit
          </p>
        </div>
      )}
    </div>
  );
} 