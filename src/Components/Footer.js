import React from "react";
import image from "../images/footer-bg.svg";
const Footer = () => {
  return (
    <div className="w-100 mt-5">
      <div
        className="w-100"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "220px",
        }}
      ></div>
    </div>
  );
};
export default Footer;
