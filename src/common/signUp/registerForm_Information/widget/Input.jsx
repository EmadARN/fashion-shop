import { Box, Grid, TextField } from "@mui/material";
import React from "react";
import { FormikErrorStyle, RegistrFormTextfieldStyle } from "../../style";

const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <Grid>
      <TextField
        type={type}
        id="outlined-basic"
        label={label}
        variant="standard"
        sx={RegistrFormTextfieldStyle}
        {...formik.getFieldProps(name)}
        //   onChange={formik.handleChange}
        //   onBlur={formik.handleBlur}
        //   value={formik.values.name}
        name={name}
      />
      {formik.errors[name] && formik.touched[name] && (
        <Box sx={FormikErrorStyle}>{formik.errors[name]}</Box>
      )}
    </Grid>
  );
};

export default Input;
