import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mainnav from "../../Shared/Components/Mainnav";
import Forms from "./components/Forms";
import SocialIcons from "./components/SocialIcons";
import ContactCards from "./components/ContactCards";

const ContactUs = () => {
  return (
    <>
      <Mainnav />
      <div className="d-flex flex-column align-items-center gap-5 mt-5 pt-5 w-100">
        <h1 className="display-3" style={{ fontWeight: "700" }}>
          Contact
        </h1>
        <div className="row w-100">
          <div className="col-md-8 col-12 m-auto">
            <p
              className="w-100 text-center text-secondary"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In
              his nemore temporibus consequuntur, vim ad prima vivendum
              consetetur. Viderer feugiat at pro, mea aperiam
            </p>
          </div>
        </div>
        <div className="w-100 row mt-4 px-4">
          <div className="row col-md-8 col-sm-10 col-12 m-auto p-0">
            <div
              className="col-sm-1 col-12"
              style={{
                minwidth: "100px",
                minHeight: "50px",
                backgroundColor: "rgb(0, 119, 255)",
              }}
            ></div>
            <div className="col-sm-7 col-12 bg-white shadow-lg">
              <Forms />
            </div>
            <div
              className="col-sm-4 col-12 bg-primary d-flex flex-column align-items-center text-center text-white justify-content-center"
              style={{ minHeight: "50px", backgroundColor: "rgb(0, 119, 255)" }}
            >
              <h3 className="">Our Social Contact Information</h3>
              <SocialIcons />
            </div>
          </div>
        </div>
        <h1 className="display-6 mt-5" style={{ fontWeight: "700" }}>
          Our Support Departments
        </h1>

        <div className="row w-100">
          <p
            className="text-center text-secondary col-md-8 col-12 m-auto"
            style={{ fontSize: "18px", fontWeight: "500" }}
          >
            Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In
            his nemore temporibus consequuntur, vim ad prima vivendum
            consetetur. Viderer feugiat at pro, mea aperiam
          </p>
        </div>
        <div className="w-100 d-flex flex-md-row flex-column justify-content-center align-items-center gap-5">
          <ContactCards />
          <ContactCards />
          <ContactCards />
          <ContactCards />
        </div>
      </div>
    </>
  );
};

export default ContactUs;
