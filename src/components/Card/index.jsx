import React from "react";
import "./index.css";

export const Card = ({ children = "", className = "" }) => {
  return <div className={"card" + className}>{children}</div>;
};
