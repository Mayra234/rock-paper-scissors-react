import React from "react";
import { PlayerMarker } from "../../components/PlayerMarker";
import { Card } from "../../components/Card";
import { faHand } from "@fortawesome/free-regular-svg-icons";
import { faHandScissors } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainLayout } from "./index";

export default {
  title: "Layouts/MainLayout",
};

export const Overview = () => {
  return (
    <MainLayout>
      <div className="player-content">
        <PlayerMarker name="Tú" numberRound="1" />
        <Card>
          <FontAwesomeIcon
            style={{ width: "100px", height: "100px" }}
            icon={faHand}
          />
        </Card>
      </div>
      <div>
        <PlayerMarker name="vs" />
      </div>
      <div className="opponent-content">
        <PlayerMarker name="pc" numberRound="2" />
        <Card>
          <FontAwesomeIcon
            style={{ width: "100px", height: "100px" }}
            icon={faHandScissors}
          />
        </Card>
      </div>
    </MainLayout>
  );
};
