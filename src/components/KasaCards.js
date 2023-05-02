import { useContext } from "react";
import { DataContext } from "./DataContext";
import KasaCard from "./KasaCard";

const KasaCards = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="kasaCards-content">
      {data.map((kasa) => {
        return <KasaCard kasa={kasa} key={kasa.id} />;
      })}
    </div>
  );
};

export default KasaCards;
