import React, { useState, useEffect, useCallback } from "react";
import chevronRight from "../../assets/icon/chevron-right-solid.svg";
import chevronLeft from "../../assets/icon/chevron-left-solid.svg";

const Carrousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleClick = useCallback(
    (increment) => {
      setIndex((index + increment + images.length) % images.length);
    },
    [index, images.length]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick(1);
    }, 5000); //défile pour pas s'ennuyer 5s

    return () => clearInterval(interval);
  }, [handleClick]);

  if (images.length > 1) {
    return (
      <div className="carrousel">
        <img src={images[index]} alt="selected" className="carrousselImg" />
        <div className="btn">
          <img
            src={chevronLeft}
            onClick={() => handleClick(-1)}
            alt="left arrow"
          />
          <img
            src={chevronRight}
            onClick={() => handleClick(1)}
            alt="right arrow"
          />
        </div>
        <div className="countImg">
          <span className="counter">
            {index + 1}/{images.length}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="carrousel">
        <img src={images[index]} alt="selected" className="carrousselImg" />
      </div>
    );
  }
};

export default Carrousel;
