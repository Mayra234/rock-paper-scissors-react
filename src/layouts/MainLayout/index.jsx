import React, { useState, useEffect, useMemo } from "react";
import "./index.css";
import { PlayerMarker } from "../../components/PlayerMarker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Sidebar } from "../../components/Sidebar";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { Board } from "../../components/Board";
import { Card } from "../../components/Card";

export const MainLayout = () => {
  const [chooseButton, setChooseButton] = useState(0);
  const [randomPc, setRandomPc] = useState(0);
  const [counterPlayer, setcounterPlayer] = useState(0);
  const [counterPc, setcounterPc] = useState(0);

  const result = () => {
    if (chooseButton === randomPc) {
      setcounterPc((prevCounterPc) => prevCounterPc);
      setcounterPlayer((prevCounterPlayer) => prevCounterPlayer);
    } else if (
      (randomPc === 0 && chooseButton === 1) ||
      (randomPc === 1 && chooseButton === 2) ||
      (randomPc === 2 && chooseButton === 0)
    ) {
      setcounterPc((prevCounterPc) => prevCounterPc + 1);
    } else if (
      (chooseButton === 0 && randomPc === 1) ||
      (chooseButton === 1 && randomPc === 2) ||
      (chooseButton === 2 && randomPc === 0)
    ) {
      setcounterPlayer((prevCounterPlayer) => prevCounterPlayer + 1);
    }
  };

  useEffect(() => {
    result();
  }, [chooseButton]);

  return (
    <div className="content-layout">
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
          <PlayerMarker id="player" name="Tú" numberRound={counterPlayer} />
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
          <PlayerMarker id="pc" name="pc" numberRound={counterPc} />
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
    </div>
  );
};
