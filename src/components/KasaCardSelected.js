import React from "react";
import Carrousel from "./KasaLocationComponents/Carrousel";
import Header from "./KasaLocationComponents/Header";

const KasaCardSelected = ({ kasa }) => {
  return (
    <div>
      <Carrousel images={kasa.pictures} />
      <Header kasa={kasa} />

      <p>{kasa.description}</p>
    </div>
  );
};

export default KasaCardSelected;
