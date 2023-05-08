import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(
    (transaction) => (transaction = transaction.amount)
  );
  const income = amounts
    .filter((val) => val > 0)
    .reduce((acc, val) => (acc += val))
    .toFixed(2);
  const expenses =
    amounts
      .filter((val) => val < 0)
      .reduce((acc, val) => (acc += val))
      .toFixed(2) * -1;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expenses}
        </p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
