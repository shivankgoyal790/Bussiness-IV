import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectSummary = () => {
  return (
    <div className="py-5 d-flex flex-column gap-3">
      <div className="d-flex gap-2 align-items-center">
        <div className="d-flex justify-content-center align-items-center bg-secondary p-3 rounded-circle">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="d-flex justify-content-center align-items-center bg-secondary p-3 rounded-circle">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <h1 className="m-0">Project Name</h1>
      <hr></hr>
      <h5 className="w-75">
        Drops of rain could be heard hitting the pane, which made him feel quite
        sad. “How about if I sleep a little bit longer and forget all this
        nonsense”.
      </h5>
      <ul>
        <li>Brainstorming</li>
        <li>Designing</li>
        <li>Building</li>
        <li>Presenting</li>
      </ul>
    </div>
  );
};
export default ProjectSummary;
