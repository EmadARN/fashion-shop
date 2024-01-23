import { Grid } from "@mui/material";
import React from "react";
import VerifyCodeDesktop from "./signup_Desktop/VerifyCodeDesktop";
import VerifyCodeMobile from "./signUp_Mobile/VerifyCodeMobile";
import { GridStyle1, GridStyle2 } from "./style";

const MainFormVerifyCode = () => {
  return (
    <>
      <Grid sx={GridStyle1}>
        <VerifyCodeDesktop />
      </Grid>

      <Grid sx={GridStyle2}>
        <VerifyCodeMobile />
      </Grid>
    </>
  );
};

export default MainFormVerifyCode;
