//show related items at the end of the details page
import React from "react";
import image1 from "../../../images/ian-dooley-DJ7bWa-Gwks-unsplash.jpg";
import image2 from "../../../images/sean-pollock-PhYq704ffdA-unsplash.jpg";
import image3 from "../../../images/istockphoto-1277348882-170667a.jpg";
import image4 from "../../../images/michael-soledad-NrR6ByFMBas-unsplash.jpg";
import ProjectList from "../../portfolio/ProjectList";
const Relatedprojects = () => {
  const Projects = [
    {
      id: "1",
      image: image1,
      workname: "work name",
      webdesign: "web design",
    },
    {
      id: "2",
      image: image2,
      workname: "work name",
      webdesign: "web design",
    },
    {
      id: "3",
      image: image3,
      workname: "work name",
      webdesign: "web design",
    },
    {
      id: "4",
      image: image4,
      workname: "work name",
      webdesign: "web design",
    },
  ];
  return (
    <div className="mt-5">
      <h3>Related Projects</h3>
      <div className="w-100 d-flex gap-1 flex-wrap justify-content-evenly mt-5">
        <ProjectList items={Projects} />
      </div>
    </div>
  );
};

export default Relatedprojects;
