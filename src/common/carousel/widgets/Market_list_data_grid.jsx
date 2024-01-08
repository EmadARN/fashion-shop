import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { ImgStyle } from "../../../components/home/market_list/style";
import { ImageGridStyle } from "../../../components/home/market_list/style";

const Market_list_data_grid = ({ item }) => {
  return (
    <Grid
      item
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid marginLeft="15px" sx={ImageGridStyle}>
        <img style={ImgStyle} src={item.img} alt="" />
      </Grid>

      <Grid sx={{}}>
        <Typography fontWeight="600">{item.name}</Typography>
      </Grid>
    </Grid>
  );
};

export default Market_list_data_grid;
