import React, { useState } from "react";
import "./index.css";
import { PlayerMarker } from "../../components/PlayerMarker";
import { Card } from "../../components/Card";
import {
  faHand,
  faHandBackFist,
  faHandScissors,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Board } from "../../components/Board";

export const Home = () => {
  return (
    <Board>
      <div className="player-content">
        <PlayerMarker name="Tú" numberRound="1" />
        <Card>
          <div className="content-icon"></div>
        </Card>
      </div>
      <div className="vs">
        <p>vs</p>
      </div>
      <div className="opponent-content">
        <PlayerMarker name="pc" numberRound="2" />
        <Card>{}</Card>
      </div>
    </Board>
  );
};
