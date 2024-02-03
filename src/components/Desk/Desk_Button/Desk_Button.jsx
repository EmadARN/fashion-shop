import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { Button_style } from "../style";
const Desk_Button = () => {
  return (
    <Grid container justifyContent="space-evenly"  width="100%">
      <Button sx={Button_style} size="medium" variant="contained">
        نرخ افزایش
      </Button>
      <Button sx={Button_style} size="medium" variant="contained">
        امار بازدید
      </Button>
      <Button sx={Button_style} size="medium" variant="contained">
        تعداد محصول
      </Button>
    </Grid>
  );
};

export default Desk_Button;
