import React from "react";
import { Cards_data } from "./data";
import Card_item_xs from "./widgets/card_item_xs";
import { xsBox } from "./Style";
import {  Box,Container } from "@mui/material"
import { ReactSmartScroller } from 'react-smart-scroller'
const Card_xs = () => {
  return (
    <>
    <Container maxWidth="xl">
    <ReactSmartScroller vertical >
      {Cards_data.map((item) => {
        return (
           
         
            <Card_item_xs item={item} />
           
      
        );
      })}
      </ReactSmartScroller>
      </Container>
    </>
  );
};

export default Card_xs;
