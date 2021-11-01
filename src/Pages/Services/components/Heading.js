import React from "react";

const Heading = () => {
  return (
    <div className="w-100 d-flex py-5 px-2 px-md-5 flex-column flex-md-row justify-content-evenly bg-light gap-5">
      <div className="px-lg-5 px-sm-5 px-4 mt-5">
        <h6 style={{ letterSpacing: "1px", color: "#316ec2" }}>SERVICES</h6>
        <h2 style={{ fontWeight: "700", color: "#003072" }}>
          We design apps & websites that lead in their space
        </h2>
      </div>
      <p
        className="px-lg-5 px-sm-5 px-4  mt-5"
        style={{ flex: "50%", color: "#4c526e" }}
      >
        We understand the complexities of modern markets and translate them into
        real business solutions for automotive, financial, insurance, pharma &
        life sciences,
      </p>
    </div>
  );
};

export default Heading;
