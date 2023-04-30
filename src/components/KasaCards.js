// import { useEffect, useState } from "react";
// import jsonData from "../data/logements.json";
// //import { NavLink } from "react-router-dom";
// import KasaCard from "./KasaCard";

// const KasaCards = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setData(jsonData);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="kasaCards-content">
//       {data.map((kasa) => {
//         return <KasaCard kasa={kasa} key={kasa.id} />;
//       })}
//     </div>
//   );
// };

// export default KasaCards;

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
