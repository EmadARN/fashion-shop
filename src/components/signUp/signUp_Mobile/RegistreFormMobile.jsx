import SignUpMobileLatout from "@/common/signUp/signUpMobile_Layout/SignUpMobileLatout";
import { Box } from "@mui/material";
import React from "react";
import { BoxStyle1 } from "../style";
import RegistrForm_information from "@/common/signUp/registerForm_Information/RegistrForm_information";
import Svg from "./widgets/Svg";

const RegistreFormMobile = () => {
  return (
    <SignUpMobileLatout maxHeight="500px">
      <Box sx={BoxStyle1}>
        <RegistrForm_information />
      </Box>
      <Box>
        <Svg />
      </Box>
    </SignUpMobileLatout>
  );
};

export default RegistreFormMobile;
