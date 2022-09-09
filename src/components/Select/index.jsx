import React from "react";
import "./index.css";
import { SelectOption } from "../SelectOption";
import { Label } from "../Label";

export const Select = ({
  label = "",
  name = "",
  options = [],
  className = "",
}) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <select className={`form-control ${className}`} name={name}>
        {options.map((option) => (
          <SelectOption {...option} />
        ))}
      </select>
    </>
  );
};
