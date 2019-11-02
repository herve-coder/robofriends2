import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ robots }) => {
  return (
    <div className="layout">
      {robots.map(robot => (
        <Card key={robot.id} {...robot} />
      ))}
    </div>
  );
};

export default CardList;
