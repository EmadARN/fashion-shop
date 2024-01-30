import { Container, Grid } from "@mui/material";
import React from "react";
import InformationUs from "./widgets/InformationUs";
import ContactForm from "./widgets/ContactForm";

const ContactUs = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 20 }}>
      <Grid container justifyContent={"space-around"}>
        <Grid xs={12} sm={12} md={3} sx={{ mb: { xs: 20 } }} spacing={4}>
          <InformationUs />
        </Grid>
        <Grid xs={12} sm={12} md={6} mb={10}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
