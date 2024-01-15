import * as React from "react";
import Fab from "@mui/material/Fab";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid, Box } from "@mui/material";
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
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        mt: 2,
        mr: 5,
        position: "relative",
        top: "-250px",
      }}
    >
      <Box>
        <Fab onClick={next} sx={{ ml: 2 }} color="#e8eaf6" aria-label="edit">
          <ArrowForwardIosIcon />
        </Fab>
      </Box>

      <Box>
        <Fab onClick={previous} sx={{}} color="#e8eaf6" aria-label="add">
          <ArrowBackIosIcon />
        </Fab>
      </Box>
    </Grid>
  );
};

const CustomButtonGroupAsArrows2 = ({ next, previous }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 2,
        mr: 1,
        position: "relative",
        top: "-98px",
      }}
    >
      <Box
        onClick={next}
        sx={{ ml: 1, color: "#444", cursor: "pointer" }}
        aria-label="edit"
      >
        <ArrowForwardIosIcon sx={{ fontSize: "30px" }} />
      </Box>

      <Box
        onClick={previous}
        sx={{ ml: 2, color: "#444", cursor: "pointer" }}
        aria-label="add"
      >
        <ArrowBackIosIcon sx={{ fontSize: "30px" }} />
      </Box>
    </Grid>
  );
};
const CustomButtonGroupAsArrows3 = ({ next, previous }) => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mr: 1,
        position: "relative",
        top: { xs: "-150px", sm: "-200px", md: "-200px" },
      }}
    >
      <Box
        onClick={next}
        sx={{
          ml: 1,
          color: "#444",
          cursor: "pointer",
          backgroundColor: "none",
        }}
        aria-label="edit"
      >
        <ArrowForwardIosIcon
          sx={{
            fontSize: "30px",
            "&:hover": {
              color: "#ddd",
            },
          }}
        />
      </Box>

      <Box
        onClick={previous}
        sx={{
          ml: 2,
          color: "#444",
          cursor: "pointer",
          backgroundColor: "none",
        }}
        aria-label="add"
      >
        <ArrowBackIosIcon
          sx={{
            fontSize: "30px",
            "&:hover": {
              color: "#ddd",
            },
          }}
        />
      </Box>
    </Grid>
  );
};
export {
  CustomLeftArrow,
  CustomRightArrow,
  CustomButtonGroup,
  CustomButtonGroupAsArrows,
  CustomButtonGroupAsArrows2,
  CustomButtonGroupAsArrows3,
};
