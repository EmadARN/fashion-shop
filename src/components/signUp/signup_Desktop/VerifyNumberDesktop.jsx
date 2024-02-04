import { Box } from "@mui/material";
import React from "react";
import VerifyNumber from "@/common/signUp/verify_number/VerifyNumber";
import Btn from "@/common/signUp/Btn/Btn";
import { DesktopBoxStyle1 } from "../style";
import SignUpDesktopLayout from "@/common/signUp/signUpDesktop_Layout/SignUpDesktopLayout";

const VerifyNumberDesktop = ({ page, setPage }) => {
  return (
    <SignUpDesktopLayout maxHeight="300px" HeightMd="100vh"  MtMd="13%" page={page} setPage={setPage}>
      <Box sx={DesktopBoxStyle1}>
        <VerifyNumber />
        <Btn setPage={setPage} />
      </Box>
    </SignUpDesktopLayout>
  );
};

export default VerifyNumberDesktop;
