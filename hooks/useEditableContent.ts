'use client';

import { useState, useEffect } from 'react';

interface UseEditableContentProps {
  identifier: string;
  defaultContent: string;
}

export function useEditableContent({ identifier, defaultContent }: UseEditableContentProps) {
  const [content, setContent] = useState(defaultContent);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/content?identifier=${identifier}`);
        
        if (response.ok) {
          const data = await response.json();
          setContent(data.content);
        } else if (response.status !== 404) {
          // 404 is expected for new content, don't treat it as an error
          throw new Error('Failed to fetch content');
        }
      } catch (error) {
        console.error('Error fetching content:', error);
        setError(error instanceof Error ? error.message : 'Failed to fetch content');
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
  }, [identifier]);

  return {
    content,
    setContent,
    isLoading,
    error
  };
} 