import React from "react";
import { Board } from "../../components/Board";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import "./index.css";

export const OptionsLayout = () => {
  return (
    <Board className="options-layout">
      <div className="form">
        <Select
          label="Modo"
          options={[
            { value: "", text: "Seleccionar..." },
            {
              value: "free",
              text: "Libre",
            },
            { value: "tournament", text: "Torneo" },
          ]}
        />
        <Input type="number" label="Número de partidas" />
        <Button>Guardar</Button>
      </div>
    </Board>
  );
};
