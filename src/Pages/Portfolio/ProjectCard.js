import React from "react";
import "./Portfolio.css";
const ProjectCard = (props) => {
  return (
    <div
      className="position-relative shadow border-secondary projecthover"
      style={{ width: "320px", height: "320px", objectFit: "cover" }}
    >
      <div className="w-100 h-100 overflow-hidden project-image">
        <img
          src={props.image}
          alt="project"
          style={{
            position: "center",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="position-absolute bg-primary overlay py-2 px-3">
        <h5 className="text-capitalize">{props.workname}</h5>
        <p className="text-uppercase">{props.webdesign}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
