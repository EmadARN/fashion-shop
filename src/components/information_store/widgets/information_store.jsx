import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { information_store_data } from "../data";
import { MainGrid } from "../style";
import { grid_item } from "../style";
import { img_style } from "../style";
const Information_store = () => {
  return (
    <Grid container sx={MainGrid} >
      <Grid item  sx={grid_item}>
        <Box
       
        >
          <img
            style={
                img_style
            }
            src={information_store_data.img}
            alt=""
          />
        </Box>

        <Box display="flex" alignItems="center">
            <Typography fontWeight="bold" fontSize="20px" ml={2}>نام فروشگاه:</Typography>
          <Typography fontSize="18px">{information_store_data.store_name}</Typography>
        </Box>

        <Box display="flex" alignItems="center">
        <Typography fontWeight="bold" fontSize="20px" ml={2}> آیدی اینستاگرام:</Typography>
       <Typography fontSize="18px">{information_store_data.insta_id}</Typography>     
        </Box>
      </Grid>

      <Grid item sx={grid_item}>
        <Box display="flex" alignItems="center"> 
        <Typography fontWeight="bold" fontSize="20px" ml={2}> شماره تماس :</Typography>
          <Typography fontSize="18px">{information_store_data.phone_number}</Typography>
        </Box>

        <Box display="flex" alignItems="center">
        <Typography fontWeight="bold" fontSize="20px" ml={2}>  نام فروشنده :</Typography>
          <Typography  fontSize="19px">{information_store_data.store_admin}</Typography>
        </Box>
      </Grid>

      <Grid item sx={grid_item}>
        <Box  display="flex" alignItems="center">
        <Typography fontWeight="bold" fontSize="20px" ml={2}>  ایمیل  :</Typography>
          <Typography  fontSize="19px">{information_store_data.email}</Typography>
        </Box>

        <Box display="flex" alignItems="center">
        <Typography fontWeight="bold" fontSize="20px" ml={2}>  آدرس  :</Typography>
          <Typography  fontSize="19px">{information_store_data.address}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Information_store;
