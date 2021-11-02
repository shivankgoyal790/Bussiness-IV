import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IndustryCard = (props) => {
  return (
    <div className="d-flex flex-column p-5 text-center justify-content-evenly gap-3 align-items-center text-primary shadow-sm position-relative industrycard mt-3">
      <div className="w-100 align-items-end position-absolute justify-content-center pb-3 overlay2">
        Find out more &rarr;
      </div>
      <FontAwesomeIcon icon={props.icon} style={{ fontSize: "45px" }} />
      <h4 style={{ color: "#003072" }}>{props.para}</h4>
    </div>
  );
};

export default IndustryCard;
