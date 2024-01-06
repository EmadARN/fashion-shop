import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const CarouselMain = () => (
  <AutoplaySlider
    animation="cubeAnimation"
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
    className="Carousel"
    style={{ width: "100%" }}
  >
    <div data-src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-04/woman%20shopping.jpg" />
    <div data-src="https://img.freepik.com/free-photo/two-beautiful-women-shopping-town_1303-16426.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702944000&semt=ais" />
    <div data-src="https://partoclinic.com/wp-content/uploads/2022/06/anus-opening.jpg" />
  </AutoplaySlider>
);

export default CarouselMain;
