import React, { useState } from "react";

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
          <img src="./chevron-up-solid.svg" alt="chevron up" />
        ) : (
          <img src="./chevron-down-solid.svg" alt="chevron down" />
        )}
      </div>
      {isOpen && <div className="collapse-content">{props.children}</div>}
    </div>
  );
}

export default Collapse;
