import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import configdata from "../../../config.json";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import FeedbackCard from "./FeedbackCard";
const Feedback = () => {
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
  return (
    <div
      className="carousel slide mt-5 pt-5"
      data-ride="carousel"
      style={{ backgroundColor: "aliceblue" }}
    >
      <h4 style={{ letterSpacing: "1.2px", textAlign: "center" }}>
        TESTIMONIAL
      </h4>
      <h5 className="text-center">Love From our Clients</h5>
      <div className="carousel-inner bg-white">
        <div
          className="carousel-item active"
          style={{ backgroundColor: "aliceblue", border: "none" }}
        >
          <div className="d-flex gap-3 justify-content-center p-5  ">
            <div>
              <FeedbackCard
                head={configdata.Services.feedback.container1.card1.head}
                para={configdata.Services.feedback.container1.card1.para}
              />
            </div>
            <div className="d-none d-sm-block">
              <FeedbackCard
                head={configdata.Services.feedback.container1.card2.head}
                para={configdata.Services.feedback.container1.card2.para}
              />
            </div>
            <div className="d-md-block d-none">
              <FeedbackCard
                head={configdata.Services.feedback.container1.card3.head}
                para={configdata.Services.feedback.container1.card3.para}
              />
            </div>
            <div className="d-lg-block d-none">
              <FeedbackCard
                head={configdata.Services.feedback.container1.card4.head}
                para={configdata.Services.feedback.container1.card4.para}
              />
            </div>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{ backgroundColor: "aliceblue", border: "none" }}
        >
          <div className="d-flex gap-3 justify-content-center p-5 ">
            <div>
              <FeedbackCard
                head={configdata.Services.feedback.container2.card1.head}
                para={configdata.Services.feedback.container2.card1.para}
              />
            </div>
            <div className="d-none d-sm-block">
              <FeedbackCard
                head={configdata.Services.feedback.container2.card2.head}
                para={configdata.Services.feedback.container2.card2.para}
              />
            </div>
            <div className="d-md-block d-none">
              <FeedbackCard
                head={configdata.Services.feedback.container2.card3.head}
                para={configdata.Services.feedback.container2.card3.para}
              />
            </div>
            <div className="d-lg-block d-none">
              <FeedbackCard
                head={configdata.Services.feedback.container2.card4.head}
                para={configdata.Services.feedback.container2.card4.para}
              />
            </div>
          </div>
        </div>
        <div
          className="carousel-item"
          style={{ backgroundColor: "aliceblue", border: "none" }}
        >
          <div className="d-flex gap-3 justify-content-center p-5 ">
            <div>
              <FeedbackCard
                head={configdata.Services.feedback.container3.card1.head}
                para={configdata.Services.feedback.container3.card1.para}
              />
            </div>
            <div className="d-none d-sm-block">
              <FeedbackCard
                head={configdata.Services.feedback.container3.card2.head}
                para={configdata.Services.feedback.container3.card2.para}
              />
            </div>
            <div className="d-md-block d-none">
              <FeedbackCard
                head={configdata.Services.feedback.container3.card3.head}
                para={configdata.Services.feedback.container3.card3.para}
              />
            </div>
            <div className="d-lg-block d-none">
              <FeedbackCard
                head={configdata.Services.feedback.container3.card4.head}
                para={configdata.Services.feedback.container3.card4.para}
              />
            </div>
          </div>
        </div>
      </div>

      <span
        className="position-absolute bg-white text-black p-sm-3 p-2"
        style={{ left: "60px", cursor: "pointer", top: "12%" }}
        onClick={prevhandler}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>

      <span
        className="position-absolute bg-white text-black p-sm-3 p-2 "
        style={{ right: "60px", cursor: "pointer", top: "12%" }}
        onClick={nexthandler}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </div>
  );
};

export default Feedback;
