import { Grid } from "@mui/material";
import React from "react";
import { GridStyle1, GridStyle2 } from "./style";
import VerifyNumberDesktop from "./signup_Desktop/VerifyNumberDesktop";
import VerifyNumberMobile from "./signUp_Mobile/VerifyNumberMobile";

const MainFormVerifyNumber = () => {
  return (
    <>
      <Grid sx={GridStyle1}>
        <VerifyNumberDesktop />
      </Grid>

      <Grid sx={GridStyle2}>
        <VerifyNumberMobile />
      </Grid>
    </>
  );
};

export default MainFormVerifyNumber;
