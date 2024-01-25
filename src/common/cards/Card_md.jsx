import React from "react";
import CardItem from "./widgets/card_item";
import { Container, Box } from "@mui/material";
import { Cards_data } from "./data";
import Carousels from "../carousel/Carousels";

import { Responsive_carouselimg2, MdBox } from "./Style";

const Card_md = () => {
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

   
              </>
            );
          })}
        </Carousels>
      </Container>
    </>
  );
};

export default Card_md;
