import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactCards = (props) => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center text-white gap-4 contact-card">
      <FontAwesomeIcon icon={props.icon} style={{ fontSize: "80px" }} />
      <h5>{props.text}</h5>
    </div>
  );
};

export default ContactCards;
