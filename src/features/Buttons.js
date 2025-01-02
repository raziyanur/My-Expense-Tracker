import React from "react";

const Buttons = () => {
  const handleAddExpense = () => {
    console.log("Navigate to Add Expense Page");
    // 后续用 React Router 实现页面跳转
  };

  const handleAddIncome = () => {
    console.log("Navigate to Add Income Page");
    // 后续用 React Router 实现页面跳转
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
