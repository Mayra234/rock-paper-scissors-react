import React, { useEffect, useState } from "react";
import { ButtonIcon } from "../ButtonIcon";
import "./index.css";

export const Sidebar = ({
  className = "",
  options = [],
  onChange = () => {},
}) => {
  return (
    <div onChange={onChange} className={"sidebar " + className}>
      {options.map((option, index) => (
        <ButtonIcon
          key={index}
          {...option}
          onClick={() => onChange(index, Math.floor(Math.random() * 3))}
        />
      ))}
    </div>
  );
};
