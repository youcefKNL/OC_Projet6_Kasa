import React from "react";
import logoKasaWhite from "../assets/icon/logoKasaBlanc.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logoKasaWhite} alt="logo de Kasa" />
      </div>
      <div className="copyright">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;
