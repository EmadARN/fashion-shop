import React from 'react'
import CardItem from './widgets/card_item'
import { Grid } from "@mui/material";
import { Cards_data } from './data'
const Cards = () => {

  return (
    <>
    
    <Grid container width="100%" justifyContent="space-evenly">
    {Cards_data.map((item)=>{
      return(
        <Grid sx={{mb:{xs:'20px'}}} xs={12} sm={5} md={5} lg={3} >
       <CardItem item={item}/>
       </Grid>
      )
    })}
    </Grid>
    </>
  )
}

export default Cards