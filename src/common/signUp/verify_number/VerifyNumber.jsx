import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import { BoxStyle, IconStyle, TextFieldStyle } from "../style";
import { verifyNumHandler } from "../utils";
const VerifyNumber = () => {
  const [phon_Num, setPhon_Num] = useState("");

  return (
    <div>
      <Box sx={BoxStyle}>
        <AccountCircle sx={IconStyle} />
        <TextField
          focused
          onChange={(e) => verifyNumHandler(e, setPhon_Num)}
          sx={TextFieldStyle}
          inputProps={{ maxLength: 11 }}
          id="input-with-sx"
          label="شماره همراه"
          variant="filled"
        />
      </Box>
    </div>
  );
};

export default VerifyNumber;
