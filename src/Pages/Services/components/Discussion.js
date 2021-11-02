import React from "react";
import configdata from "../../../config.json";
const Discussion = () => {
  return (
    <div className="bg-primary w-100 p-5 d-flex flex-column align-items-center justify-content-center gap-4 mt-5 text-white">
      <h1>{configdata.Services.discussion.head}</h1>
      <p className="col-lg-6 col-md-10 col-11 text-center">
        {configdata.Services.discussion.para}
      </p>
      <button className="btn mybtn">
        {configdata.Services.discussion.button}
      </button>
    </div>
  );
};
export default Discussion;
