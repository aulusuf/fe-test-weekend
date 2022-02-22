import React from "react";
import arrowRight from "../assets/arrowRight.svg";

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => {
  return (
    <button {...props}>
      <img
        src={arrowRight}
        alt="arrow"
        className={"arrow-left" + (currentSlide === 0 ? " slick-disabled" : "")}
      />
    </button>
  );
};

export default SlickArrowLeft;
