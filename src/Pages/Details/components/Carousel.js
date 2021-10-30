import React from "react";
import image1 from "../../../images/ian-dooley-DJ7bWa-Gwks-unsplash.jpg";
import image2 from "../../../images/mikey-harris-kw0z6RyvC0s-unsplash.jpg";
import image3 from "../../../images/istockphoto-1277348882-170667a.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const Carousel = () => {
  const prevhandler = () => {
    var tag = document.getElementsByClassName("carousel-item");
    for (var i = 0; i < 3; i++) {
      if (tag[i].classList[1] === "active") {
        tag[i].classList.remove("active");
        if (i === 0) {
          tag[2].classList.add("active");
        } else {
          tag[i - 1].classList.add("active");
        }
        break;
      }
    }
  };

  const nexthandler = () => {
    var tag = document.getElementsByClassName("carousel-item");
    for (var i = 0; i < 3; i++) {
      if (tag[i].classList[1] === "active") {
        tag[i].classList.remove("active");
        if (i === 2) {
          tag[0].classList.add("active");
        } else {
          tag[i + 1].classList.add("active");
        }
        break;
      }
    }
  };

  setInterval(() => {
    nexthandler();
  }, 4000);
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide container mt-5 pt-5"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item">
          <img className="d-block w-100" src={image1} alt="First slide" />
        </div>
        <div className="carousel-item active">
          <img className="d-block w-100" src={image2} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </div>
      </div>

      <span
        className="position-absolute bg-white text-black p-sm-3 p-2 top-50"
        style={{ left: "15px", cursor: "pointer" }}
        onClick={prevhandler}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>

      <span
        className="position-absolute bg-white text-black p-sm-3 p-2 top-50"
        style={{ right: "15px", cursor: "pointer" }}
        onClick={nexthandler}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </div>
  );
};
export default Carousel;
