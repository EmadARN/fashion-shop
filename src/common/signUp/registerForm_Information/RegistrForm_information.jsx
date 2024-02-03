import React from "react";
import { Box } from "@mui/material";
import RTL from "@/common/rtl/Rtl";
import TextArea from "./widget/Textarea";
import * as Yup from "yup";
import { useFormik } from "formik";
import Inputs from "./widget/Inputs";
import Btn from "../Btn/Btn";

const RegistrForm_information = () => {
  //   Reminde information
  const [formValues, setFormValues] = React.useState(null);
  const initialValues = {
    name: "",
    family: "",
    email: "",
    storeName: "",
    storeAddress: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("پر کردن این فیلد ضروری است"),
    family: Yup.string().required("پر کردن این فیلد ضروری است"),
    email: Yup.string()
      .email("فرمت ایمیل اشتباه است")
      .required("پر کردن این فیلد ضروری است"),
    storeName: Yup.string().required("پر کردن این فیلد ضروری است"),
    storeAddress: Yup.string().required("پر کردن این فیلد ضروری است"),
  });
  const formik = useFormik({
    initialValues: formValues || initialValues,
    onSubmit: (values) => {},
    // validate,زمانی که yup نباشد
    validationSchema,
    //اعتبار سنجی
    validateOnMount: true,
    //دیتا قبلی را لود کن
    enableReinitialize: true,
  });
  return (
    <RTL>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        autoComplete="off"
      ></Box>
      <Box>
        <Inputs formik={formik} />
      </Box>
      <Box>
        <TextArea formik={formik} name="storeAddress" label="آدرس فروشگاه" />
      </Box>
      <Btn disabled={!formik.isValid} />
    </RTL>
  );
};

export default RegistrForm_information;
