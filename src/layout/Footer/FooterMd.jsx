import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import QuickLinks from "./widgets/QuickLinks";
import Gallary from "./widgets/Gallary";
import AboutUs from "./widgets/AboutUs";
import { MainBox } from "./Style";

const FooterMd = () => {
  return (
    <Box sx={MainBox}>
      <QuickLinks />
      <Gallary />
      <AboutUs />
    </Box>
  );
};

export default FooterMd;
