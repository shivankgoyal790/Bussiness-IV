import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Infocard1 from "./InfoCard1";
import Infocard2 from "./Infocard2";
import logo from "../../../images/images_features12-a_0-1544804161468.jpg";
const Infocardcontainer = () => {
  return (
    <div className="row w-100 mt-5">
      <div className="col-lg-10 col-12 mx-auto">
        <div className="row">
          <div className="col-md-4 col-12">
            <Infocard1 head="Digital Computing" />
            <Infocard1 head="Cloud Computing" />
            <Infocard1 head="AI Frameworks" />
          </div>
          <div className="col-md-4 col-12 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid m-auto"
              src={logo}
              alt="logo"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4 col-12">
            <Infocard2 head="My Heading is awesome" />
            <Infocard2 head="My Heading is awesome" />
            <Infocard2 head="My Heading is awesome" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infocardcontainer;
