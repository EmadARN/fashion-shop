import React from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Typography } from "@mui/material";
import {
  InformationUsSpan,
  InformationUsTypography,
  InformationUsTypography2,
  spanStyles,
} from "../style";
import { toPersianDigits } from "../../../../utils/toPersianDigits";

const CallUs = () => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <Typography variant="h6" sx={InformationUsTypography}>
        <span style={InformationUsSpan}>
          <CallOutlinedIcon />
        </span>
        <span style={spanStyles}>تماس با ما</span>
      </Typography>
      <Typography my={2} variant="body1" sx={InformationUsTypography2}>
        ما از ساعت {toPersianDigits(8)} صبح قادر به پسخگویی هستیم تا
        {toPersianDigits(11)}{" "}
      </Typography>
      <Typography sx={InformationUsTypography2} variant="body1">
        تلفن:&nbsp;024332255+
      </Typography>
    </div>
  );
};

export default CallUs;
