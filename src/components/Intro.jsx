import React from "react";
import { motion } from "framer-motion";

export const Intro = () => {
  return (
    //container to control the scale issue
    <div className="intro-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="/assets/Logo-removed.png"></img>
        <div>
          <p>
            Wizardry is a series of role-playing video games, developed by
            Sir-Tech, that were highly influential in the evolution of the
            genere.
          </p>
          <p>
            The game takes place in the fantasy realm of Llylgamyn, a world
            inhabited by various races, monsters, and magical creatures. The
            overarching story throughout the series revolves around the struggle
            between good and evil, with the player taking on the role of a group
            of adventurers seeking to save the realm from impending doom.
          </p>
          <p>
            The original Wizardry series is composed of eight different titles.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
