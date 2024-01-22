import { Box } from "@mui/material";
import React from "react";
import { MenuBoxStyle, MenuBoxStyle1, MenuBoxStyle2 } from "../style";

const MenuBox = ({ page }) => {
  return (
    <Box sx={MenuBoxStyle}>
      <Box className="icons" sx={MenuBoxStyle1}>
        {page.icon}
      </Box>
      <Box sx={MenuBoxStyle2}>{page.name}</Box>
    </Box>
  );
};

export default MenuBox;
