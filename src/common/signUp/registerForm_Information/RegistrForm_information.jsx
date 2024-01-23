import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import RTL from "@/common/rtl/Rtl";
import { Textarea } from "@/components/contactUs/style";
import TextArea from "./widget/Textarea";

const RegistrForm_information = () => {
  return (
    <RTL>
      <Box ml="25px">
        <Grid container>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              sx={{
                input: { color: "#efefef" },
                "& label.MuiFormLabel-root": {
                  color: "#bcbcbc",
                  fontSize: "16px",
                  fontWeight: "bolder",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#DB4444",
                },
              }}
              id="standard-basic"
              label="نام*"
              variant="standard"
            />
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              sx={{
                input: { color: "#efefef" },
                "& label.MuiFormLabel-root": {
                  color: "#bcbcbc",
                  fontSize: "16px",
                  fontWeight: "bolder",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#DB4444",
                },
              }}
              id="standard-basic"
              label="نام خانوادگی*"
              variant="standard"
            />
          </Grid>

          <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              sx={{
                input: { color: "#efefef" },
                "& label.MuiFormLabel-root": {
                  color: "#bcbcbc",
                  fontSize: "16px",
                  fontWeight: "bolder",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#DB4444",
                },
              }}
              id="standard-basic"
              label="ایمیل*"
              variant="standard"
            />
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              sx={{
                input: { color: "#efefef" },
                "& label.MuiFormLabel-root": {
                  color: "#bcbcbc",
                  fontSize: "16px",
                  fontWeight: "bolder",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#DB4444",
                },
              }}
              id="standard-basic"
              label="نام فروشگاه*"
              variant="standard"
            />
          </Grid>

          <Box sx={{ pt: 3 }}>
         
          </Box>
        </Grid>
      </Box>
    </RTL>
  );
};

export default RegistrForm_information;
