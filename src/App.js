import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AddExpensePage from "./pages/AddExpensePage";
import AddIncomePage from "./pages/AddIncomePage";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);

  
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  
  const addIncome = (incomeItem) => {
    setIncome([...income, incomeItem]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage expenses={expenses} income={income} />}
        />
        <Route
          path="/add-expense"
          element={<AddExpensePage addExpense={addExpense} />}
        />
        <Route
          path="/add-income"
          element={<AddIncomePage addIncome={addIncome} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
