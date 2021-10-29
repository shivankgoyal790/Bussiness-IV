// contacts cards , our support department container
import React from "react";
import ContactCards from "./ContactCards";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import ConfigData from "../../../config.json";
const ContactCardContainer = () => {
  return (
    <>
      <h1 className="display-6 mt-5" style={{ fontWeight: "700" }}>
        {ConfigData.Contact_Us.department_header}
      </h1>
      <div className="row w-100">
        <p
          className="text-center text-secondary col-md-8 col-12 m-auto"
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          {ConfigData.Contact_Us.support_desc}
        </p>
      </div>
      <div className="w-100 d-flex flex-md-row flex-column justify-content-center align-items-center gap-5 flex-wrap">
        <ContactCards
          text={ConfigData.Contact_Us.Card_heading1}
          icon={faUsers}
        />
        <ContactCards
          text={ConfigData.Contact_Us.Card_heading1}
          icon={faUsers}
        />
        <ContactCards
          text={ConfigData.Contact_Us.Card_heading1}
          icon={faUsers}
        />
        <ContactCards
          text={ConfigData.Contact_Us.Card_heading1}
          icon={faUsers}
        />
      </div>
    </>
  );
};
export default ContactCardContainer;
