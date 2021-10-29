import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../Contact.css";

const SocialIcons = () => {
  return (
    <div className="d-flex gap-3 justify-content-center align-items-center">
      <div className="rounded-circle border d-flex justify-content-evenly align-items-center iconsize">
        <FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: "26px" }} />
      </div>
      <div className="rounded-circle border d-flex justify-content-evenly align-items-center iconsize">
        <FontAwesomeIcon icon={faTwitterSquare} style={{ fontSize: "26px" }} />
      </div>
      <div className="rounded-circle border d-flex justify-content-evenly align-items-center iconsize">
        <FontAwesomeIcon icon={faYoutubeSquare} style={{ fontSize: "26px" }} />
      </div>
    </div>
  );
};

export default SocialIcons;
