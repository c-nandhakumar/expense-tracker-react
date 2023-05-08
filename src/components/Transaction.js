import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const context = useContext(GlobalContext);
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => context.deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
