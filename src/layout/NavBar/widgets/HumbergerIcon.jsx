import { Box } from "@mui/material";
import React from "react";
import IconBtn from "./IconBtn";
import MainMenu from "./MainMenu";
import MenuIcon from "@mui/icons-material/Menu";
const HumbergerIcon = ({ setAnchorElNav, anchorElNav }) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconBtn setAnchorElNav={setAnchorElNav}>
        <MenuIcon />
      </IconBtn>
      <MainMenu anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} />
    </Box>
  );
};

export default HumbergerIcon;
