import { Box } from "@mui/material";
import React from "react";
import VerifyNumber from "@/common/signUp/verify_number/VerifyNumber";
import Btn from "@/common/signUp/Btn/Btn";
import { DesktopBoxStyle1 } from "../style";
import SignUpDesktopLayout from "@/common/signUp/signUpDesktop_Layout/SignUpDesktopLayout";

const VerifyNumberDesktop = () => {
  return (
    <SignUpDesktopLayout>
      <Box sx={DesktopBoxStyle1}>
        <VerifyNumber />
        <Btn />
      </Box>
    </SignUpDesktopLayout>
  );
};

export default VerifyNumberDesktop;
