import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousels = ({ children, responsive, dotted, arrow,autoPlay }) => {
  return (
    <Carousel
      arrows={arrow}
      autoPlay={autoPlay}
      autoPlaySpeed={2000}
      centerMode={false}
      className=""
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={dotted}
      sliderClass=""
    >
      {children}
    </Carousel>
  );
};

export default Carousels;
