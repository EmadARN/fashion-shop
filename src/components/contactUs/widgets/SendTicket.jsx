import { Typography } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { toPersianDigits } from "../../../../utils/toPersianDigits";
import {
  InformationUsSpan,
  InformationUsTypography,
  spanStyles,
} from "../style";

const SendTicket = () => {
  return (
    <div style={{ marginTop: "40px" }}>
      <Typography variant="h6" sx={InformationUsTypography}>
        <span style={InformationUsSpan}>
          <EmailOutlinedIcon />
        </span>
        <span style={spanStyles}>ارسال تیکت </span>
      </Typography>
      <Typography variant="body1" sx={{ my: 1 }}>
        ما از ساعت {toPersianDigits(8)} صبح قادر به پسخگویی هستیم تا
        {toPersianDigits(11)}
      </Typography>
      <Typography variant="body1" sx={{ my: 1 }}>
        ایمیل:&nbsp;ee@gmail.com
      </Typography>
    </div>
  );
};

export default SendTicket;
