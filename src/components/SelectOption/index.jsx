import React from "react";

export const SelectOption = ({ text = "", value = "" }) => {
  return <option value={value}>{text}</option>;
};
