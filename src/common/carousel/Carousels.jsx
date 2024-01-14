import React from "react";
import Carousel from "react-multi-carousel";
import { CustomButtonGroupAsArrows } from "../CustomButtons_Slider";
import "react-multi-carousel/lib/styles.css";

const Carousels = ({ children, responsive, dotted, arrow,autoPlay }) => {
  return (
    <Carousel
      arrows={false}
      autoPlay={autoPlay}
      autoPlaySpeed={2000}
      customButtonGroup={<CustomButtonGroupAsArrows/>}
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
      renderButtonGroupOutside={true}
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
