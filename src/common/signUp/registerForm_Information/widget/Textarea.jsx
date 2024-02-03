import * as React from "react";
import { Box } from "@mui/material";
import { BoxStyleTextArea, FormikErrorStyle } from "../../style";

export default function TextArea({ name, formik }) {
  return (
    <Box sx={BoxStyleTextArea}>
      <textarea
        className="textarea"
        id="comment"
        {...formik.getFieldProps(name)}
        placeholder="آدرس فروشگاه را وارد کنید "
        name={name}
      ></textarea>
      {formik.errors[name] && formik.touched[name] && (
        <Box sx={FormikErrorStyle}>{formik.errors[name]}</Box>
      )}
    </Box>
  );
}
