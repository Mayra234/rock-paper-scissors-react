import React from "react";
import { Sidebar } from "./index";
import { Button } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-regular-svg-icons";

export default {
  title: "Components/Sidebar",
};

export const Overview = () => {
  return (
    <Sidebar>
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
    </Sidebar>
  );
};
