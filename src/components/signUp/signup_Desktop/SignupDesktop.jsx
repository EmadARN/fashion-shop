import { Box } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifyNumber from "@/common/signUp/verify_number/VerifyNumber";
import Btn from "@/common/signUp/Btn/Btn";
import {
  DesktopBoxStyle1,
  DesktopBoxStyle2,
  DesktopBoxStyle3,
  DesktopBoxStyle4,
  DesktopIconStyle,
} from "../style";

const SignupDesktop = () => {
  return (
    <Box sx={DesktopBoxStyle1}>
      <Box sx={DesktopBoxStyle2}>
        <Box sx={DesktopBoxStyle3}>
          <AccountCircleIcon sx={DesktopIconStyle} />
        </Box>
        <Box sx={DesktopBoxStyle4}>
          <VerifyNumber />
          <Btn />
        </Box>
      </Box>
    </Box>
  );
};

export default SignupDesktop;
