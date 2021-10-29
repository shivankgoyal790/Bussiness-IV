import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainnav from "../../Shared/Components/Mainnav";
import Forms from "./components/Forms";
import SocialIcons from "./components/SocialIcons";
import ContactCardContainer from "./components/ContactCardContainer";
import ConfigData from "../../config.json";
const ContactUs = () => {
  return (
    <>
      <Mainnav />
      <div className="d-flex flex-column align-items-center gap-5 mt-5 pt-5 w-100">
        <h1 className="display-3" style={{ fontWeight: "700" }}>
          {ConfigData.Contact_Us.header}
        </h1>
        <div className="row w-100">
          <div className="col-md-8 col-12 m-auto">
            <p
              className="w-100 text-center text-secondary"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              {ConfigData.Contact_Us.para}
            </p>
          </div>
        </div>
        <div className="w-100 row mt-4 px-md-4 p-4">
          <div className="row col-lg-8 col-md-10 col-12 m-auto p-0">
            <div
              className="col-sm-1 col-12 d-flex flex-sm-column flex-row justify-content-between p-0"
              style={{
                minwidth: "100px",
                minHeight: "50px",
                backgroundColor: "rgb(0, 119, 255)",
              }}
            >
              <div
                className="bg-white d-none d-sm-block w-100"
                style={{ height: "50px" }}
              ></div>
              <div
                className="bg-white d-sm-block d-none w-100"
                style={{ height: "50px" }}
              ></div>
            </div>
            <div className="col-sm-7 col-12 bg-white shadow-lg border">
              <Forms />
            </div>
            <div
              className="col-sm-4 col-12 bg-primary d-flex flex-column align-items-center text-center text-white justify-content-between p-0"
              style={{ minHeight: "50px", backgroundColor: "rgb(0, 119, 255)" }}
            >
              <div
                className="bg-white d-none d-sm-block w-100"
                style={{ height: "50px" }}
              ></div>
              <div className="py-sm-0 py-5 ">
                <h3 className="">{ConfigData.Contact_Us.Social_icons_info}</h3>
                <SocialIcons />
              </div>
              <div
                className="bg-white d-sm-block d-none w-100"
                style={{ height: "50px" }}
              ></div>
            </div>
          </div>
        </div>
        <ContactCardContainer />
      </div>
    </>
  );
};

export default ContactUs;
