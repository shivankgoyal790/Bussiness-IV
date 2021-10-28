//PROJECTS AND TEAM MEMBERS COMPONENT
import React from "react";
import configData from "../../../config.json";
const Team = () => {
  return (
    <div className="w-100 text-white d-flex flex-column align-items-center gap-3 pt-5 pb-6 team-bg">
      <h1
        className="display-5 mt-5 desc-para text-white"
        style={{ fontWeight: "600" }}
      >
        {configData.team.header}
      </h1>
      <p className="w-75 text-center mt-3 desc-para text-white py-4">
        {configData.team.para}
      </p>
      <div className="w-100 d-flex flex-column flex-md-row justify-content-evenly align-items-center mt-5">
        <div className="d-flex flex-column gap-3 justify-content-between align-items-center">
          <h1 className="display-2" style={{ fontWeight: "400" }}>
            {configData.team.teamcard1.number}
          </h1>
          <h5>{configData.team.teamcard4.para}</h5>
        </div>
        <div className="d-flex flex-column gap-3 justify-content-between align-items-center">
          <h1 className="display-2" style={{ fontWeight: "400" }}>
            {configData.team.teamcard2.number}
          </h1>
          <h5>{configData.team.teamcard4.para}</h5>
        </div>
        <div className="d-flex flex-column gap-3 justify-content-between align-items-center">
          <h1 className="display-2" style={{ fontWeight: "400" }}>
            {configData.team.teamcard3.number}
          </h1>
          <h5>{configData.team.teamcard4.para}</h5>
        </div>
        <div className="d-flex flex-column gap-3 justify-content-between align-items-center">
          <h1 className="display-2" style={{ fontWeight: "400" }}>
            {configData.team.teamcard4.number}
          </h1>
          <h5>{configData.team.teamcard4.para}</h5>
        </div>
      </div>
    </div>
  );
};

export default Team;
