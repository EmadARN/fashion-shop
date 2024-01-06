import { Box, Button } from "@mui/material";
import React from "react";
import {  pages } from "../data";
import { MainMenuLgStyle } from "../style";
import { handleCloseNavMenu } from "../utils";

const MainMenuLg = ({ setAnchorElNav }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
      }}
    >
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => handleCloseNavMenu(setAnchorElNav)}
          sx={MainMenuLgStyle}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
};

export default MainMenuLg;
