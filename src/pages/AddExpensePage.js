import React from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../features/ExpenseForm"; 

// const addExpense = (expense) => ({
  // type: "ADD_EXPENSE",
  // payload: expense,
// });
const AddExpensePage = ({ addExpense }) => {
  const navigate = useNavigate();

  const handleExpenseSubmit = (formData) => {
    
    console.log("Expense Data:", formData);
    addExpense(formData);  
    navigate("/"); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={handleExpenseSubmit} /> 
    </div>
  );
};

export default AddExpensePage;
