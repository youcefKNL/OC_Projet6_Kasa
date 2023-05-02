import React from "react";
import Banner from "../components/Banner";
import KasaCards from "../components/KasaCards";

const Home = () => {
  //const currentPage = "/";
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" class="homeBackground" />
      <KasaCards />
    </div>
  );
};

export default Home;
