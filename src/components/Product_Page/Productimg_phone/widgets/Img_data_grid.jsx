import React from "react";
import { Grid } from "@mui/material";
import { imgStyle } from "../style";

const Img_data_grid = ({ item }) => {
  return (
    <Grid>
      <img style={imgStyle} src={`/images/${item.img}`} alt="" />
    </Grid>
  );
};

export default Img_data_grid;
