import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ServiceCard = (props) => {
  return (
    <div className="bg-white overflow-hidden shadow-lg py-3 px-5 w-100 mt-5 d-flex align-items-center gap-3 ">
      <div style={{ marginLeft: "-60px" }}>
        <FontAwesomeIcon
          icon={props.icon}
          className="text-primary"
          style={{ fontSize: "50px" }}
        />
      </div>
      <div className="text-start">
        <h6>{props.head}</h6>
        <p className="mt-1 mb-0">{props.para}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
