import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Infocardcontainer from "./Infocardcontainer";

const Whatwedo = () => {
  return (
    <div
      className="w-100 text-white d-flex flex-column justify-content-evenly align-items-center py-5 gap-4"
      style={{ backgroundColor: "rgb(0, 119, 255)" }}
    >
      <h1 className="display-5">What can we do for you</h1>
      <p className="text-center w-50">
        Lorem ipsum dolor sit amet, at mei dolore tritani repudiandae. In his
        nemore temporibus consequuntur, vim ad prima vivendum consetetur.
        Viderer feugiat at pro, mea aperiam
      </p>
     <Infocardcontainer/>
    </div>
  );
};

export default Whatwedo;
