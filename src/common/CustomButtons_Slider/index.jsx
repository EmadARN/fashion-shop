import * as React from "react";
import Fab from "@mui/material/Fab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid, Box } from "@mui/material";
import {
  CustomButtonGroupAsArrowsStyle,
  CustomButtonGroupAsArrowsStyle2,
  CustomButtonGroupAsArrowsStyle2Arrow,
  CustomButtonGroupAsArrowsStyle2Box,
  CustomButtonGroupAsArrowsStyle3,
  CustomButtonGroupAsArrowsStyle3Arrow,
  CustomButtonGroupAsArrowsStyle3Box,
  CustomButtonGroupAsArrowsStyleFab1,
  CustomButtonGroupAsArrowsStyleFab2,
} from "./style";

export const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <Grid sx={CustomButtonGroupAsArrowsStyle}>
      <Box>
        <Fab
          onClick={next}
          sx={CustomButtonGroupAsArrowsStyleFab1}
          aria-label="edit"
        >
          <ArrowForwardIosIcon />
        </Fab>
      </Box>

      <Box>
        <Fab
          onClick={previous}
          sx={CustomButtonGroupAsArrowsStyleFab2}
          aria-label="add"
        >
          <ArrowBackIosIcon />
        </Fab>
      </Box>
    </Grid>
  );
};
export const CustomButtonGroupAsArrows2 = ({ next, previous }) => {
  return (
    <Grid sx={CustomButtonGroupAsArrowsStyle2}>
      <Box
        onClick={next}
        sx={CustomButtonGroupAsArrowsStyle2Box}
        aria-label="edit"
      >
        <ArrowForwardIosIcon sx={CustomButtonGroupAsArrowsStyle2Arrow} />
      </Box>

      <Box
        onClick={previous}
        sx={CustomButtonGroupAsArrowsStyle2Box}
        aria-label="add"
      >
        <ArrowBackIosIcon sx={{ fontSize: "30px" }} />
      </Box>
    </Grid>
  );
};
export const CustomButtonGroupAsArrows3 = ({ next, previous }) => {
  return (
    <Grid sx={CustomButtonGroupAsArrowsStyle3}>
      <Box
        onClick={next}
        sx={CustomButtonGroupAsArrowsStyle3Box}
        aria-label="edit"
        
      >
        <ArrowForwardIosIcon sx={CustomButtonGroupAsArrowsStyle3Arrow} />
      </Box>

      <Box
        onClick={previous}
        sx={CustomButtonGroupAsArrowsStyle3Box}
        aria-label="add"
      >
        <ArrowBackIosIcon sx={CustomButtonGroupAsArrowsStyle3Arrow} />
      </Box>
    </Grid>
  );
};
