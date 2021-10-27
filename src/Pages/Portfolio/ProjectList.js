import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = (props) => {
  return props.items.map((curr) => {
    return (
      <ProjectCard
        key={curr.id}
        image={curr.image}
        workname={curr.workname}
        webdesign={curr.webdesign}
      />
    );
  });
};
export default ProjectList;
