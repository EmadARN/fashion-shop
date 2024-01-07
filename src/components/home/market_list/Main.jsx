import React from 'react'

import { Grid } from "@mui/material";
import Market_item from './market_item';
const Market_list_main = () => {
  return (
    <Grid display="flex" justifyContent="center"  >
  <Market_item/>
  </Grid>
  )
}

export default Market_list_main