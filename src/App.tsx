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

  // Modal hook handles all modal and fortune logic
  const {
    selectedCard,
    isModalOpen,
    fortuneResult,
    isLoading,
    error,
    handleCardSelect,
    handleCloseModal,
  } = useModal();

  // Choose card data based on current theme
  const cards = theme === 'dark' ? darkModeCards : lightModeCards;

  return (
    <div className="app">
      <div className="app-container">
        <Header />
        <div className="app-main">
          <CardHolder cards={cards} onCardSelect={handleCardSelect} />
        </div>
        <Footer />

        {isModalOpen && (
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
