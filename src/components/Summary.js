import React from "react";
import { useSelector } from "react-redux";

const Summary = () => {
  const expenses = useSelector((state) => state.expenses);
  const income = useSelector((state) => state.income);

  const totalExpenses = expenses.reduce((total, expense) => total + parseFloat(expense.amount ), 0);
  const totalIncome = income.reduce((total, incomeItem) => total + parseFloat(incomeItem.amount ), 0);

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Total Income: ${totalIncome}</p>
      <p>Net Total: ${(totalIncome - totalExpenses)}</p>
    </div>
  );
};

export default Summary;
