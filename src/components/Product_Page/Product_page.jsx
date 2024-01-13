import React from "react";
import Productimg_phone from "./Productimg_phone/Productimg_phone";
import ImgDesktop from "./Product_page_img_desktop/ImgDesktop";
import { Box } from "@mui/material";

const Product_page = () => {
  return (
    <section >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <ImgDesktop />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Productimg_phone />
      </Box>
    </section>
  );
};

export default Product_page;
