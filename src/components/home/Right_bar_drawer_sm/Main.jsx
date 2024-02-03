import { Box, Drawer, IconButton } from "@mui/material";
import React from "react";
import { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import CategoryListMain from "../Right_bar/Main";
import { IconeButton } from "./style";

const RightbarDrawer = () => {
  const [isDraweropen, setIsDraweropen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={IconeButton}
        onClick={() => setIsDraweropen(true)}
      >
        <KeyboardDoubleArrowLeftIcon
          sx={{ color: "#fff", "&:hover": { color: "black" } }}
        />
      </IconButton>

      <Drawer
        PaperProps={{
          sx: {
            backgroundImage: "url(/images/rm218-bb-07.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color:"#efefef"
          },
        }}
        anchor="right"
        open={isDraweropen}
        onClose={() => setIsDraweropen(false)}
      >
        <CategoryListMain />
      </Drawer>
    </>
  );
};

export default RightbarDrawer;
