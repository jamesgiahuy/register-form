import React, { useState, useEffect } from "react";
import data from "./data";
const Slider = (props) => {
  const [slideIndex, setSliderIndex] = useState(1);
  const moveDot = (index) => {
    setSliderIndex(index);
  };

  const nextSlide = () => {
    if (slideIndex !== data.length) {
      setSliderIndex(slideIndex + 1);
    } else if (slideIndex === data.length) {
      setSliderIndex(1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });
  return (
    <div className="container-slider">
      {data.map((item, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            key={index}
          >
            <img src={`/images/slider_image${index + 1}.svg`} alt={item.name} />
          </div>
        );
      })}
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={
              slideIndex === index + 1
                ? "wrap-image__title active-title"
                : "wrap-image__title"
            }
          >
            <span className="register__image__tracking">{item.title}</span>
            <p className="register__image__description">{item.des}</p>
          </div>
        );
      })}
      <div className="wrapper-dot">
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              moveDot(index + 1);
            }}
            className={
              slideIndex === index + 1
                ? "register-dot active-dot"
                : "register-dot"
            }
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
