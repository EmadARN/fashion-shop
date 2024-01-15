import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { ImageGridStyle, ImgStyle } from "../style";
import { Padding } from "@mui/icons-material";

const Market_list_data_grid = ({ item }) => {
  return (
    <Grid
      item
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
     
      mt={5}
     
    >
      <Grid sx={ImageGridStyle}>
        <img style={ImgStyle} src={item.img} alt="" />
      </Grid>

      <Grid>
        <Typography fontWeight="600">{item.name}</Typography>
      </Grid>
    </Grid>
  );
};

export default Market_list_data_grid;
