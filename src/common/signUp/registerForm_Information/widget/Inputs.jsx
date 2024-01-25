import { Grid } from "@mui/material";
import React from "react";
import Input from "./Input";

const Inputs = ({ formik }) => {
  return (
    <Grid container ml={1}>
      <Grid xs={12} sm={6} md={6} lg={6} xl={6} pt={2}>
        <Input formik={formik} name="name" label="نام" />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={6} xl={6} pt={2}>
        <Input formik={formik} name="family" label="نام خانوادگی" />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={6} xl={6} pt={2}>
        <Input formik={formik} name="email" label="ایمیل" />
      </Grid>
      <Grid xs={12} sm={6} md={6} lg={6} xl={6} pt={2}>
        <Input formik={formik} name="storeName" label="نام فروشگاه" />
      </Grid>
    </Grid>
  );
};

export default Inputs;
