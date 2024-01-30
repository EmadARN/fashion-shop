import { Avatar, Box, CardHeader, Typography } from "@mui/material";
import React from "react";
import { avatarStyle } from "../Style";

const CardHeadeXs = () => {
  return (
    <Box display="flex" alignItems="center">
      <CardHeader
        avatar={
          <Avatar sx={avatarStyle} aria-label="recipe">
            R
          </Avatar>
        }
      />
      <Box
        display="felx"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>عنوان فروشگاه</Typography>
        <Typography>نام فروشگاه</Typography>
      </Box>
    </Box>
  );
};

export default CardHeadeXs;
