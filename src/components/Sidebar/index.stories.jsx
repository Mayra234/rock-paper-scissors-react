import React, { useState } from "react";
import { Sidebar } from "./index";
import { ButtonIcon } from "../ButtonIcon";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
  title: "Components/Sidebar",
};

export const Overview = () => {
  return (
    <Sidebar>
      <ButtonIcon icon={faHand} />
      <ButtonIcon icon={faHandBackFist} />
      <ButtonIcon icon={faHandScissors} />
    </Sidebar>
  );
};
