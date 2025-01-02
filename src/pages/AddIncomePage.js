import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import IncomeForm from "../features/IncomeForm";
import { addIncome } from "../redux/actions"; // 导入 addIncome action

const AddIncomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncomeSubmit = (formData) => {
    dispatch(addIncome(formData)); // 提交收入数据到 Redux
    navigate("/"); // 提交后跳转回首页
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Add Income</h1>
      <IncomeForm onSubmit={handleIncomeSubmit} />
    </div>
  );
};

export default AddIncomePage;
