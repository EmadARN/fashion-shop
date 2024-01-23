import { Button, Grid } from "@mui/material";
import React from "react";
import Textfield from "./TextField";
import TextArea from "./TextArea";

const ContactForm = () => {
  return (
    <Grid container>
      <Grid xs={12} sm={12} md={4} sx={{ px: 0.3 }}>
        <Textfield placeholder="نام و نام خانوادگی *" />
      </Grid>
      <Grid xs={12} sm={12} md={4} sx={{ px: 0.3 }}>
        <Textfield placeholder="ایمیل *" />
      </Grid>
      <Grid xs={12} sm={12} md={4} sx={{ px: 0.3 }}>
        <Textfield placeholder="شماره همراه *" />
      </Grid>
      <Grid xs={12} sm={12} md={12} sx={{ pt: 1 }}>
        <TextArea />
      </Grid>
      <Button
        variant="contained"
        color="error"
        sx={{ float: "right", mr: 1, mt: 2, p: 1.5, fontWeight: "bold" }}
      >
        ارسال تیکت
      </Button>
    </Grid>
  );
};

export default ContactForm;
