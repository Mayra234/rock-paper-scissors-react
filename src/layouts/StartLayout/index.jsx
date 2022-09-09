import React from "react";
import "./index.css";
import { Board } from "../../components/Board";
import { H1 } from "../../components/H1";
import { Button } from "../../components/Button";

export const StartLayout = () => {
  return (
    <Board className="start-layout">
      <H1 className="start-title">Piedra, papel o tijera</H1>
      <div className="buttons">
        <Button>Iniciar</Button>
        <Button>Opciones</Button>
      </div>
    </Board>
  );
};
