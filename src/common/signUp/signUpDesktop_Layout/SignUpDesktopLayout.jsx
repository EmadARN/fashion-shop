import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  DesktopBoxStyle1,
  DesktopBoxStyle2,
  DesktopBoxStyle3,
  DesktopIconStyle,
} from "../style";
import { Box } from "@mui/material";

const SignUpDesktopLayout = ({ children, maxHeight }) => {
  return (
    <Box sx={DesktopBoxStyle1}>
      <Box sx={DesktopBoxStyle2(maxHeight)}>
        <Box sx={DesktopBoxStyle3}>
          <AccountCircleIcon sx={DesktopIconStyle} />
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default SignUpDesktopLayout;
