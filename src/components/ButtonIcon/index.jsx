import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonIcon = ({
  icon = "",
  onClick = "",
  id = "",
  value = "",
}) => {
  return (
    <button
      id={id}
      type="button"
      onClick={onClick}
      className="button-icon"
      value={value}
    >
      <FontAwesomeIcon className="icon" icon={icon} />
    </button>
  );
};
