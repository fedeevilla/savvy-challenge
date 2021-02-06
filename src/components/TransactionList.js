import React, { useState, useEffect, useCallback } from "react";
import Skeleton from "react-loading-skeleton";

import "./TransactionList.css";

const TransactionList = ({ transactions, isLoading }) => {
  const [text, setText] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(
    transactions
  );

  useEffect(() => {
    setFilteredTransactions(
      transactions.filter(({ label }) =>
        label.toLowerCase().includes(text.toLocaleLowerCase())
      )
    );
  }, [text, transactions]);

  const handleChange = useCallback((e) => setText(e.target.value), []);

  if (isLoading) {
    return (
      <div className="TransactionList">
        <p className="subheaderText">Transactions</p>
        <Skeleton
          className="TransactionList__placeholderItem"
          height={"70px"}
          count={4}
        />
      </div>
    );
  }

  return (
    <div className="TransactionList">
      <div className="Header">
        <p className="subheaderText">Transactions</p>
        <div className="Content_InputSearch">
          <input
            className="InputSearch"
            type="text"
            onChange={handleChange}
            placeholder="Search for a transaction"
          />
        </div>
      </div>
      {filteredTransactions.map((transaction) => {
        const purchaseDate = new Date(transaction.purchase_date);
        const dateString = purchaseDate.toLocaleDateString("en-US");

        return (
          <div key={transaction.id} className="TransactionList__item">
            <div className="TransactionList__itemDate">{dateString}</div>
            <div className="TransactionList__itemLabel">
              {transaction.label}
            </div>
            <div className="TransactionList__itemAmount">
              {`- ${transaction.amount}`}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionList;
