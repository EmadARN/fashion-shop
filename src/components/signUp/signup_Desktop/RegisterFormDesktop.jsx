import { Box } from "@mui/material";
import React from "react";
import { DesktopBoxStyle1 } from "../style";
import SignUpDesktopLayout from "@/common/signUp/signUpDesktop_Layout/SignUpDesktopLayout";
import RegistrForm_information from "@/common/signUp/registerForm_Information/RegistrForm_information";

const RegisterFormDesktop = ({page,setPage}) => {
  return (
    <SignUpDesktopLayout maxHeight="430px" page={page} setPage={setPage}>
      <Box sx={DesktopBoxStyle1}>
        <RegistrForm_information />
      </Box>
    </SignUpDesktopLayout>
  );
};

export default RegisterFormDesktop;
