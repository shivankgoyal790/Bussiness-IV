// contacts cards , our support department container

import React from "react";
import ContactCards from "./ContactCards";
const ContactCardContainer = () => {
  return (
    <>
      <h1 className="display-6 mt-5" style={{ fontWeight: "700" }}>
        Our Support Departments
      </h1>
      <div className="row w-100">
        <p
          className="text-center text-secondary col-md-8 col-12 m-auto"
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his
          nemore temporibus consequuntur, vim ad prima vivendum consetetur.
          Viderer feugiat at pro, mea aperiam
        </p>
      </div>
      <div className="w-100 d-flex flex-md-row flex-column justify-content-center align-items-center gap-5">
        <ContactCards />
        <ContactCards />
        <ContactCards />
        <ContactCards />
      </div>
    </>
  );
};
export default ContactCardContainer;
