import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../../../images/Blank-profile.png";

const FeedbackCard = (props) => {
  return (
    <div className="d-flex flex-column gap-3 bg-white px-4 py-5">
      <div className="d-flex gap-3 align-items-center justify-content-between">
        <div className="d-flex gap-3">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div
          className="rounded-circle border border-secondary"
          style={{ width: "50px", height: "50px" }}
        >
          <img src={img} alt="user" className="rounded-circle h-100 w-100" />
        </div>
      </div>
      <h6>{props.head}</h6>
      <p> {props.para}</p>
      <p>User name</p>
    </div>
  );
};

export default FeedbackCard;
