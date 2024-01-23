import React from "react";
import { GridStyle1, GridStyle2 } from "./style";
import { Grid } from "@mui/material";
import RegisterFormDesktop from "./signup_Desktop/RegisterFormDesktop";
import RegistreFormMobile from "./signUp_Mobile/RegistreFormMobile";

const MainRegisterForm = () => {
  return (
    <>
      <Grid sx={GridStyle1}>
        <RegisterFormDesktop />
      </Grid>
      <Grid sx={GridStyle2}>
        <RegistreFormMobile />
      </Grid>
    </>
  );
};

export default MainRegisterForm;
