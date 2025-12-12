import './CardHolder.css';
import React, { useState } from 'react';
import { Card as CardComponent } from '../card/Card';
import type { Card } from '../../types/types';

// This is also a Holder not a Carousel

interface CardHolderProps {
	cards: Card[];
	onCardSelect?: (card: Card) => void;
}

export const CardHolder = ({ cards, onCardSelect }: CardHolderProps) => {
	const [current, setCurrent] = useState(0);

	const toPrevious = () => {
		setCurrent((prevIndex) => prevIndex === 0 ? cards.length - 1 : prevIndex - 1);
	};

	const toNext = () => {
		setCurrent((prevIndex) => prevIndex === cards.length - 1 ? 0 : prevIndex + 1);
	};

	const cardPosition = (index: number) => {
		const diff = index - current;
    
    	if (diff === 0) return 'center';
    	if (diff === 1 || diff === -(cards.length - 1)) return 'right';
    	if (diff === -1 || diff === cards.length - 1) return 'left';
    	return 'hidden';
	};

	const cardClick = (index: number) => {
		if (index === current) {
			onCardSelect?.(cards[current]);
		} else if (current === cards.length - 1 && index === 0) {
			toNext();
		} else if (index < current || (current === 0 && index === cards.length - 1)) {
			toPrevious();
		} else {
			toNext();
		}
	};

	return (
		<div className="holder-container">
      <div className="holder-cards">
        {cards.map((card, index) => {
          const position = cardPosition(index);
          return (
            <div
              key={card.id}
              className={`holder-card-wrapper holder-card-${position}`}
            >
              <CardComponent
                card={card}
                isActive={position === 'center'}
                onClick={() => cardClick(index)}
                primary={card.colors.primary}
                secondary={card.colors.secondary}
              />
            </div>
          );
        })}
      </div>

      <div className="holder-indicators">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`holder-indicator ${index === current ? 'holder-indicator-active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}