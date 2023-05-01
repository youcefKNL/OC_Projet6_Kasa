// import React from "react";
// import KasaCardSelected from "../components/KasaCardSelected";
// import Navigation from "../components/Navigation";
// import { useLocation } from "react-router-dom";

// const KasaLocation = () => {
//   const { title, tag, description, cover } = useLocation().state || {};
//   console.log(title, tag, description, cover);
//   let location = useLocation();
//   console.log(location.state);
//   return (
//     <div>
//       <Navigation />

//       <KasaCardSelected
//         title={title}
//         tag={tag}
//         description={description}
//         cover={cover}
//       />
//     </div>
//   );
// };

// export default KasaLocation;
import React, { useContext } from "react";
import KasaCardSelected from "../components/KasaCardSelected";
import Navigation from "../components/Navigation";
import { DataContext } from "../components/DataContext";
import { useParams } from "react-router-dom";
import Page404 from "./Page404";
import Footer from "../components/Footer";

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
      <Navigation />
      <KasaCardSelected kasa={selectedKasa} />
      <Footer />
    </div>
  );
};

export default KasaLocation;
