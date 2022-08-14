import React, { useEffect, useState } from "react";
import { ButtonIcon } from "../ButtonIcon";
import "./index.css";

export const Sidebar = ({
  className = "",
  options = [],
  onChange = () => {},
}) => {
  const [chooseButton, setChooseButton] = useState(0);
  const [randomPc, setRandomPc] = useState(1);

  const computerChoiceIndex = Math.floor(Math.random() * 3);

  const onClickButton = (index, computerChoiceIndex) => {
    setChooseButton(index);
    setRandomPc(computerChoiceIndex);
  };

  useEffect(() => {
    onChange(chooseButton, randomPc);
  }, [chooseButton]);

  return (
    <div className={"sidebar " + className}>
      {options.map((option, index) => (
        <ButtonIcon
          key={index}
          {...option}
          onClick={() => onClickButton(index, computerChoiceIndex)}
        />
      ))}
    </div>
  );
};
