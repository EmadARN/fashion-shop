import { Grid } from "@mui/material";
import React from "react";
import SignUpMobile from "./signUp_Mobile/SignUpMobile";
import SignupDesktop from "./signup_Desktop/SignupDesktop";
import { GridStyle1, GridStyle2 } from "./style";

const MainForm = () => {
  return (
    <>
      <Grid sx={GridStyle1}>
        <SignupDesktop />
      </Grid>

      <Grid sx={GridStyle2}>
        <SignUpMobile />
      </Grid>
    </>
  );
};

export default MainForm;
