import React from "react";
import { Container, Grid, Box } from "@mui/material";
import Layout from "@/layout";
import Desk_Button from "./Desk_Button/Desk_Button";
import Desk_Profile_img from "./Desk_profile_img/Desk_Profile_img";
import Desk_List from "./DeskListDesktop/Desk_List";
import ButtonDesk from "@/common/buttonDesk/ButtonDesk";
const Main_Desk = () => {
  return (
    <Grid container width="100%">
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

        <Grid width="40%">
          <Desk_Button />
        </Grid>

        <Grid>
          <Desk_Profile_img />
        </Grid>
      </Grid>


      <Grid item>
<ButtonDesk/>
      </Grid>
    </Grid>
  );
};

export default Main_Desk;
