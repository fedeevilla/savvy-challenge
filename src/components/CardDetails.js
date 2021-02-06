import React, { useCallback, useState } from "react";
import Skeleton from "react-loading-skeleton";
import StatusBadge from "./StatusBadge";
import { disableCard } from "../api";
import CreditCard from "./CreditCard";
import "./CardDetails.css";

const CardDetails = ({ isLoading, cardDetails, selectedCard }) => {
  const [isLoadingDisableCard, setIsLoadingDisableCard] = useState(false);

  const handleDisabled = useCallback(() => {
    setIsLoadingDisableCard(true);
    disableCard(selectedCard.id).then(() => {
      // Refresh the page after request. Instead of this, we should add redux as a State Management to avoid this situation.
      window.location.reload();
    });
  }, [selectedCard.id]);

  if (isLoading) {
    return (
      <div className="CardDetails">
        <Skeleton
          className="CardDetails__placeholderItem"
          height={"70px"}
          count={1}
        />
      </div>
    );
  }

  return (
    <div className="CardDetailsInfo">
      <CreditCard selectedCard={selectedCard} cardDetails={cardDetails} />
      <div className="CardInformation">
        <p style={{ fontWeight: "bold" }}>Billing Addres</p>
        <p>{cardDetails?.address_line1}</p>
        <p>{`${cardDetails?.address_city} ${cardDetails?.address_state}`}</p>
        <p>{cardDetails?.address_postal_code}</p>
        <div className="StatusContent">
          <div className="Status">
            <StatusBadge
              active={selectedCard.active}
              disabled={!selectedCard.active}
            />
          </div>
          {selectedCard.active && (
            <div>
              <button
                disabled={isLoadingDisableCard}
                className="DisableButton"
                onClick={handleDisabled}
              >
                {isLoadingDisableCard ? "Wait please" : "Disable Card"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
