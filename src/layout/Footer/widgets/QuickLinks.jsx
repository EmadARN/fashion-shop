import { Box, Typography } from "@mui/material";
import React from "react";
import { QuickLinksLi1, QuickLinksTypography1 } from "../Style";
import Link from "next/link";

const QuickLinks = () => {
  return (
    <Box>
      <Typography sx={QuickLinksTypography1}>دسترسی سریع</Typography>
      <ul style={{ listStyle: "none" }}>
        <li style={QuickLinksLi1}>
          <Link
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
            href={"#"}
          >
            خانه
          </Link>
        </li>
        <li style={{ paddingBottom: "16px" }}>
          <Link
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
            href={"#"}
          >
            درباره ما
          </Link>
        </li>
        <li style={{ paddingBottom: "16px" }}>
          <Link
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
            href={"#"}
          >
            ارتباط با ما
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default QuickLinks;
