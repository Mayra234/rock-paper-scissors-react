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

  return <MainLayout />;
};
