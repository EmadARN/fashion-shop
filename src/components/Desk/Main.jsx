import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Layout from "@/layout";
import Desk_Button from "./Desk_Button/Desk_Button";
import Desk_Profile_img from "./Desk_profile_img/Desk_Profile_img";
import Desk_List from "./DeskListDesktop/Desk_List";
import ButtonDesk from "@/common/buttonDesk/ButtonDesk";
import Explore from "@/common/explore/Explore";
const Main_Desk = () => {
  return (
    <Layout>
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
        </Grid>

        <Grid width="45%">
          <Desk_Button />
        </Grid>

        <Grid>
          <Desk_Profile_img />
        </Grid>
      </Grid>

      <Grid item width="100%"  flexDirection="column" >
        <Box width="100%" display="flex" justifyContent="center">
          <ButtonDesk />
        </Box>

        <Box>
          <Explore/>
        </Box>
      </Grid>
    </Grid>
    </Layout>
  );
};

export default Main_Desk;
