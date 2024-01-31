import React from "react";
import Button from "@mui/material/Button";
import { BtnStyle } from "../style";
const Btn = ({ disabled, setPage }) => {
  return (
    <div>
      <Button
        disabled={disabled}
        variant="contained"
        sx={BtnStyle}
        onClick={() => setPage((next) => next + 1)}
      >
        ادامه
      </Button>
    </div>
  );
};

export default Btn;
