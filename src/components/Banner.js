import React from "react";
import aboutImg from "../assets/img/aboutImg.jpg";
import homeImg from "../assets/img/homeImg.jpg";

const Banner = ({ currentPage }) => {
  let backgroundImageUrl;

  if (currentPage === "/") {
    backgroundImageUrl = `url(${homeImg})`;

    return (
      <div className="headerImg">
        <div
          className="headerImg-background"
          style={{ backgroundImage: backgroundImageUrl }}
        >
          <div className="headerImg-content">
            <p>Chez vous, partout et ailleurs</p>
          </div>
        </div>
      </div>
    );
  } else if (currentPage === "/about") {
    backgroundImageUrl = `url(${aboutImg})`;

    return (
      <div className="headerImg">
        <div
          className="headerImg-background"
          style={{ backgroundImage: backgroundImageUrl }}
        ></div>
      </div>
    );
  }

  return null;
};

export default Banner;
