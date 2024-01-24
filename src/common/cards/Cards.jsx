import React from "react";
import CardItem from "./widgets/card_item";
import { Grid, Container, Box } from "@mui/material";
import { Cards_data } from "./data";
import Carousels from "../carousel/Carousels";

import { Responsive_carouselimg2, MdBox, xsBox } from "./Style";
import Card_item_xs from "./widgets/card_item_xs";
const Cards = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Carousels
          responsive={Responsive_carouselimg2}
          dotted={false}
          arrow={false}
        >
          {Cards_data.map((item) => {
            return (
              <>
                <Box sx={MdBox}>
                  <CardItem item={item} />
                </Box>

                <Box sx={xsBox}>
                  <Card_item_xs item={item} />
                </Box>
              </>
            );
          })}
        </Carousels>
      </Container>
    </>
  );
};

export default Cards;
