import React, { useState } from "react";

const IncomeForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    amount: "",
    category: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Income Submitted:", formData);
    // 后续将数据提交到 Redux store
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Salary">Salary</option>
            <option value="Bonus">Bonus</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Note:
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows="3"
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IncomeForm;
