import React, { useContext } from "react";
import KasaCardSelected from "../components/KasaCardSelected";
import { DataContext } from "../components/DataContext";
import { useParams } from "react-router-dom";
import Page404 from "./Page404";

const KasaLocation = () => {
  const { data } = useContext(DataContext);
  const { id } = useParams();
  console.log({ data });
  console.log({ id });

  // Trouver le logement avec le mm Id dans l url
  const selectedKasa = data.find((kasa) => kasa.id === id);
  console.log({ selectedKasa });

  // Vérifier si id existe ou pas
  if (!selectedKasa) {
    return <Page404 />;
  }

  return (
    <div>
      <KasaCardSelected kasa={selectedKasa} />
    </div>
  );
};

export default KasaLocation;
