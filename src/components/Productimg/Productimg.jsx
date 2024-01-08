import Carousels from "@/common/carousel/Carousels";
import { Box } from "@mui/material";
import React from "react";
import { productimage } from "./data";
import Img_data_grid from "./widgets/Img_data_grid";
import { Responsive_Productimg } from "./style";

const Productimg = () => {
  return (
    <Box sx={{ pb: 7 }}>
      <Carousels responsive={Responsive_Productimg} dotted={true} arrow={false}>
        {productimage.map((item) => {
          return <Img_data_grid item={item} />;
        })}
      </Carousels>
    </Box>
  );
};

export default Productimg;
