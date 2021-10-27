import React from "react";
import Mainnav from "../../Shared/Components/Mainnav";
import ProjectList from "./ProjectList";
import image1 from "../../images/ian-dooley-DJ7bWa-Gwks-unsplash.jpg";
import image2 from "../../images/sean-pollock-PhYq704ffdA-unsplash.jpg";
import image6 from "../../images/images_features12-a_0-1544804161468.jpg";
import image3 from "../../images/istockphoto-1277348882-170667a.jpg";
import image4 from "../../images/michael-soledad-NrR6ByFMBas-unsplash.jpg";
import image5 from "../../images/mikey-harris-kw0z6RyvC0s-unsplash.jpg";

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
  {
    id: "5",
    image: image5,
    workname: "work name",
    webdesign: "web design",
  },
  {
    id: "6",
    image: image6,
    workname: "work name",
    webdesign: "web design",
  },
];

const Portfolio = () => {
  return (
    <>
      <Mainnav />
      <div className="d-flex flex-column gap-5 justify-content-center align-items-center py-5 mt-5">
        <h1 className="display-6" style={{ fontWeight: "700" }}>
          Our Projects
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
        <div className="d-flex container gap-5 flex-wrap justify-content-center align-items-center mt-5">
          <ProjectList items={Projects} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
