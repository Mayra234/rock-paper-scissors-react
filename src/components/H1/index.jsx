import React from "react";
import "./index.css";

export const H1 = ({ children = "", className = "" }) => {
  return <h1 className={`h1 ${className}`}>{children}</h1>;
};
