import React from "react";
import arrowRight from "../assets/arrowRight.svg";
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => {
  const hide = {
    "@media (maxWidth: 768px)": {
      display: "none !important",
    },
  };
  return (
    <button {...props} style={hide}>
      <img
        src={arrowRight}
        alt="arrow"
        className={
          "arrow-right" + currentSlide === slideCount - 1
            ? " slick-disabled"
            : ""
        }
      />
    </button>
  );
};

export default SlickArrowRight;
