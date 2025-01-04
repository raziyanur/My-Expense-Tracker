import React from "react";
import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
import IncomeForm from "../features/IncomeForm";
//import { addIncome } from "../store/actions"; 


// const addIncome = (income) => ({
  // type: "ADD_INCOME",
  // payload: income,
// });
  
const AddIncomePage = ({addIncome}) => {
 // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleIncomeSubmit = (formData) => {
    console.log("Income Data:", formData);
    addIncome(formData);
    //dispatch(addIncome(formData)); 
    navigate("/"); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Add Income</h1>
      <IncomeForm onSubmit={handleIncomeSubmit} />
    </div>
  );
};

export default AddIncomePage;
