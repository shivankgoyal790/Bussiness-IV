import React from "react";
import configdata from "../../../config.json";
import FeedbackCard from "./FeedbackCard";
import { Carousel } from "react-bootstrap";
const Feedback = () => {
  return (
    <>
      <div className="mt-5 pt-5" style={{ backgroundColor: "aliceblue" }}>
        <h4 style={{ letterSpacing: "1.2px", textAlign: "center" }}>
          TESTIMONIAL
        </h4>
        <h5 className="text-center text-primary ">Love From our Clients</h5>
        <Carousel>
          <Carousel.Item
            style={{ backgroundColor: "aliceblue", border: "none" }}
          >
            <div className="d-flex gap-3 justify-content-center p-5  ">
              <div>
                <FeedbackCard
                  head={configdata.Services.feedback.container1.card1.head}
                  para={configdata.Services.feedback.container1.card1.para}
                />
              </div>
              <div className="d-none d-md-block">
                <FeedbackCard
                  head={configdata.Services.feedback.container1.card2.head}
                  para={configdata.Services.feedback.container1.card2.para}
                />
              </div>
              <div className="d-lg-block d-none">
                <FeedbackCard
                  head={configdata.Services.feedback.container1.card3.head}
                  para={configdata.Services.feedback.container1.card3.para}
                />
              </div>
              <div className="d-xl-block d-none">
                <FeedbackCard
                  head={configdata.Services.feedback.container1.card4.head}
                  para={configdata.Services.feedback.container1.card4.para}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item
            style={{ backgroundColor: "aliceblue", border: "none" }}
          >
            <div className="d-flex gap-3 justify-content-center p-5 ">
              <div>
                <FeedbackCard
                  head={configdata.Services.feedback.container2.card1.head}
                  para={configdata.Services.feedback.container2.card1.para}
                />
              </div>
              <div className="d-none d-md-block">
                <FeedbackCard
                  head={configdata.Services.feedback.container2.card2.head}
                  para={configdata.Services.feedback.container2.card2.para}
                />
              </div>
              <div className="d-lg-block d-none">
                <FeedbackCard
                  head={configdata.Services.feedback.container2.card3.head}
                  para={configdata.Services.feedback.container2.card3.para}
                />
              </div>
              <div className="d-xl-block d-none">
                <FeedbackCard
                  head={configdata.Services.feedback.container2.card4.head}
                  para={configdata.Services.feedback.container2.card4.para}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item
            style={{ backgroundColor: "aliceblue", border: "none" }}
          >
            <div className="d-flex gap-3 justify-content-center p-5 ">
              <div>
                <FeedbackCard
                  head={configdata.Services.feedback.container3.card1.head}
                  para={configdata.Services.feedback.container3.card1.para}
                />
              </div>
              <div className="d-none d-md-block">
                <FeedbackCard
                  head={configdata.Services.feedback.container3.card2.head}
                  para={configdata.Services.feedback.container3.card2.para}
                />
              </div>
              <div className="d-lg-block d-none">
                <FeedbackCard
                  head={configdata.Services.feedback.container3.card3.head}
                  para={configdata.Services.feedback.container3.card3.para}
                />
              </div>
              <div className="d-xl-block d-none">
                <FeedbackCard
                  head={configdata.Services.feedback.container3.card4.head}
                  para={configdata.Services.feedback.container3.card4.para}
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Feedback;
