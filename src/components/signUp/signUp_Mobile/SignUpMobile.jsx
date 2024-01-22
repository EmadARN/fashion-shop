import { Box } from "@mui/material";
import React from "react";
import VerifyNumber from "@/common/signUp/verify_number/VerifyNumber";
import Btn from "@/common/signUp/Btn/Btn";
import Svg from "./widgets/svg";
import { BoxStyle1, BoxStyle2, BoxStyle3 } from "../style";
const SignUpMobile = () => {
  return (
    <Box sx={BoxStyle1}>
      <Box sx={BoxStyle2}>
        <Box sx={BoxStyle3}>
          <VerifyNumber />
          <Btn />
        </Box>
        <Box>
          <Svg />
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpMobile;
