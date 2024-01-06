import { Box } from "@mui/material";
import React from "react";
import { MenuBoxStyle1, MenuBoxStyle2 } from "../style";

const MenuBox = ({ page }) => {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Box className="icons" sx={MenuBoxStyle1}>
        {page.icon}
      </Box>
      <Box sx={MenuBoxStyle2}>{page.name}</Box>
    </Box>
  );
};

export default MenuBox;
