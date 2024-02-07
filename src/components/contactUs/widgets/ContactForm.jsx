import { Button, Grid } from "@mui/material";
import React from "react";
import Textfield from "./TextField";
import TextArea from "./TextArea";
import { BtnContactFormStyles } from "../style";

const ContactForm = () => {
  return (
    <Grid container>
      <Grid xs={12} sm={12} md={4} px={0.3}>
        <Textfield placeholder="نام و نام خانوادگی *" />
      </Grid>
      <Grid xs={12} sm={12} md={4} px={0.3}>
        <Textfield placeholder="ایمیل *" />
      </Grid>
      <Grid xs={12} sm={12} md={4} px={0.3}>
        <Textfield placeholder="شماره همراه *" />
      </Grid>
      <Grid xs={12} sm={12} md={12} px={0.3} py={1.5}>
        <TextArea />
      </Grid>
      <Button variant="contained" color="error" sx={BtnContactFormStyles}>
        ارسال تیکت
      </Button>
    </Grid>
  );
};

export default ContactForm;
