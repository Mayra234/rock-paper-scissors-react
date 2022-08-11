import React from "react";
import "./index.css";

export const PlayerMarker = ({ name = "", numberRound = "" }) => {
  return (
    <div className="player-marker">
      <p className="p">{name}</p>
      <p className="p">{numberRound}</p>
    </div>
  );
};
