import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { cardStyle, filterStyle } from "../Style";
import RedButton from "@/common/redButton/Button";
import { filterImage } from "../Style";
const CardItem = ({ item }) => {
  const [style, setStyle] = useState(false);

  return (
    <Grid
      onMouseOver={() => setStyle(true)}
      onMouseOut={() => setStyle(false)}
      sx={cardStyle}
    >
      <Box sx={{position:"relative"}}>
        <img style={style ? filterImage:null} width="100%" src={item.img} alt="" />
      </Box>

      {style ? (
        <Box my={4} sx={{ position:'absolute',top:150}}>
      
          <RedButton name="مشاهده ی محصول" />
        </Box>
      ) : null}
      
          <Box mt={4}>
            <Typography
              sx={{ fontSize: { xs: "20px", md: "23px" } }}
              fontWeight="bold"
            >
              {item.title}
            </Typography>
          </Box>

          <Box mt={4} mb={4}>
            <Typography
              sx={{ fontSize: { xs: "15px", md: "20px" } }}
              fontWeight="560"
              variant="h6"
            >
              {item.price} تومان
            </Typography>
          </Box>
      
      
    </Grid>
  );
};

export default CardItem;
