import React from "react";
import "./index.css";

export const Card = ({ children = "", className = "", index = "" }) => {
  return (
    <div index={index} className={`card ${className}`}>
      {children}
    </div>
  );
};
