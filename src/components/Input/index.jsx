import React from "react";
import "./index.css";
import { Label } from "../Label";

export const Input = ({ type = "", className = "", label = "" }) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <input className={`input ${className}`} type={type} />
    </>
  );
};
