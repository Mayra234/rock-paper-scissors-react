import React, { useState } from "react";
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
  const [colorClassPc, setColorClassPc] = useState();
  const [colorClassPlayer, setColorClassPlayer] = useState();
  const [message, setMessage] = useState("");
  const [classMessage, setClassMessage] = useState("");

  const result = (chooseButton, randomPc) => {
    if (chooseButton === randomPc) {
      setColorClassPc("tie");
      setColorClassPlayer("tie");
      setMessage("DRAW");
      setClassMessage("tie-message ");
      setcounterPc((prevCounterPc) => prevCounterPc);
      setcounterPlayer((prevCounterPlayer) => prevCounterPlayer);
    } else if (
      (randomPc === 0 && chooseButton === 1) ||
      (randomPc === 1 && chooseButton === 2) ||
      (randomPc === 2 && chooseButton === 0)
    ) {
      setColorClassPc("won");
      setColorClassPlayer("lost");
      setMessage("YOU LOST");
      setClassMessage("lost-message ");
      setcounterPc((prevCounterPc) => prevCounterPc + 1);
    } else if (
      (chooseButton === 0 && randomPc === 1) ||
      (chooseButton === 1 && randomPc === 2) ||
      (chooseButton === 2 && randomPc === 0)
    ) {
      setColorClassPc("lost");
      setColorClassPlayer("won");
      setMessage("YOU WIN");
      setClassMessage("won-message ");
      setcounterPlayer((prevCounterPlayer) => prevCounterPlayer + 1);
    }
  };

  return (
    <div className="content-layout">
      <Sidebar
        options={[
          { icon: faHand },
          { icon: faHandBackFist },
          { icon: faHandScissors },
        ]}
        onChange={(humanPlayerChoice, pcPlayerChoice) => {
          setChooseButton(humanPlayerChoice);
          setRandomPc(pcPlayerChoice);
          result(humanPlayerChoice, pcPlayerChoice);
        }}
      />
      <div className="separator"></div>
      <Board>
        <div className="player-content">
          <PlayerMarker id="player" name="Human" numberRound={counterPlayer} />
          <Card className={colorClassPlayer}>
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
          <PlayerMarker id="pc" name="Pc" numberRound={counterPc} />
          <Card className={colorClassPc}>
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
        <h1 className={`message ${classMessage}`}>{message}</h1>
      </Board>
    </div>
  );
};
