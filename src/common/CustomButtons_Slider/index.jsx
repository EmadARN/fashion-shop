import * as React from "react";
import Fab from "@mui/material/Fab";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Grid } from "@mui/material";
const CustomLeftArrow = ({ onClick }) => (
  <i onClick={() => onClick()} className="custom-left-arrow" />
);
const CustomRightArrow = ({ onClick }) => {
  return <i className="custom-right-arrow" onClick={() => onClick()} />;
};

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
  const { totalItems, currentSlide } = carouselState;
  return (
    <div className="custom-button-group">
      <div>Current slide is {currentSlide}</div>
      <button onClick={() => previous()}>Previous slide</button>
      <button onClick={() => next()}>Next slide</button>
      <button
        onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
      >
        Go to a random slide
      </button>
    </div>
  );
};
const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <Grid
     sx={{display:"flex",justifyContent:"flex-start",mt:6,mr:3}}
    >
     
      
          <Fab
            onClick={next}
            sx={{ml:2}}
            color="##e8eaf6"
            aria-label="edit"
            
          >
            <ArrowForwardOutlinedIcon  />
          </Fab>
          <Fab
            onClick={previous}
            sx={{}}
            color="##e8eaf6"
            aria-label="add"
          >
            <ArrowBackOutlinedIcon />
          </Fab>
    </Grid>
  );
};

export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
};