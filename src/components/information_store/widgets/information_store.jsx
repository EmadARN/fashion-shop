import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { information_store_data } from "../data";
import { MainGrid } from "../style";
import {
  Typography_style,
  img_style,
  grid_item,
  category_Typography,
  store_name_typhography,
  box_item,
} from "../style";

const Information_store = () => {
  return (
    <Grid  flexDirection="column" justifyContent="flex-start" display="flex">
      <Grid mr={2} item display="flex" alignItems="center">
        <Box ml={2}>
          <img style={img_style} src={information_store_data.img} alt="" />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography sx={store_name_typhography}>
            {information_store_data.store_name}
          </Typography>
          <Typography sx={category_Typography}>
            {information_store_data.what_to_sell}
          </Typography>
        </Box>
      </Grid>

      <Grid sx={grid_item}>
        <Box
 sx={box_item}
        >
          <Typography sx={Typography_style}>شماره تماس</Typography>
          <Typography sx={Typography_style}>
            {information_store_data.phone_number}
          </Typography>
        </Box>

        <Box sx={box_item}>
          <Typography sx={Typography_style}> آدرس اینسناگرام</Typography>
          <Typography sx={Typography_style}>
            {information_store_data.insta_id}
          </Typography>
        </Box>

        <Box sx={box_item}>
          <Typography sx={Typography_style}> نام فروشمنده</Typography>
          <Typography sx={Typography_style}>
            {information_store_data.store_admin}
          </Typography>
        </Box>

        <Box sx={box_item}>
          <Typography sx={Typography_style}> آدرس</Typography>
          <Typography sx={Typography_style}>
            {information_store_data.address}
          </Typography>
        </Box>

        <Box sx={box_item}>
          <Typography sx={Typography_style}>ایمیل </Typography>
          <Typography sx={Typography_style}>
            {information_store_data.email}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Information_store;

// <Grid container sx={MainGrid} >
//   <Grid item  sx={grid_item}>
//     <Box

//     >
//       <img
//         style={
//             img_style
//         }
//         src={information_store_data.img}
//         alt=""
//       />
//     </Box>

//     <Box display="flex" alignItems="center">

//      <StoreIcon sx={{fontSize:"45px"}}/>
//      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
//         <Typography fontWeight="bold" fontSize="20px" ml={2} mr={2}>نام فروشگاه</Typography>
//       <Typography fontSize="18px">{information_store_data.store_name}</Typography>
//       </Box>
//     </Box>

//     <Box display="flex" alignItems="center">
//     <Typography fontWeight="bold" fontSize="20px" ml={2}> آیدی اینستاگرام:</Typography>
//    <Typography fontSize="18px">{information_store_data.insta_id}</Typography>
//     </Box>
//   </Grid>

//   <Grid item sx={grid_item}>
//     <Box display="flex" alignItems="center">
//     <Typography fontWeight="bold" fontSize="20px" ml={2}> شماره تماس :</Typography>
//       <Typography fontSize="18px">{information_store_data.phone_number}</Typography>
//     </Box>

//     <Box display="flex" alignItems="center">
//     <Typography fontWeight="bold" fontSize="20px" ml={2}>  نام فروشنده :</Typography>
//       <Typography  fontSize="19px">{information_store_data.store_admin}</Typography>
//     </Box>
//   </Grid>

//   <Grid item sx={grid_item}>
//     <Box  display="flex" alignItems="center">
//     <Typography fontWeight="bold" fontSize="20px" ml={2}>  ایمیل  :</Typography>
//       <Typography  fontSize="19px">{information_store_data.email}</Typography>
//     </Box>

//     <Box display="flex" alignItems="center">
//     <Typography fontWeight="bold" fontSize="20px" ml={2}>  آدرس  :</Typography>
//       <Typography  fontSize="19px">{information_store_data.address}</Typography>
//     </Box>
//   </Grid>
// </Grid>
