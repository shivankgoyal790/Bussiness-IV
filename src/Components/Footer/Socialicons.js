import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SocialIcons = (props) => {
  return (
    <div
      className="d-flex justify-content-md-between align-items-center gap-2"
      style={{ color: props.color }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          cursor: "pointer",
          backgroundColor: props.bgcolor,
        }}
        className="rounded-circle border border-white d-flex justify-content-center align-items-center"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </div>
      <div
        style={{
          width: "50px",
          height: "50px",
          cursor: "pointer",
          backgroundColor: props.bgcolor,
        }}
        className="rounded-circle border border-white d-flex justify-content-center align-items-center"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <div
        style={{
          width: "50px",
          height: "50px",
          cursor: "pointer",
          backgroundColor: props.bgcolor,
        }}
        className="rounded-circle border border-white d-flex justify-content-center align-items-center"
      >
        <FontAwesomeIcon icon={faGlobe} />
      </div>
      <div
        style={{
          width: "50px",
          height: "50px",
          cursor: "pointer",
          backgroundColor: props.bgcolor,
        }}
        className="rounded-circle border border-white d-flex justify-content-center align-items-center"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
};

export default SocialIcons;
