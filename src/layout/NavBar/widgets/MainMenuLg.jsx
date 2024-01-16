import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { pages } from "../data";
import { MainMenuLgStyle, MainMenuLgStyleBox } from "../style";
import { handleCloseNavMenu } from "../utils";

const MainMenuLg = ({ setAnchorElNav }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={MainMenuLgStyleBox}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => handleCloseNavMenu(setAnchorElNav, setActiveTab, page)}
          sx={MainMenuLgStyle(activeTab, page)}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
};

export default MainMenuLg;
