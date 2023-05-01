import React from "react";
import { NavLink } from "react-router-dom";

const KasaCard = ({ kasa }) => {
  console.log(kasa);
  return (
    <NavLink
      key={kasa.id}
      to={{
        pathname: `/${kasa.id}`,
        state: {
          kasa: kasa,
        },
      }}
      className="kasaCards kasaCards-link"
    >
      <div
        className="kasaCards"
        style={{
          backgroundImage: `linear-gradient(360deg,
            rgba(134, 52, 52, 1) 0%,
            rgba(255, 98, 98, 0.1) 100%),url(${kasa.cover})`,
        }}
      >
        <h2>{kasa.title}</h2>
      </div>
    </NavLink>
  );
};

export default KasaCard;
