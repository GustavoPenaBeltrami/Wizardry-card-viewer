import React from "react";
import { Card } from "./Card";

export const CardGrid = ({cards, game}) => {

  const transDuration = 1;

  return (
    <div className="cardGrid">
      {cards.map((card, index) => {
          return(<Card key={index} duration={transDuration} card={card} />)
      })}
    </div>
  );
};
