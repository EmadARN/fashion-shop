import React from "react";
import CardItem from "./widgets/card_item";
import { Grid } from "@mui/material";
import { Cards_data } from "./data";
import Carousels from "../carousel/Carousels";

import { Responsive_carouselimg2 } from "./Style";
const Cards = () => {
  return (
    <>
      
        <Carousels
          responsive={Responsive_carouselimg2}
          dotted={true}
          arrow={false}
        >
          {Cards_data.map((item) => {
            return (
              <Grid sx={{ mb: { xs: "20px" } }} xs={12} sm={5} md={5} lg={3}>
                <CardItem item={item} />
              </Grid>
            );
          })}
        </Carousels>
     
    </>
  );
};

export default Cards;
