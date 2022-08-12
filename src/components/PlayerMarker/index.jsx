import React from "react";
import "./index.css";

export const PlayerMarker = ({ name = "", numberRound = "" }) => {
  return (
    <div className="player-marker">
      <p>{name}</p>
      <p>{numberRound}</p>
    </div>
  );
};
