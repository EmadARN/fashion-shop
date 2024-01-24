import { Box } from "@mui/material";
import React from "react";
import { DesktopBoxStyle1 } from "../style";
import Btn from "@/common/signUp/Btn/Btn";
import SignUpDesktopLayout from "@/common/signUp/signUpDesktop_Layout/SignUpDesktopLayout";
import RegistrForm_information from "@/common/signUp/registerForm_Information/RegistrForm_information";


const RegisterFormDesktop = () => {
  return (
    <SignUpDesktopLayout maxHeight="430px">
      <Box sx={DesktopBoxStyle1}>
        <RegistrForm_information />
        <Btn />
      </Box>
    </SignUpDesktopLayout>
  );
};

export default RegisterFormDesktop;
