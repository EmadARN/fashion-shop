import React from 'react'
import {  Grid ,Box,Typography} from "@mui/material";
import { information_store_data } from '@/components/information_store/data';
import { img_style, Typography_style } from '@/components/information_store/style';
const Desk_Profile_img = () => {
  return (
    <Grid display="flex" flexDirection="column" alignItems="center">
    <Box>
    <img style={img_style} src={information_store_data.img} alt="" />
  </Box>

  <Box>
    <Typography sx={ Typography_style}>{information_store_data.store_name}</Typography>
    </Box>
  </Grid>

  )
}

export default Desk_Profile_img