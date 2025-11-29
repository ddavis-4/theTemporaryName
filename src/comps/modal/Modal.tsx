import React from 'react';
import type { Card } from '../../types/types';
import './Modal.css';

interface ModalProps {
  card: Card | null;
  onClose: () => void;
  fortuneResult?: string;
  isLoading?: boolean;
  error?: string | null;
}

export const Modal = ({ card, onClose, fortuneResult, isLoading, error }: ModalProps) => {
  if (!card) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-backdrop" onClick={onClose}></div>

      <div className="modal-content">
        <div className="modal-image-container">
          <img
            src={card.image}
            alt={card.title}
            className="modal-image"
          />
          <div className="modal-image-overlay"></div>
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{card.title}</h2>

          <div className="modal-loading">
            <div className="modal-loading-dots">
              <div className="modal-loading-dot"></div>
              <div className="modal-loading-dot"></div>
              <div className="modal-loading-dot"></div>
            </div>
            <p className="modal-loading-text">
              Consulting the mystic forces...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};