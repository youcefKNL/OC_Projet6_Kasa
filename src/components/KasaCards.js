import React, { useEffect, useState } from "react";
import jsonData from "../data/logements.json";

const KasaCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setData(jsonData);
      console.log(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div className="kasaCards-content">
      {data.map((kasa) => {
        return (
          <div
            key={kasa.id}
            className="kasaCards"
            style={{
              backgroundImage: ` linear-gradient(360deg,
                rgba(134, 52, 52, 1) 0%,
                rgba(255, 98, 98, 0.1) 100%),url(${kasa.cover})`,
            }}
          >
            <h2>{kasa.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default KasaCards;
