import React from "react";
import Card from "../Card/Card";
import "./CardList.css";

const CardList = ({ robots }) => {
  return (
    
    <div className="layout">
    {console.log("cardlist")}
      {robots.map(robot => (
        <Card key={robot.id} {...robot} />
      ))}
    </div>
  );
};

export default CardList;
