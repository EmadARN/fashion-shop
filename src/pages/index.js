import Layout from "@/layout";
import React from "react";
import Home from "@/components/home/Home";
import ContactUs from "@/components/contactUs/ContactUs";
import Cards from "@/common/cards/Cards";
import ImgDesktop from "@/components/Product_Page/Product_page_img_desktop/ImgDesktop";
import Product_page from "@/components/Product_Page/Product_page";
import ReactImageMagnify from "react-image-magnify";
import { Box } from "@mui/material";
const index = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default index;
