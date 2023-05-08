import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Balance() {
  const context = useContext(GlobalContext);
  const amount = context.transactions
    .map((transaction) => (transaction = transaction.amount))
    .reduce((acc, val) => (acc += val), 0)
    .toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h2 id="balance">${amount}</h2>
    </>
  );
}
