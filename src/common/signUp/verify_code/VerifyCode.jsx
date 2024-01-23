import { Box } from "@mui/material";
import React, { useState } from "react";
import VerificationInput from "react-verification-input";
import { verifyCodeStyle } from "../style";

const VerifyCode = () => {
  const [code_Num, setCode_Num] = useState("");
  const verifyCodeHandler = (value) => {
    setCode_Num(value);
  };
  return (
    <Box sx={verifyCodeStyle}>
      <VerificationInput
        onChange={verifyCodeHandler}
        length={4}
        placeholder="_"
        classNames={{
          container: "container",
          character: "character",
          characterInactive: "character--inactive",
          characterSelected: "character--selected",
          characterFilled: "character--filled",
        }}
      />
    </Box>
  );
};

export default VerifyCode;
