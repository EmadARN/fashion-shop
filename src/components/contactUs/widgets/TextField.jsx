import React from "react";
import { ContactFormTextField } from "../style";
import { TextField } from "@mui/material";

const Textfield = ({ placeholder }) => {
  return (
    <>
      <TextField
        placeholder={placeholder}
        variant="filled"
        sx={ContactFormTextField}
      />
    </>
  );
};

export default Textfield;
