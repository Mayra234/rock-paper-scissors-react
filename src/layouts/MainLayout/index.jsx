import React from "react";
import "./index.css";
import { Button } from "../../components/Button";
import { Sidebar } from "../../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import { faHandBackFist } from "@fortawesome/free-regular-svg-icons";
import { faHandScissors } from "@fortawesome/free-regular-svg-icons";
import { Board } from "../../components/Board";

export const MainLayout = ({ children = "" }) => {
  return (
    <div className="content-layout">
      <Sidebar>
        <Button>
          <FontAwesomeIcon
            style={{ width: "40px", height: "40px" }}
            icon={faHand}
          />
        </Button>
        <Button>
          <FontAwesomeIcon
            style={{ width: "40px", height: "40px" }}
            icon={faHandBackFist}
          />
        </Button>
        <Button>
          <FontAwesomeIcon
            style={{ width: "40px", height: "40px" }}
            icon={faHandScissors}
          />
        </Button>
      </Sidebar>
      <div className="separator"></div>
      <Board>{children}</Board>
    </div>
  );
};
