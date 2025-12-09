import { Header } from './comps/header/Header'
import { Footer } from './comps/footer/Footer'
import { CardHolder } from './comps/cardHolder/CardHolder'
import { Modal } from './comps/modal/Modal'
import { darkModeCards, lightModeCards } from './data/cardData'
import { useTheme } from './hooks/useTheme'
import { useModal } from './hooks/useModal'
import './App.css'

export default function App() {
  const { theme } = useTheme();
  const {
    selectedCard,
    isModalOpen,
    fortuneResult,
    isLoading,
    error,
    handleCardSelect,
    handleCloseModal,
  } = useModal();

  const cards = theme === 'dark' ? darkModeCards : lightModeCards;

  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <div className="app-main">
          <CardHolder cards={cards} onCardSelect={handleCardSelect} />
        </div>
        <Footer />

        {isModalOpen && selectedCard && (
          <Modal 
            card={selectedCard} 
            onClose={handleCloseModal}
            fortuneResult={fortuneResult}
            isLoading={isLoading}
            error={error}
          />
        )}
      </div>
    </div>
  );
}
