import React from "react";
import { Grid, Typography, Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import { Box_style } from "../style";
import BarChartIcon from "@mui/icons-material/BarChart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckroomIcon from "@mui/icons-material/Checkroom";
const Desk_Button = () => {
  const Box1background = {
    backgroundColor: "#0d965b",
  };

  const Box2background = {
    backgroundColor: "#c12c2c",
  };

  const Box3background = {
    backgroundColor: "#fccf64",
  };
  return (
    <Container maxWidth="sm">
      <Grid
        container
        justifyContent="space-evenly"
        width="100%"
        display="flex"
        flexWrap={"nowrap"}
      >
        <Grid sx={Box_style}>
          <Box>12</Box>
          <Box display="flex" alignItems="center">
            <BarChartIcon
              sx={{ fontSize: "14px", display: { xs: "none", sm: "flex" } }}
            />
            <Typography
              sx={{
                whiteSpace: "nowrap",
                fontSize: { xs: "10px", sm: "13px" },
              }}
              mr={1}
            >
              نرخ افزایش
            </Typography>
          </Box>
        </Grid>
        <Grid sx={Box_style(Box2background.backgroundColor)}>
          <Box>15</Box>
          <Box display="flex" alignItems="center">
            <VisibilityIcon
              sx={{ fontSize: "14px", display: { xs: "none", sm: "flex" } }}
            />
            <Typography
              sx={{
                whiteSpace: "nowrap",
                fontSize: { xs: "10px", sm: "13px" },
              }}
              mr={1}
            >
              امار بازدید
            </Typography>
          </Box>
        </Grid>

        <Grid sx={Box_style(Box3background.backgroundColor)}>
          <Box>4</Box>
          <Box display="flex" alignItems="center">
            <CheckroomIcon
              sx={{ fontSize: "14px", display: { xs: "none", sm: "flex" } }}
            />
            <Typography
              sx={{
                whiteSpace: "nowrap",
                fontSize: { xs: "10px", sm: "13px" },
              }}
              mr={1}
            >
              تعداد محصول
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Desk_Button;
