import React, { useState, useEffect } from "react";
import "./index.css";
import { Sidebar } from "../../components/Sidebar";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { faHandBackFist } from "@fortawesome/free-solid-svg-icons";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon } from "../../components/ButtonIcon";

export const MainLayout = ({ children = "" }) => {
  return (
    <div className="content-layout">
      <Sidebar>
        <ButtonIcon icon={faHand} />
        <ButtonIcon icon={faHandBackFist} />
        <ButtonIcon icon={faHandScissors} />
      </Sidebar>
      <div className="separator"></div>
      {children}
    </div>
  );
};
