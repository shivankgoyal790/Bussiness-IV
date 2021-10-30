import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import configData from "../../../config.json";
const SupportCards = () => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-5 mt-5 flex-lg-row flex-column">
      <div className="d-flex flex-column gap-2 py-4 px-5 shadow-lg justify-content-center align-items-center">
        <FontAwesomeIcon style={{ fontSize: "80px" }} icon={faUserAlt} />
        <h4 className="m-0">Our Customers</h4>
        <p>{configData.Aboutus.suppportcard1.para}</p>
      </div>
      <div className="d-flex flex-column gap-2 py-4 px-5 shadow-lg justify-content-center align-items-center">
        <FontAwesomeIcon style={{ fontSize: "80px" }} icon={faUserAlt} />
        <h4 className="m-0">Our Customers</h4>
        <p>{configData.Aboutus.suppportcard2.para}</p>
      </div>
      <div className="d-flex flex-column gap-2 py-4 px-5 shadow-lg justify-content-center align-items-center">
        <FontAwesomeIcon style={{ fontSize: "80px" }} icon={faUserAlt} />
        <h4 className="m-0">Our Customers</h4>
        <p>{configData.Aboutus.suppportcard3.para}</p>
      </div>
    </div>
  );
};

export default SupportCards;
