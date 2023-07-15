import React from "react";
import { GameSection } from "../components/GameSection";
import { Intro } from "../components/Intro";
import { mainGames } from "../data/mainGames";

export const MainPage = () => {
  return (
    <div className="wholepage">
      <div className="menu">
        <ul>
          <li>
            <a href="#wizardry1">1.Proving grounds of the mad overlord</a>
          </li>
          <li>
            <a href="#wizardry2">2.The Knight of Diamonds</a>
          </li>
          <li>
            <a href="#wizardry3">3.Legacy of Llylgamyn</a>
          </li>
          <li>
            <a href="#wizardry4">4.The Return of Werdna</a>
          </li>
          <li>
            <a href="#wizardry5">5.Hearth of the Maelstrom</a>
          </li>
          <li>
            <a href="#wizardry6">6.Bane of the Cosmic Forge</a>
          </li>
          <li>
            <a href="#wizardry7">7.Crusaders of the Dark Savant</a>
          </li>
          <li>
            <a href="#wizardry8">8.Wizardry 8</a>
          </li>
        </ul>
      </div>
      <Intro />

      {mainGames.map((game, index) => (
        <GameSection game={game} key={index} />
      ))}
    </div>
  );
};
