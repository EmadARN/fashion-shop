import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { pages } from "../data";
import { MainMenuLgStyle, MainMenuLgStyleBox } from "../style";
import Link from "next/link";
import {
  handleCloseNavMenu,
  handleonMouseEnter,
  handleonMouseLeave,
} from "../utils";

const MainMenuLg = ({ setAnchorElNav }) => {
 
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);

  return (
    <Box sx={MainMenuLgStyleBox}>
      {pages.map((page) => (
        <Link href={page.link}>
          <Button
            key={page.id}
            onClick={() =>
              handleCloseNavMenu(setAnchorElNav, setActiveTab, page)
            }
            onMouseEnter={() => handleonMouseEnter(setActiveTab2, page)}
            onMouseLeave={() =>
              handleonMouseLeave(
                activeTab,
                setActiveTab2,
                activeTab2,
                setActiveTab,
                page
              )
            }
            sx={MainMenuLgStyle(activeTab, activeTab2, page)}
          >
            {page.name}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default MainMenuLg;
