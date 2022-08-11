import React from "react";
import "./index.css";

export const P = ({ style = "", children = "" }) => {
  return (
    <p style={style} className="p">
      {children}
    </p>
  );
};
