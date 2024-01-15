import Carousels from "@/common/carousel/Carousels";
import { Box } from "@mui/material";
import React from "react";
import { Responsive_Productimg } from "./style";
import { productimage } from "./data";
import Img_data_grid from "./widgets/Img_data_grid";

const Productimg_phone = () => {
  return (
    <Box sx={{ pb: 7 }}>
      <Carousels responsive={Responsive_Productimg} dotted={true} arrow={false} >
        {productimage.map((item) => {
          return <Img_data_grid item={item} />;
        })}
      </Carousels>
    </Box>
  );
};

export default Productimg_phone;
