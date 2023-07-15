import { motion } from "framer-motion";
import React from "react";

export const CarouselImage = ({ image, zoom }) => {

  return (
    <div className="item">
      <motion.img src={image.src} onClick={zoom}/>
    </div>
  );
};
