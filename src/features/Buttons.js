import React from "react";

const Buttons = () => {
  const handleAddExpense = () => {
    console.log("Navigate to Add Expense Page");
    
  }

  const handleAddIncome = () => {
    console.log("Navigate to Add Income Page");
    
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={handleAddExpense} style={{ margin: "10px" }}>
        Add Expense
      </button>
      <button onClick={handleAddIncome} style={{ margin: "10px" }}>
        Add Income
      </button>
    </div>
  );
};

export default Buttons;
