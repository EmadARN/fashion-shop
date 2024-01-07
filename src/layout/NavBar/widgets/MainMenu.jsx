import React from "react";
import { pages } from "../data";
import { MenuItemStyle } from "../style";
import MenuBox from "./MenuBox";
import { Menu, MenuItem } from "@mui/material";
import { handleCloseNavMenu } from "../utils";

const MainMenu = ({ anchorElNav, setAnchorElNav }) => {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorElNav)}
      onClose={() => handleCloseNavMenu(setAnchorElNav)}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      {pages.map((page) => (
        <MenuItem
          sx={MenuItemStyle}
          key={page}
          onClick={() => handleCloseNavMenu(setAnchorElNav)}
        >
          <MenuBox page={page} />
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MainMenu;
