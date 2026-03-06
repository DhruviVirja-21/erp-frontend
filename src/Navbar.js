import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="navbar">

      <h2 className="logo">ERP System</h2>

      <div className="nav-right">

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀"}
        </button>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;