import React from "react";
import KasaCardSelected from "../components/KasaCardSelected";
import Navigation from "../components/Navigation";
import { useLocation } from "react-router-dom";

const KasaLocation = (props) => {
  const { title, tag, description, cover } = props.location?.state || {};
  console.log(title, tag, description, cover);
  let location = useLocation();
  console.log(location.state);
  return (
    <div>
      <Navigation />

      <KasaCardSelected
        title={title}
        tag={tag}
        description={description}
        cover={cover}
      />
    </div>
  );
};

export default KasaLocation;
