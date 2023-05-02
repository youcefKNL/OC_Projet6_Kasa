import React from "react";

const Banner = (props) => {
  return (
    <div className="headerImg">
      <div className={`headerImg-background ${props.class}`}>
        <div className="headerImg-content">
          {props.title ? <p>{props.title}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Banner;
