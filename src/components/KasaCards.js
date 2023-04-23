import React, { useEffect, useState } from "react";

const KasaCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./data/logements.json");
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div className="kasaCards-content">
      {data.map((kasa) => {
        return (
          <div key={kasa.id} className="kasaCards">
            {/* <img src={kasa.cover} alt={"image de " + kasa.title} /> */}
            <h2>{kasa.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default KasaCards;
