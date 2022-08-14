import React, { useState, useEffect, useMemo } from "react";
import "./index.css";
import { PlayerMarker } from "../../components/PlayerMarker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidebar } from "../../components/Sidebar";
import {
  faHand,
  faHandBackFist,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";
import { Board } from "../../components/Board";
import { Card } from "../../components/Card";

export default {
  title: "Components/Sidebar",
};

export const Overview = () => {
  const [chooseButton, setChooseButton] = useState(0);
  const [randomPc, setRandomPc] = useState(1);

  useEffect(() => {
    console.log(chooseButton, randomPc);
  }, [chooseButton]);

  return (
    <Board>
      <Sidebar
        options={[
          { icon: faHand },
          { icon: faHandBackFist },
          { icon: faHandScissors },
        ]}
        onChange={(index, computerChoiceIndex) => (
          setChooseButton(index), setRandomPc(computerChoiceIndex)
        )}
      />
      <div className="separator"></div>
      <Board>
        <div className="player-content">
          <PlayerMarker id="player" name="Tú" numberRound={"0"} />
          <Card>
            {chooseButton === 0 && (
              <FontAwesomeIcon className=" icon icon-board" icon={faHand} />
            )}
            {chooseButton === 1 && (
              <FontAwesomeIcon
                className=" icon icon-board"
                icon={faHandBackFist}
              />
            )}
            {chooseButton === 2 && (
              <FontAwesomeIcon
                className=" icon icon-board"
                icon={faHandScissors}
              />
            )}
          </Card>
        </div>
        <div className="vs">
          <p>vs</p>
        </div>
        <div className="opponent-content">
          <PlayerMarker id="pc" name="pc" numberRound={"0"} />
          <Card>
            {randomPc === 0 && (
              <FontAwesomeIcon className=" icon icon-board" icon={faHand} />
            )}
            {randomPc === 1 && (
              <FontAwesomeIcon
                className=" icon icon-board"
                icon={faHandBackFist}
              />
            )}
            {randomPc === 2 && (
              <FontAwesomeIcon
                className=" icon icon-board"
                icon={faHandScissors}
              />
            )}
          </Card>
        </div>
      </Board>
    </Board>
  );
};

/**--------------------------------------------------------------------------------------- */
