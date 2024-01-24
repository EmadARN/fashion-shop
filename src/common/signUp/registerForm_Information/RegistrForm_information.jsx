import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import RTL from "@/common/rtl/Rtl";
import TextArea from "./widget/Textarea";
import { RegistrFormTextfieldStyle } from "../style";
import Inputs from "./widget/Inputs";

const RegistrForm_information = () => {
  return (
    <RTL>
      <Box ml="15px">
        <Inputs />
      </Box>
      <Box>
        <TextArea />
      </Box>
    </RTL>
  );
};

export default RegistrForm_information;
