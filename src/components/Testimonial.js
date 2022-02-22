import React from "react";
import SimpleSlider from "./SimpleSlider";

function Testimonial(props) {
  return (
    <div className="">
      <div
        className="testimonial container-custom"
        style={{
          backgroundPosition: `top 38px left ${
            283 - (1366 - props.width) / 2
          }px`,
        }}
      >
        <div className="testimonial-content">
          <h2>Testimonial</h2>

          <SimpleSlider />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
