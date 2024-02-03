import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import {
  GallaryGrid1,
  GallaryTypography1,
  LinkStyle,
  imgStyle,
} from "../style";
import { image } from "../data";

const Gallary = () => {
  return (
    <Box sx={{ display: "grid", placeItems: "center" }}>
      <Typography sx={GallaryTypography1}>گالری</Typography>
      <Grid container sx={GallaryGrid1}>
        <Grid md={6}>
          {image.map((item, index) => {
            return (
              <Link style={LinkStyle} key={index} href={"#"}>
                <img
                  className="imgScale"
                  style={imgStyle}
                  src={`/images/${item}`}
                ></img>
              </Link>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Gallary;
