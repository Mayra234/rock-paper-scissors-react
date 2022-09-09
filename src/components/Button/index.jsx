import React from "react";
import "./index.css";

export const Button = ({ children = "", type = "button", className = "" }) => {
  return (
    <button className={`btn ${className}`} type={type}>
      {children}
    </button>
  );
};
