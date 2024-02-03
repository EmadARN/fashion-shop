import SignUpDesktopLayout from "@/common/signUp/signUpDesktop_Layout/SignUpDesktopLayout";
import { Box } from "@mui/material";
import React from "react";
import { DesktopBoxStyle1 } from "../style";
import VerifyCode from "@/common/signUp/verify_code/VerifyCode";
import Btn from "@/common/signUp/Btn/Btn";

const VerifyCodeDesktop = ({ page, setPage }) => {
  return (
    <SignUpDesktopLayout maxHeight="300px" page={page} setPage={setPage}>
      <Box sx={DesktopBoxStyle1}>
        <VerifyCode />
        <Btn setPage={setPage} />
      </Box>
    </SignUpDesktopLayout>
  );
};

export default VerifyCodeDesktop;
