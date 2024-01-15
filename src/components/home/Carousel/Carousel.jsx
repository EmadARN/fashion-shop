import Carousels from "@/common/carousel/Carousels";
import { Box, Container } from "@mui/material";
import React from "react";
import { productimage } from "./data";
import Img_data_grid from "./widgets/Img_data_grid";
import { Responsive_carouselimg } from "./style";
import { CustomButtonGroupAsArrows3 } from "@/common/CustomButtons_Slider";

const Carousel = () => {
  return (
    <Carousels
      responsive={Responsive_carouselimg}
      dotted={true}
      arrow={false}
      autoPlay={true}
      customButtonGroup={<CustomButtonGroupAsArrows3 />}
    >
      {productimage.map((item) => {
        return <Img_data_grid item={item} />;
      })}
    </Carousels>
  );
};

export default Carousel;
