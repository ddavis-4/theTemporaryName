import { useState, useEffect } from 'react';
import type { Card, UseFortune, FortuneAPIRequest, FortuneAPIResponse } from '../types/types';

export const useFortune = (card: Card | null, isOpen: boolean): UseFortune => {
  const [fortuneResult, setFortuneResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!card || !isOpen) {
      return;
    }

    const fetchFortune = async () => {
      setIsLoading(true);
      setError(null);
      setFortuneResult('');

      try {
        const requestBody: FortuneAPIRequest = {
          fortuneType: card.id,
          title: card.title
        };

        const response = await fetch('/api/fortune', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch fortune: ${response.status}`);
        }

        const data: FortuneAPIResponse = await response.json();
        setFortuneResult(data.fortune || data.message || 'Your fortune awaits...');
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch fortune';
        setError(errorMessage);
        console.error('Fortune fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFortune();
  }, [card, isOpen]);

  return { fortuneResult, isLoading, error };
};