import React from "react";
import "./index.css";

export const Button = ({
  children = "",
  type = "button",
  className = "",
  onclick = () => {},
}) => {
  return (
    <button onClick={onclick} className={`btn ${className}`} type={type}>
      {children}
    </button>
  );
};
