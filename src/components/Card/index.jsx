import React from "react";
import "./index.css";

export const Card = ({ children = "" }) => {
  return <div className="card">{children}</div>;
};
