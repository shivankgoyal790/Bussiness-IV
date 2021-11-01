import React from "react";
import Mainnav from "../../Shared/Components/Mainnav";
import Heading from "./components/Heading";
import IndustryCard from "./components/IndustryCard";
import ServiceCard from "./components/ServiceCard";
import image from "../../images/xabout1.jpg.pagespeed.ic.SJERQMLMIa.webp";
import "./Services.css";
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
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="row px-sm-4 px-0">
          <div className="col-lg-4 col-md-6 col-11 mx-md-0 mx-auto">
            <ServiceCard />
          </div>
          <div className="col-lg-4 col-md-6 col-11 mx-md-0 mx-auto">
            <ServiceCard />
          </div>
          <div className="col-lg-4 col-md-6 col-11 mx-md-0 mx-auto">
            <ServiceCard />
          </div>
          <div className="col-lg-4 col-md-6 col-11 mx-md-0 mx-auto">
            <ServiceCard />
          </div>
          <div className="col-lg-4 col-md-6 col-11 mx-md-0 mx-auto">
            <ServiceCard />
          </div>
          <div className="col-lg-4 col-md-6 col-11 mx-md-0 mx-auto">
            <ServiceCard />
          </div>
        </div>
      </div>

      <div className="text-center mt-5 pt-5">
        <h6 className="text-primary" style={{ letterSpacing: "2px" }}>
          INDUSTRY WE OFFER
        </h6>
        <h2 className="text-primary">
          Managed IT services customized for your industry{" "}
        </h2>
        <p className="col-lg-6 col-md-8 col-12 mx-auto">
          We understand the complexities of modern markets and translate them
          into real business solutions for automotive, financial, insurance,
          pharma & life sciences,
        </p>
        <div className="row container mx-auto mt-5 gap-5 gap-md-0">
          <div className="col-lg-3 col-md-4 col-11 mx-auto">
            <IndustryCard />
          </div>
          <div className="col-lg-3 col-md-4 col-10 mx-auto">
            <IndustryCard />
          </div>
          <div className="col-lg-3 col-md-4 col-10 mx-auto">
            <IndustryCard />
          </div>
          <div className="col-lg-3 col-md-4 col-10 mx-auto">
            <IndustryCard />
          </div>
        </div>
      </div>

      <div className="container mt-5 d-flex flex-md-row flex-column">
        <div className="bg-primary p-5 d-flex flex-column justify-content-center text-white gap-4">
          <h2>
            Insights to help you do what you do better, faster and more
            profitably.
          </h2>
          <h6>
            We understand the complexities of modern markets and translate them
            into real business solutions for automotive, financial, insuranc.
          </h6>
          <button
            type="button"
            className="btn nav-item d-lg-inline d-none startbtn px-3 py-2 w-25"
          >
            START NOW!
          </button>
        </div>
        <div>
          <img src={image} width="100%" alt="industry" />
        </div>
      </div>
    </div>
  );
};

export default Services;
