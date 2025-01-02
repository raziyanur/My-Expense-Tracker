import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({ expenses, income }) => {
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Expenses Tracker</h1>
      <p>Welcome to the Expense Tracker App!</p>
      <h2>Current Month Overview</h2>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Total Income: ${totalIncome}</p>

      <div>
        <h3>Expenses</h3>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              {expense.date}: ${expense.amount} - {expense.category} - {expense.note}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Income</h3>
        <ul>
          {income.map((incomeItem, index) => (
            <li key={index}>
              {incomeItem.date}: ${incomeItem.amount} - {incomeItem.category} - {incomeItem.note}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link to="/add-expense">
          <button>Add Expense</button>
        </Link>
        <Link to="/add-income">
          <button>Add Income</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
