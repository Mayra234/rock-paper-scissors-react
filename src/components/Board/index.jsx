import React from "react";
import "./index.css";

export const Board = ({ children = "", className = "" }) => {
  return <div className={"board " + className}>{children}</div>;
};
