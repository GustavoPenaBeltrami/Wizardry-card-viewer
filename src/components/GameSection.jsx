import React from "react";

//Components
import { CardGrid } from "./CardGrid";
import { Carousel } from "./Carousel";

export const GameSection = ({ game }) => {

  return (
    <div id={`wizardry${game.id}`} className="wizardry">
      <h2 className="gameTitle">{game.id}.{game.title}</h2>
      <p className="gameDescription">{game.description}</p>

      <a className="gameLink" href={game.link} target="_blank">
        More information here!
      </a>
      {game.screenshots && (
        <h3 className="gameSubTitle">Physical game and screenshots</h3>
      )}
      {game.screenshots && <Carousel images={game.screenshots} />}

      {game.cards && <h3 className="gameSubTitle">All cards</h3>}
      {game.cards && <CardGrid cards={game.cards} game={game.title} />}
      {!game.cards && <><br /><br /><br /><br /></>}
    </div>
  );
};