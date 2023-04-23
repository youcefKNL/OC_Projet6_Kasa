import React from "react";
import Navigation from "../components/Navigation";
import HeaderImg from "../components/Banner";

const About = () => {
  const currentPage = "/about";
  return (
    <div>
      <Navigation />
      <HeaderImg currentPage={currentPage} />
    </div>
  );
};

export default About;
