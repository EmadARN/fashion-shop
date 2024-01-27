import React from 'react'
import {  Box } from "@mui/material";
import { MdBox, xsBox } from "./Style";
import Card_xs from './Card_xs';
import Card_md from './Card_md';
const Card_main = () => {
  return (
    <>
 <Box sx={xsBox}>
    <Card_xs/>
    </Box> 

<Box  sx={MdBox}>
<Card_md/>
</Box>

</>
  )
}

export default Card_main