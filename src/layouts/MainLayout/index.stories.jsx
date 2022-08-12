import React, { useState } from "react";
import { PlayerMarker } from "../../components/PlayerMarker";
import { Card } from "../../components/Card";
import { faHand, faHandBackFist } from "@fortawesome/free-regular-svg-icons";
import { faHandScissors } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainLayout } from "./index";
import { Board } from "../../components/Board";

export default {
  title: "Layouts/MainLayout",
};

export const Overview = () => {
  const [choicePlayer, setChoicePlayer] = useState(0);

  return (
    <MainLayout>
      <Board>
        <div className="player-content">
          <PlayerMarker name="Tú" numberRound="1" />
          <Card>
            <FontAwesomeIcon
              className="icon"
              style={{ width: "250px", height: "250px" }}
              icon={faHand}
            />
          </Card>
        </div>
        <div className="vs">
          <p>vs</p>
        </div>
        <div className="opponent-content">
          <PlayerMarker name="pc" numberRound="2" />
          <Card>
            <FontAwesomeIcon
              className="icon"
              style={{ width: "250px", height: "250px" }}
              icon={faHandBackFist}
            />
          </Card>
        </div>
      </Board>
    </MainLayout>
  );
};
