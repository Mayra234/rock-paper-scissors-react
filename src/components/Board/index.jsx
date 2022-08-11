import React from "react";
import "./index.css";

export const Board = ({ children = "" }) => {
  return <div className="board">{children}</div>;
};
