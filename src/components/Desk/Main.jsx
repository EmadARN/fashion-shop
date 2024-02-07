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
<<<<<<< HEAD
    <Grid container width="100%" mt={12}>
      <Grid
        item
        display="flex"
        justifyContent="space-between"
        width="100%"
        alignItems="center"
      >
        <Grid>
          <Desk_List />
=======
    <Layout>
      <Grid container sx={MainGrid}>
        <Grid display="flex" width="100%">
          <Grid item width="20%" ml={4}>
            <Desk_List />
          </Grid>
          <Grid width="70%">
            {" "}
            <Information_store />
          </Grid>
        </Grid>
        <Grid sx={ButtonGrid}>
          <Grid width="45%">
            <Desk_Button />
          </Grid>
>>>>>>> 14812d6e42a5e7170b5ad4679e6ff9582f85ebc5
        </Grid>

        <Grid mt={5} item width="100%" flexDirection="column">
          <Box width="100%" display="flex" justifyContent="center">
            <ButtonDesk />
          </Box>
        </Grid>
      </Grid>
<<<<<<< HEAD

      <Grid item width="100%" flexDirection="column">
        <Box width="100%" display="flex" justifyContent="center">
          <ButtonDesk />
        </Box>
      </Grid>
    </Grid>
=======
    </Layout>
>>>>>>> 14812d6e42a5e7170b5ad4679e6ff9582f85ebc5
  );
};

export default Main_Desk;
