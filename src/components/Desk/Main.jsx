import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Layout from "@/layout";
import Desk_Button from "./Desk_Button/Desk_Button";

import Desk_List from "./DeskListDesktop/Desk_List";
import ButtonDesk from "@/common/buttonDesk/ButtonDesk";
import Information_store from "../information_store/widgets/information_store";
import { ButtonGrid, MainGrid } from "./style";
const Main_Desk = () => {
  return (
   
      <Grid container sx={MainGrid}>
        <Grid display="flex" width="100%" mb={3}>
          <Grid item width="15%" ml={4} sx={{display:{xs:"none",md:'block'}}}>
            <Desk_List />
          </Grid>
          <Grid sx={{width:{xs:"100%",md:"63%"}}}>
         
            {" "}
            <Information_store displayMd ="flex" displayXs="none" displayXs1="flex" displayMd1="none"/>
          </Grid>
        </Grid>
       

        <Grid mt={5} item width="100%" flexDirection="column" display="flex" alignItems="center" >
          
            <ButtonDesk />
          
        </Grid>
      </Grid>
   
  );
};

export default Main_Desk;
