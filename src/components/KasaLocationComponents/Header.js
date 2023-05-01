import React from "react";
import Rating from "./Rating";

const Header = ({ kasa }) => {
  return (
    <div className="header">
      <div className="kasaInfo">
        <h3>
          {kasa.title}
          <br />
          <span className="location">{kasa.location}</span>
        </h3>

        <span className="tagBtnContainer">
          {" "}
          {kasa.tags.map((tag, index) => (
            <span key={index} className="tagBtn">
              {tag}
            </span>
          ))}
        </span>
      </div>
      <div className="hostInfo">
        <div className="hostDescription">
          <span>
            {kasa.host.name.split(" ")[0]}
            <br />
            {kasa.host.name.split(" ")[1]}
          </span>
          <img src={kasa.host.picture} alt={kasa.host.name} />
        </div>
        <Rating score={kasa.rating} />
      </div>
    </div>
  );
};

export default Header;
