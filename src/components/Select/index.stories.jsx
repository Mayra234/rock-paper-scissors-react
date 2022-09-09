import React from "react";
import { Select } from "./index";

export default { title: "Components/Select" };
export const Overview = () => {
  return (
    <Select
      label="Nombres"
      options={[
        { value: "", text: "Seleccionar..." },
        { value: 1, text: "Mayra" },
        { value: 2, text: "Angélica" },
      ]}
    />
  );
};
