import React from 'react';
import type { Card as CardType } from '../../types/types';
import './Card.css';

interface CardProps {
	card: CardType;
	isActive: boolean;
	onClick: () => void;
}

export const Card = ({ card, isActive, onClick }: CardProps) => {
	return (
		<div onClick={onClick} className={`card ${isActive ? 'card-active' : 'card-inactive'}`} >
			<div className="card-content">
				<h3 className="card-title">{card.title}</h3>
			</div>
		</div>
	);
};