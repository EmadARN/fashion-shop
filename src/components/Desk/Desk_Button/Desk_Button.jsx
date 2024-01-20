import React from 'react'
import {  Grid } from "@mui/material";
import { Button_style } from './style';
import Button from '@mui/material/Button';
const Desk_Button = () => {
  return (
   <Grid container justifyContent="space-evenly" width="50%">
      <Button sx={Button_style} size='medium' variant="contained">نرخ افزایش</Button>
      <Button sx={Button_style} size='medium' variant="contained">امار بازدید</Button>
      <Button sx={Button_style} size='medium' variant="contained">تعداد محصول</Button>
      </Grid>
  )
}

export default Desk_Button