import { Box, Typography } from "@mui/material";
import React from "react";
import {
  QuickLink,
  QuickLinksTypography1,
  QuickLinksTypographys,
} from "../style";
import Link from "next/link";
import { matn } from "../data";

const QuickLinks = () => {
  return (
    <Box>
      <Typography sx={QuickLinksTypography1}>دسترسی سریع</Typography>
      {matn.map((item, index) => {
        return (
          <section key={index} s>
            <Link style={QuickLink} href={item.link}>
              <Typography sx={QuickLinksTypographys}>{item.text}</Typography>
            </Link>
          </section>
        );
      })}
    </Box>
  );
};

export default QuickLinks;
