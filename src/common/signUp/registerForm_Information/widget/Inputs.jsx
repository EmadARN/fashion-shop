import { Grid, TextField } from "@mui/material";
import React from "react";
import { RegistrFormTextfieldStyle } from "../../style";

const Inputs = () => {
  return (
    <Grid container ml={1}>
      <Grid xs={12} sm={6} md={6} lg={6} xl={6}  pt={2}>
        <TextField
          sx={RegistrFormTextfieldStyle}
          id="standard-basic"
          label="نام*"
          variant="standard"
        />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={6} xl={6}  pt={2}>
        <TextField
          sx={RegistrFormTextfieldStyle}
          id="standard-basic"
          label="نام خانوادگی*"
          variant="standard"
        />
      </Grid>

      <Grid xs={12} sm={6} md={6} lg={6} xl={6} pt={2}>
        <TextField
          sx={RegistrFormTextfieldStyle}
          id="standard-basic"
          label="ایمیل*"
          variant="standard"
        />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={6} xl={6} py={2}>
        <TextField
          sx={RegistrFormTextfieldStyle}
          id="standard-basic"
          label="نام فروشگاه*"
          variant="standard"
        />
      </Grid>
    </Grid>
  );
};

export default Inputs;
