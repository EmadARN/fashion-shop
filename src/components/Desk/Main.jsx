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
          <Grid item width="15%" ml={4}>
            <Desk_List />
          </Grid>
          <Grid width="63%">
         
            {" "}
            <Information_store display ="flex" />
          </Grid>
        </Grid>
       

        <Grid mt={5} item width="100%" flexDirection="column">
          <Box width="100%" display="flex" justifyContent="center"  >
            <ButtonDesk />
          </Box>
        </Grid>
      </Grid>
   
  );
};

export default Main_Desk;
