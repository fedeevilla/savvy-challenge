import React, { useState, useEffect } from 'react'
import CardsList from './components/CardsList'
import { getCards } from './api'

import './App.css'

function App() {
  const [selectedCardId, setSelectedCardId] = useState()
  const [cards, setCards] = useState([])
  const [isLoadingCards, setIsLoadingCards] = useState(false)

  useEffect(() => {
    setIsLoadingCards(true)
    getCards()
      .then(json => {
        setIsLoadingCards(false)
        setCards(json)
      });
  }, []);

  const selectedCard = cards.find(
    card => card.id === selectedCardId
  )

  return (
    <div>
      <div className="App__nav">
        Card.io
      </div>
      <CardsList
        cards={cards}
        selectedCardId={selectedCardId}
        onClick={(id) => setSelectedCardId(id)}
        isLoading={isLoadingCards}
      />
    </div>
  );
}

export default App;
