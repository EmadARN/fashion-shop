import React from "react";
import CardItem from "./widgets/card_item";
import { Grid ,Container} from "@mui/material";
import { Cards_data } from "./data";
import Carousels from "../carousel/Carousels";

import { Responsive_carouselimg2 } from "./Style";
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
             
                <CardItem item={item} />
           
            );
          })}
        </Carousels>
        </Container>
    </>
  );
};

export default Cards;
