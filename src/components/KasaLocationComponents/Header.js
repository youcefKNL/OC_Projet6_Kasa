import React from "react";
import Rating from "./Rating";

const Header = ({ kasa }) => {
  return (
    <div className="header">
      <div className="kasaInfo">
        <h3>{kasa.title}</h3>
        <span>{kasa.location}</span>
        <span>{kasa.tags}</span>
      </div>
      <div className="hostInfo">
        <div className="hostDescription">
          <span>{kasa.host.name}</span>
          <img src={kasa.host.picture} alt={kasa.host.name} />
        </div>
        <Rating score={kasa.rating} />
      </div>
    </div>
  );
};

export default Header;
