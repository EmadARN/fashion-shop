import SignUpMobileLatout from "@/common/signUp/signUpMobile_Layout/SignUpMobileLatout";
import { Box } from "@mui/material";
import React from "react";
import { BoxStyle1 } from "../style";
import RegistrForm_information from "@/common/signUp/registerForm_Information/RegistrForm_information";
import Btn from "@/common/signUp/Btn/Btn";
import Svg from "./widgets/Svg";

const RegistreFormMobile = () => {
  return (
    <SignUpMobileLatout maxHeight="450px" >
      <Box sx={BoxStyle1}>
        <RegistrForm_information />
        <Btn />
      </Box>
      <Box>
        <Svg />
      </Box>
    </SignUpMobileLatout>
  );
};

export default RegistreFormMobile;
