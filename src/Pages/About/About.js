import React from "react";
import image2 from "../../images/download.svg";
import Mainnav from "../../shared/components/Mainnav";
import SupportCards from "./components/SupportCards";
import configdata from "../../config.json";
import "./About.css";
import Aboutcontainer from "./components/Aboutcontainer";
import Investors from "./components/Investors";
import image3 from "../../images/footer-img-79b3cfc0ceb3c7e466198ae09e1d4e6e.png";
import Newsletter from "./components/NewsLetter";

const About = () => {
  return (
    <div className="w-100">
      <Mainnav />
      <div className="w-100 text-center p-sm-5 p-1 mt-5 text-white about-bg">
        <h2 className="mx-auto p-5 my-5" style={{ lineHeight: "1.5" }}>
          {configdata.Aboutus.header}
        </h2>
      </div>
      <div className="container mt-5 mx-auto p-5">
        <h4
          className="text-lg-start text-center"
          style={{ color: "#a8a8a8", letterSpacing: "1px" }}
        >
          OUR MISSION
        </h4>
        <hr className="mx-lg-0 mx-auto pt-1" style={{ width: "60px" }}></hr>
        <div className="row gap-5">
          <div
            className="col-12 col-lg-4 pe-0 pe-lg-5 text-lg-start text-center"
            style={{ fontSize: "17px" }}
          >
            {configdata.Aboutus.mission.para1}
          </div>
          <div
            className="col-12 col-lg-7 text-lg-start text-center"
            style={{ fontSize: "17px" }}
          >
            <p>{configdata.Aboutus.mission.para2}</p>
            <br />
            <p>{configdata.Aboutus.mission.para3}</p>
          </div>
        </div>
      </div>
      <Aboutcontainer />

      <div className="container mt-5 p-5 gap-lg-0 gap-5 d-flex justify-content-center flex-lg-row flex-column align-items-center">
        <div style={{ flex: "40%" }} className="text-center">
          <img src={image2} alt="pic" width="250px" />
        </div>
        <div className="me-lg-5 me-0" style={{ flex: "60%" }}>
          <h4
            className="text-lg-start text-center"
            style={{ color: "#a8a8a8", letterSpacing: "1px" }}
          >
            OUR NAME & LOGO
          </h4>
          <hr className="mx-lg-0 mx-auto pt-1" style={{ width: "60px" }}></hr>
          <p className="text-lg-start text-center" style={{ fontSize: "17px" }}>
            {configdata.Aboutus.about_company.para}
          </p>
        </div>
      </div>
      <SupportCards />
      <Investors />
      <Newsletter />
      <div className="w-100 text-center">
        <img
          src={image3}
          alt="pic"
          className="mx-auto w-100"
          style={{ objectPosition: "center", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default About;
