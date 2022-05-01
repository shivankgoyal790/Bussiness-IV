import React from "react";
import Mainnav from "../../shared/components/Mainnav";
import Heading from "./components/Heading";
import image from "../../images/xabout1.jpg.pagespeed.ic.SJERQMLMIa.webp";
import "./Services.css";
import Discussion from "./components/Discussion";
import Feedback from "./components/Feedback";
import BrandsContainer from "./components/BrandsContainer";
import ServicesCardContainer from "./components/ServicesCardContainer";
import configdata from "../../config.json";
import IndustryCardList from "./components/IndustryCardList";
const Services = () => {
  return (
    <div className="w-100">
      <Mainnav />
      <div className="service-bg text-white p-5 mt-5 text-sm-start text-center ">
        <h1 className="py-5 ms-md-5 ms-0 my-3">Services</h1>
      </div>
      <Heading />
      <div
        className="container p-sm-5 p-1 text-center"
        style={{ backgroundColor: "aliceblue" }}
      >
        <h2 className="text-primary">Services</h2>
        <p className="col-lg-10 col-12 mx-auto">
          {configdata.Services.services_container.para}
        </p>
        <ServicesCardContainer />
      </div>

      <div className="text-center mt-5 pt-5">
        <h6 className="text-primary" style={{ letterSpacing: "2px" }}>
          INDUSTRY WE OFFER
        </h6>
        <h2 className="text-primary">{configdata.Services.industry.head}</h2>
        <p className="col-lg-6 col-md-8 col-12 mx-auto">
          {configdata.Services.industry.para}
        </p>
        <IndustryCardList />
      </div>

      <div className="container mt-5 d-flex flex-md-row flex-column">
        <div
          className="bg-primary p-5 d-flex flex-column justify-content-center text-white gap-4"
          style={{ flex: "50%" }}
        >
          <h2>{configdata.Services.learn.head}</h2>
          <h6>{configdata.Services.learn.para}</h6>
          <button type="button" className="btn mybtn py-2">
            {configdata.Services.learn.button}
          </button>
        </div>
        <div style={{ flex: "50%" }}>
          <img src={image} width="100%" height="100%" alt="industry" />
        </div>
      </div>
      <BrandsContainer />
      <Feedback />
      <Discussion />
    </div>
  );
};

export default Services;
