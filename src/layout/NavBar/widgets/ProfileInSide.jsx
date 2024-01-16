import { Box, Typography } from "@mui/material";
import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  ProfileInSideBox,
  ProfileInSideBox1,
  ProfileInSideTypography1,
  ProfileInSideTypography2,
  ProfileInSideTypography3,
} from "../style";

const ProfileInSide = () => {
  return (
    <Box sx={ProfileInSideBox}>
      <Box sx={ProfileInSideBox1}>
        <Typography sx={ProfileInSideTypography1}>نام فروشگاه</Typography>
      </Box>

      <Box sx={{ pt: 2, width: "100%" }}>
        <Typography sx={ProfileInSideTypography2}>
          <AccountBoxIcon
            className="icon"
            sx={{
              color: "#ddd",
              ml: 1,
            }}
          />
          پروفایل
        </Typography>
        <Typography sx={ProfileInSideTypography3}>
          <LogoutIcon sx={{ ml: 1 }} /> خروج
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileInSide;
