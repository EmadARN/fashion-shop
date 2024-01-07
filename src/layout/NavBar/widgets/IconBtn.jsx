import React from "react";

import { IconButton } from "@mui/material";
import { handleOpenNavMenu } from "../utils";


const IconBtn = ({ children, setAnchorElNav }) => {
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => handleOpenNavMenu(e, setAnchorElNav)}
        color="inherit"
      >
        {children}
      </IconButton>
    </>
  );
};

export default IconBtn;
