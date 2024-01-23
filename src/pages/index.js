import Layout from "@/layout";
import React from "react";
import Home from "@/components/home/Home";
import ContactUs from "@/components/contactUs/ContactUs";
import Cards from "@/common/cards/Cards";
import ImgDesktop from "@/components/Product_Page/Product_page_img_desktop/ImgDesktop";
import Product_page from "@/components/Product_Page/Product_page";
import ReactImageMagnify from "react-image-magnify";
import { Box } from "@mui/material";
import Information_main from "@/components/information_store/main";
import Changin_Product_Main from "@/common/ChanginProduct/Main";
import Productimg_phone from "@/components/Product_Page/Productimg_phone/Productimg_phone";
import VerifyCode from "@/common/signUp/verify_code/VerifyCode";
import VerifyNumber from "@/common/signUp/verify_number/VerifyNumber";
import SignUpMobile from "@/components/signUp/signUp_Mobile/SignUpMobile";
import SignupDesktop from "@/components/signUp/signup_Desktop/signupDesktop";
import MainForm from "@/components/signUp/mainForm";

const index = () => {
  return (
    <>
      <MainForm></MainForm>
    </>
  );
};

export default index;
