import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import KasaCards from "../components/KasaCards";
import Footer from "../components/Footer";

const Home = () => {
  const currentPage = "/";
  return (
    <div>
      <Navigation />
      <Banner currentPage={currentPage} />
      <KasaCards />
      <Footer />
    </div>
  );
};

export default Home;
