import { Typography } from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { toPersianDigits } from "../../../../utils/toPersianDigits";
import {
  InformationUsSpan,
  InformationUsTypography,
  InformationUsTypography2,
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
      <Typography my={1} variant="body1" sx={InformationUsTypography2}>
        ما از ساعت {toPersianDigits(8)} صبح قادر به پسخگویی هستیم تا
        {toPersianDigits(11)}
      </Typography>
      <Typography my={1} variant="body1" sx={InformationUsTypography2}>
        ایمیل:&nbsp;ee@gmail.com
      </Typography>
    </div>
  );
};

export default SendTicket;
