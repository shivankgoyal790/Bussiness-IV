import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const ContactCards = () => {
  return (
    <div className="d-flex flex-column justify-content-between align-items-center text-white gap-4 contact-card">
      <FontAwesomeIcon icon={faUsers} style={{ fontSize: "80px" }} />
      <h5>Awesome Support</h5>
    </div>
  );
};

export default ContactCards;
