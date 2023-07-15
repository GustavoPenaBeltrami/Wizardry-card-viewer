import React, { useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { CarouselImage } from "./CarouselImage";

export const Carousel = ({ images }) => {

  const [modal, setModal] = useState(false);
  const [source, setSource] = useState("");
  const [scope, animate] = useAnimate();
  const [position, setPosition] = useState(0);
  const movement = 1120;

  setTimeout(() => {
    if (position === movement * images.length * -1) {
      left();
    }

    if (position === movement) {
      right();
    }
  }, 100);
  function left() {
    if (position === 0) {
      const finalExtra = movement * images.length;

      animate(scope.current, { x: position - finalExtra }, { duration: 0 });
      setPosition(position - finalExtra);

      return;
    }

    animate(scope.current, { x: position + movement }, { duration: 0.75 });
    setPosition(position + movement);
  }
  function right() {
    if (position === -movement * (images.length - 1)) {
      const minusStart = movement * images.length;

      animate(scope.current, { x: position + minusStart }, { duration: 0 });
      setPosition(position + minusStart);

      return;
    }

    animate(scope.current, { x: position - movement }, { duration: 0.75 });
    setPosition(position - movement);
  }

  const zoom = (e) => {
    setSource(e.target.src);
    setModal(!modal);
  };

  return (
    <>
      <div className="carousel">
        <img onClick={left} src="/css-images/left.png" alt="Left" />
        <div>
          <motion.div ref={scope} className="inner-carousel" initial={{ x: 0 }}>
            {images.map((image, index) => {
              return <CarouselImage key={index} image={image} zoom={zoom} />;
            })}
          </motion.div>
        </div>
        <img onClick={right} src="/css-images/right.png" alt="Right" />
      </div>


      {modal && (
        <div className="zoom">
          <div onClick={zoom} className="overlay"></div>
          <div className="zoom-content" onClick={zoom}>
            <motion.img
            className="zoomed-image"
              initial={{ opacity: 0, scale:0.5 }}
              animate={{ opacity: 1, scale:1 }}
              transition={{ duration: 0.5 }}
              src={source}
            />
          </div>
        </div>
      )}
    </>
  );
};
