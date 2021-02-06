import React from "react";
import { formatCardNumber } from "../utils";
import "./CreditCard.css";

const CreditCard = ({ selectedCard, cardDetails }) => {
  return (
    <div className="Card">
      <div className="ContentCard">
        <div className="heavyText" style={{ marginBottom: 10 }}>
          <b>{selectedCard.name}</b>
        </div>
        {cardDetails && (
          <>
            <div className="bodyText" style={{ marginBottom: 10 }}>
              <b>{formatCardNumber(cardDetails.number)}</b>
            </div>
            <div className="ExpiredInformation">
              <div>
                <span className="lightText">Exp:</span>
                <span className="bodyText" style={{ marginLeft: 5 }}>
                  {cardDetails.expiration_month}/
                  {cardDetails.expiration_year.slice(-2)}
                </span>
              </div>
              <div>
                <span className="lightText">CVV:</span>
                <span className="bodyText" style={{ marginLeft: 5 }}>
                  {cardDetails.cvv}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="bodyText" style={{ textAlign: "right", marginTop: 20 }}>
        {selectedCard.network}
      </div>
    </div>
  );
};

export default CreditCard;
