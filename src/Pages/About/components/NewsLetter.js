import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import image from "../../../images/newsletter-95d9c2d036b201b774751ce353f7699f.png";
const Newsletter = () => {
  return (
    <div
      className="container-lg row text-white py-5 px-2 px-lg-5 mx-auto  mt-5"
      style={{ backgroundColor: "rgb(0, 48, 77)" }}
    >
      <div className="col-md-10 col-12 d-flex flex-md-row flex-column justify-content-center gap-5 py-5 px-1 px-sm-5 align-items-md-start align-items-center mx-auto">
        <div className="d-lg-inline d-none">
          <img src={image} width="300px" alt="pic" />
        </div>
        <div
          className="d-flex flex-column gap-5 align-items-md-start align-item-center"
          style={{ flex: "90%" }}
        >
          <h3 className="text-center text-md-start">
            Monthly product updates in your inbox. No spam.
          </h3>
          <div className="d-flex justify-content-center gap-2 flex-sm-row flex-column w-100">
            <div className="position-relative" style={{ flex: "70%" }}>
              <input
                type="text"
                placeholder="Your Email Address"
                className="py-2 px-5 form-control"
                style={{ flex: "100%" }}
              ></input>
              <FontAwesomeIcon
                className="position-absolute text-black"
                style={{ top: "11px", left: "15px", fontSize: "22px" }}
                icon={faEnvelope}
              />
            </div>
            <button className="btn btn-primary" style={{ flex: "30%" }}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
