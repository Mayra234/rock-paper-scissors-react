import React from "react";
import { Card } from "./index";
import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.jpg";

export default {
  title: "Components/Card",
};

export const Overview = () => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}
    >
      <Card>
        <img src={avatar1} />
      </Card>
      <Card>
        <img src={avatar2} />
      </Card>
    </div>
  );
};
