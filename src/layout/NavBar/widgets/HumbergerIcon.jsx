import { Box } from "@mui/material";
import React from "react";
import IconBtn from "./IconBtn";
import MainMenu from "./MainMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { HumbergerIconStyle } from "../style";
const HumbergerIcon = ({ setAnchorElNav, anchorElNav }) => {
  return (
    <Box sx={HumbergerIconStyle}>
      <IconBtn setAnchorElNav={setAnchorElNav}>
        <MenuIcon />
      </IconBtn>
      <MainMenu anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} />
    </Box>
  );
};

export default HumbergerIcon;
