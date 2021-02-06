import React, { useState, useEffect, useCallback } from "react";
import CardsList from "./components/CardsList";
import TransactionsList from "./components/TransactionList";
import { getCards, getCardTransactions, getCardDetails } from "./api";

import "./App.css";
import CardDetails from "./components/CardDetails";

function App() {
  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState();
  const [cardDetails, setCardDetails] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const [isLoadingCards, setIsLoadingCards] = useState(false);
  const [isLoadingTransactions, setIsLoadingTransactions] = useState(false);
  const [isLoadingCardDetail, setIsLoadingCardDetail] = useState(false);

  useEffect(() => {
    setIsLoadingCards(true);
    getCards().then((json) => {
      setIsLoadingCards(false);
      setCards(json);
    });
  }, []);

  useEffect(() => {
    setIsLoadingTransactions(true);
    selectedCardId &&
      getCardTransactions(selectedCardId).then((json) => {
        setIsLoadingTransactions(false);
        setTransactions(json);
      });
  }, [selectedCardId]);

  useEffect(() => {
    setIsLoadingCardDetail(true);
    selectedCardId &&
      getCardDetails(selectedCardId).then((json) => {
        setIsLoadingCardDetail(false);
        setCardDetails(json);
      });
  }, [selectedCardId]);

  const selectedCard = cards.find((card) => card.id === selectedCardId);

  const handleClose = useCallback(() => {
    setSelectedCardId(null);
    setTransactions([]);
    setCardDetails(null);
  }, []);

  return (
    <div>
      <div className="App__nav">Card.io</div>
      <div className="Container">
        <CardsList
          cards={cards}
          selectedCardId={selectedCardId}
          onClick={(id) => setSelectedCardId(id)}
          isLoading={isLoadingCards}
        />
        {selectedCardId && (
          <div className="CardDetailsContent">
            <div className="ButtonContainer">
              <button className="ButtonClose" onClick={handleClose}>
                X
              </button>
            </div>
            <CardDetails
              isLoading={isLoadingCardDetail}
              cardDetails={cardDetails}
              selectedCard={selectedCard}
            />
            <TransactionsList
              isLoading={isLoadingTransactions}
              transactions={transactions}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
