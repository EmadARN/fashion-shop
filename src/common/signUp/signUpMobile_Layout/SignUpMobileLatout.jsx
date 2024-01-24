import { Box } from "@mui/material";
import React from "react";
import { BoxStyle1, BoxStyle2 } from "../style";

const SignUpMobileLatout = ({ children, maxHeight }) => {
  return (
    <Box sx={BoxStyle1}>
      <Box sx={BoxStyle2(maxHeight)}>{children}</Box>
    </Box>
  );
};

export default SignUpMobileLatout;
