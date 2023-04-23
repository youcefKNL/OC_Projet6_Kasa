import React from "react";

const Banner = ({ currentPage }) => {
  let backgroundImageUrl;

  if (currentPage === "/") {
    backgroundImageUrl = "url(/homeImg.jpg)";
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
    backgroundImageUrl = "url(/aboutImg.jpg)";
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
