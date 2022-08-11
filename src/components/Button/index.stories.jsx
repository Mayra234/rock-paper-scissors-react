import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { Button } from "./index";

export default {
  title: "Components/Button",
};

export const Overview = () => {
  return (
    <Button>
      <FontAwesomeIcon
        style={{
          color: "#a5855e",
          width: "60px",
          height: "60px",
        }}
        icon={faHand}
      />
    </Button>
  );
};
