import { Box } from "@mui/material";
import React from "react";
import VerifyNumber from "@/common/signUp/verify_number/VerifyNumber";
import Btn from "@/common/signUp/Btn/Btn";
import Svg from "./widgets/svg";
import { BoxStyle1 } from "../style";
import SignUpMobileLatout from "@/common/signUp/signUpMobile_Layout/SignUpMobileLatout";
const VerifyNumberMobile = ({ setPage, page }) => {
  return (
    <SignUpMobileLatout maxHeight="200px" HeightXs="100vh" HeightSm="110vh" page={page} setPage={setPage}>
      <Box sx={BoxStyle1}>
        <VerifyNumber />
        <Btn setPage={setPage} />
      </Box>
      <Box>
        <Svg />
      </Box>
    </SignUpMobileLatout>
  );
};

export default VerifyNumberMobile;
