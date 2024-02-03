import { Grid } from "@mui/material";
import React from "react";
import { GridStyle1, GridStyle2 } from "./style";
import VerifyNumberDesktop from "./signup_Desktop/VerifyNumberDesktop";
import VerifyNumberMobile from "./signUp_Mobile/VerifyNumberMobile";

const MainFormVerifyNumber = ({ page, setPage }) => {
  return (
    <>
      <Grid sx={GridStyle1}>
        <VerifyNumberDesktop page={page} setPage={setPage}/>
      </Grid>

      <Grid sx={GridStyle2}>
        <VerifyNumberMobile page={page} setPage={setPage}/>
      </Grid>
    </>
  );
};

export default MainFormVerifyNumber;
