import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const ContactCards = () => {
  return (
    <div className="p-5 d-flex flex-column justify-content-between align-items-center text-white gap-4 bg-primary">
      <FontAwesomeIcon icon={faUsers} style={{ fontSize: "80px" }} />
      <p>Awesome Support</p>
    </div>
  );
};

export default ContactCards;
