import React from "react";
import { Box, TextField } from "@mui/material";
import RTL from "@/common/rtl/Rtl";
import { Textarea } from "@/components/contactUs/style";
import TextArea from "./widget/Textarea";

const RegistrForm_information = () => {
  return (
    <RTL>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "110%",
            pb:2,
          }}
        >
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
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "110%",
          }}
        >
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
        </Box>
        <Box sx={{pt:3}}>
          <TextArea />
        </Box>
      </Box>
    </RTL>
  );
};

export default RegistrForm_information;
