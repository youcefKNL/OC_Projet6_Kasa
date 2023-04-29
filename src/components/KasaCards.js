import { useEffect, useState } from "react";
import jsonData from "../data/logements.json";
//import { NavLink } from "react-router-dom";
import KasaCard from "./KasaCard";

const KasaCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div className="kasaCards-content">
      {data.map((kasa) => {
        return <KasaCard kasa={kasa} key={kasa.id} />;
      })}
    </div>
  );
};

export default KasaCards;
