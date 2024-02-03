import { Box } from "@mui/material";
import React from "react";
import { BoxStyle1, BoxStyle2, BoxStyle3, IconStyle1 } from "../style";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const SignUpMobileLatout = ({ children, maxHeight, page, setPage }) => {
  return (
    <Box sx={BoxStyle1}>
      <Box sx={BoxStyle2(maxHeight)}>
        <Box sx={BoxStyle3(page)} onClick={() => setPage((perv) => perv - 1)}>
          <ArrowBackIcon sx={IconStyle1} />
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default SignUpMobileLatout;
