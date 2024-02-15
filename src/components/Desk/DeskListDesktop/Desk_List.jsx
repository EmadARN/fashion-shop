import { Box, Typography } from "@mui/material";
import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowDesk_List_style,
  Box1Desk_List_style,
  Box2Desk_List_style,
  sectionDesk_List_style,
} from "../style";
const Desk_List = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section style={sectionDesk_List_style}>
      <Box onClick={() => setIsOpen(!isOpen)} sx={Box1Desk_List_style}>
        <Typography>داشبورد</Typography>
        <ArrowDropDownIcon sx={ArrowDesk_List_style(isOpen)} />
      </Box>
      <Box sx={Box2Desk_List_style(isOpen)}>
        <Link href="#" className="link1">
          میز کار
        </Link>
        <Link href="/Changing_Product" className="link1">
          تعریف محصول
        </Link>
      </Box>
    </section>
  );
};

export default Desk_List;
