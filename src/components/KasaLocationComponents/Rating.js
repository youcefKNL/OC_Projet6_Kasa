import React from "react";
import validStar from "../../assets/icon/validStar.png";
import unvalidStar from "../../assets/icon/unvalidStar.png";

const Rating = ({ score }) => {
  const ratingScore = score;
  const hasHalfStar = score % 1 !== 0;
  const emptyStars = 5 - score;

  const validStarContent = Array.from({ length: ratingScore }, (_, index) => (
    <img src={validStar} alt="valid star" key={index} />
  ));

  const unvalidStarContent = Array.from({ length: emptyStars }, (_, index) => (
    <img src={unvalidStar} alt="unvalid star" key={index} />
  ));

  return (
    <div className="hostRating">
      <div className="validStars">{validStarContent}</div>
      {hasHalfStar && <img src={validStar} alt="half-star" />}
      <div className="unvalidStars">{unvalidStarContent}</div>
    </div>
  );
};

export default Rating;
