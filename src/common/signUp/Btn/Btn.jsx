import React from "react";
import Button from "@mui/material/Button";
import { BtnStyle } from "../style";
const Btn = ({ disabled }) => {
  return (
    <div>
      <Button disabled={disabled} variant="contained" sx={BtnStyle}>
        ادامه
      </Button>
    </div>
  );
};

export default Btn;
