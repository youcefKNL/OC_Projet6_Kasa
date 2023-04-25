import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import NotFound404 from "../components/NotFound404";

const Page404 = () => {
  return (
    <div className="page-404">
      <Navigation />
      <NotFound404 />
      <Footer />
    </div>
  );
};

export default Page404;
