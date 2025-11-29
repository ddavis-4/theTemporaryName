import { useState } from 'react';
import type { Card } from '../types/types';
import { useFortune } from './useFortune';

export const useModal = () => {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fortune hook handles API logic
  const { fortuneResult, isLoading, error } = useFortune(selectedCard, isModalOpen);

  const handleCardSelect = (card: Card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedCard(null), 300);
  };

  return {
    selectedCard,
    isModalOpen,
    fortuneResult,
    isLoading,
    error,
    handleCardSelect,
    handleCloseModal,
  };
};
