import React from "react";
import { Grid, Typography } from "@mui/material";
import { ImageGridStyle, ImgStyle } from "../style";

const Market_list_data_grid = ({ item }) => {
  return (
    <Grid
      item
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid sx={ImageGridStyle}>
        <img style={ImgStyle} src={item.img} alt="" />
      </Grid>

      <Grid>
        <Typography
          fontWeight="600"
          sx={{
            WebkitUserSelect: "none" /* Safari */,
            MsUserSelect: "none" /* IE 10 and IE 11 */,
            userSelect: "none" /* Standard syntax */,
          }}
        >
          {item.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Market_list_data_grid;
