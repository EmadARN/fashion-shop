import React from "react";
import { GridStyle1, GridStyle2 } from "./style";
import { Grid } from "@mui/material";
import RegisterFormDesktop from "./signup_Desktop/RegisterFormDesktop";
import RegistreFormMobile from "./signUp_Mobile/RegistreFormMobile";

const MainRegisterForm = ({ page, setPage }) => {
  return (
    <>
      <Grid sx={GridStyle1}>
        <RegisterFormDesktop page={page} setPage={setPage} />
      </Grid>
      <Grid sx={GridStyle2}>
        <RegistreFormMobile page={page} setPage={setPage} />
      </Grid>
    </>
  );
};

export default MainRegisterForm;
