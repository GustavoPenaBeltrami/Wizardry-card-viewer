import { motion } from "framer-motion";
import React, { useState } from "react";

export const Card = ({ duration, card }) => {
  const [modal, setModal] = useState(false);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: duration }}
        src={card.src}
        className="card"
        onClick={handleClick}
        loading="lazy"
      />

      {modal && (
        <div className="modal">
          <div onClick={handleClick} className="overlay"></div>
          <div className="modal-content" onClick={handleClick}>
            <motion.img
              initial={{ opacity: 0, x: -400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: -5, scale: 1.1 }}
              src={card.src}
              alt={card.name}
            />
            <motion.div
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src="/assets/Logo-removed.png" loading="lazy" />

              <p>
                {" "}
                <b style={{ color: "#cd0c11" }}>Name: </b>
                {card.name}
              </p>
              <p>
                <b style={{ color: "#cd0c11" }}>Game: </b>
                {card.game}
              </p>
              {card.description && (
                <p>
                  <b style={{ color: "#cd0c11" }}>Description: </b>
                  {card.description}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};
