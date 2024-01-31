import React, { useState } from "react";
import MainFormVerifyNumber from "./MainFormVerifyNumber";
import MainFormVerifyCode from "./MainFormVerifyCode";
import MainRegisterForm from "./MainRegisterForm";
import { Box } from "@mui/material";

const Main = () => {
  const [page, setPage] = useState(0);
  const formComp = [
    <MainFormVerifyNumber page={page} setPage={setPage} />,
    <MainFormVerifyCode page={page} setPage={setPage} />,
    <MainRegisterForm page={page} setPage={setPage} />,
  ];
  return <Box>{formComp[page]}</Box>;
};

export default Main;
