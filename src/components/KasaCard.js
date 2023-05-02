import React from "react";
import { NavLink } from "react-router-dom";

const KasaCard = ({ kasa }) => {
  console.log(kasa);
  return (
    <NavLink
      key={kasa.id}
      to={{
        pathname: `/location/${kasa.id}`,
        state: {
          kasa: kasa,
        },
      }}
      className="kasaCards kasaCards-link"
    >
      <div className="kasaCards">
        <img src={kasa.cover} alt={kasa.title} />
        <h2>{kasa.title}</h2>
        <div className="gradientWrap"></div>
      </div>
    </NavLink>
  );
};

export default KasaCard;
