import Carousels from "@/common/carousel/Carousels";
import { Box } from "@mui/material";
import React from "react";
import { productimage } from "./data";
import Img_data_grid from "./widgets/Img_data_grid";
import { Responsive_carouselimg } from "./style";

const Carousel = () => {
  return (
    <Box>
      <Carousels
        responsive={Responsive_carouselimg}
        dotted={true}
        arrow={true}
        autoPlay={true}
      >
        {productimage.map((item) => {
          return <Img_data_grid item={item} />;
        })}
      </Carousels>
    </Box>
  );
};

export default Carousel;
