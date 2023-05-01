import React, { useState } from "react";
import chevronDown from "../assets/icon/chevron-down-solid.svg";
import chevronUp from "../assets/icon/chevron-up-solid.svg";

function Collapse(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-title" onClick={toggleCollapse}>
        <h3>{props.title}</h3>
        {isOpen ? (
          <img src={chevronUp} alt="chevron up" />
        ) : (
          <img src={chevronDown} alt="chevron down" />
        )}
      </div>
      {isOpen && <div className="collapse-content">{props.children}</div>}
    </div>
  );
}

export default Collapse;
