import React from "react";
import Button from "@mui/material/Button";
import { BtnStyle } from "../style";
const Btn = () => {
  return (
    <div>
      <Button variant="outlined" sx={BtnStyle}>
        ادامه
      </Button>
    </div>
  );
};

export default Btn;
