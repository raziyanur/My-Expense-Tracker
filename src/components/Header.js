import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "10px 20px", background: "#f4f4f4", textAlign: "center", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <nav>
        <Link to="/" style={{ margin: "0 20px", textDecoration: "none", fontSize: "18px", color: "#333" }}>Home</Link>
        <Link to="/add-expense" style={{ margin: "0 20px", textDecoration: "none", fontSize: "18px", color: "#333" }}>Add Expense</Link>
        <Link to="/add-income" style={{ margin: "0 20px", textDecoration: "none", fontSize: "18px", color: "#333" }}>Add Income</Link>
      </nav>
    </header>
  );
};

export default Header;
