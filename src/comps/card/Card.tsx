import React from 'react';
import type { Card as CardType } from '../../types/types';
import './Card.css';

interface CardProps {
	card: CardType;
	isActive: boolean;
	onClick: () => void;
	primary: string;
	secondary: string;
}

export const Card = ({ card, isActive, onClick, primary, secondary }: CardProps) => {
	return (
		<div
			onClick={onClick}
			className={`card ${isActive ? 'card-active' : 'card-inactive'}`}
			style={{
				'--card-primary': primary,
				'--card-secondary': secondary,
			} as React.CSSProperties}
		>
			<div className="card-content">
				<h3 className="card-title">{card.title}</h3>
			</div>
		</div>
	);
};