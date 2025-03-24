'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

interface EditableContentProps {
  identifier: string;
  defaultContent: string;
  type: 'TEXT' | 'RICH_TEXT' | 'LIST' | 'CARD' | 'TIMELINE_ITEM';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function EditableContent({
  identifier,
  defaultContent,
  type,
  className = '',
  as: Component = 'div'
}: EditableContentProps) {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(defaultContent);
  const [isSaving, setIsSaving] = useState(false);

  const isAdmin = session?.user?.role === 'ADMIN';

  const handleDoubleClick = () => {
    if (isAdmin) {
      setIsEditing(true);
    }
  };

  const handleSave = async () => {
    if (!isAdmin) return;
    
    setIsSaving(true);
    try {
      const response = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier,
          content,
          type,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save content');
      }

      setIsEditing(false);
    } catch (error) {
      console.error('Error saving content:', error);
      // You might want to show an error message to the user
    } finally {
      setIsSaving(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === 'Escape') {
      setIsEditing(false);
      setContent(defaultContent);
    }
  };

  if (isEditing) {
    return (
      <div className="relative group">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
          autoFocus
          disabled={isSaving}
        />
        {isSaving && (
          <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 flex items-center justify-center">
            <span className="text-sm text-gray-500">Saving...</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <Component
      onDoubleClick={handleDoubleClick}
      className={`${className} ${isAdmin ? 'cursor-pointer hover:ring-2 hover:ring-indigo-500 hover:ring-opacity-50 rounded' : ''}`}
    >
      {content}
      {isAdmin && (
        <div className="hidden group-hover:block absolute top-0 right-0 bg-indigo-500 text-white text-xs px-2 py-1 rounded-bl">
          Double-click to edit
        </div>
      )}
    </Component>
  );
} 