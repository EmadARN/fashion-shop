import * as React from "react";
import { Box } from "@mui/material";
import { BoxStyleTextArea } from "../../style";

export default function TextArea() {
  return (
    <Box sx={BoxStyleTextArea}>
      <textarea
        name="text"
        className="textarea"
        id="comment"
        placeholder="آدرس فروشگاه را وارد کنید "
      ></textarea>
    </Box>
  );
}
