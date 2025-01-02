import React from "react";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "../features/ExpenseForm"; // 导入 ExpenseForm 组件

const AddExpensePage = ({ addExpense }) => {
  const navigate = useNavigate();

  const handleExpenseSubmit = (formData) => {
    // 在这里你可以将数据提交给 Redux store
    console.log("Expense Data:", formData);
    addExpense(formData);  // 通过 props 将数据传递给父组件
    navigate("/"); // 提交后跳转回首页
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={handleExpenseSubmit} /> {/* 将提交函数传递给 ExpenseForm */}
    </div>
  );
};

export default AddExpensePage;
