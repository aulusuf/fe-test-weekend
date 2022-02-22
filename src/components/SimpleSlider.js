import axios from "axios";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import SlickArrowLeft from "./SlickArrowLeft";
import SlickArrowRight from "./SlickArrowRight";

const SimpleSlider = () => {
  const [testimonial, getTestimonial] = useState();
  useEffect(() => {
    axios
      .get("https://wknd-take-home-challenge-api.herokuapp.com/testimonial")
      .then((res) => {
        getTestimonial(res.data);
      });
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    centerPadding: 10,

    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {testimonial &&
          testimonial.map((item, index) => {
            return (
              <div className="testimonial-slider" key={index}>
                <div className="testimony">
                  <h4>{item.by}</h4>
                  <p>{item.testimony}</p>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
