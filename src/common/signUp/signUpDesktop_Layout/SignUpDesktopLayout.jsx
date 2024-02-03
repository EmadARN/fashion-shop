import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  DesktopBoxStyle1,
  DesktopBoxStyle2,
  DesktopBoxStyle3,
  DesktopBoxStyle4,
  DesktopIconStyle,
  DesktopIconStyle1,
} from "../style";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const SignUpDesktopLayout = ({ children, maxHeight, page, setPage }) => {
  return (
    <Box sx={DesktopBoxStyle1}>
      <Box sx={DesktopBoxStyle2(maxHeight)}>
        <Box sx={DesktopBoxStyle3}>
          <AccountCircleIcon sx={DesktopIconStyle} />
        </Box>
        <Box
          onClick={() => setPage((perv) => perv - 1)}
          sx={DesktopBoxStyle4(page)}
        >
          <ArrowBackIcon sx={DesktopIconStyle1} />
        </Box>

        {children}
      </Box>
    </Box>
  );
};

export default SignUpDesktopLayout;
