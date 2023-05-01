import React from "react";
import Carrousel from "./KasaLocationComponents/Carrousel";
import Header from "./KasaLocationComponents/Header";
import Collapse from "./Collapse";

const KasaCardSelected = ({ kasa }) => {
  return (
    <div>
      <Carrousel images={kasa.pictures} />
      <Header kasa={kasa} />
      <div className="collapse-container">
        <Collapse title="Description">{kasa.description}</Collapse>
        <Collapse title="Équipements">
          {kasa.equipments.map((equipment) => (
            <p key={equipment}>
              {equipment}
              <br />
            </p>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default KasaCardSelected;
