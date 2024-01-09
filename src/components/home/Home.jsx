import Hr from "@/common/hr/Hr";
import { Explore } from "@mui/icons-material";
import React from "react";
import CardProductView from "./CardProductView/CardProductView";

const Home = () => {
  return (
    <>
      {" "}
      <Explore />
      <Hr />
      <CardProductView />
    </>
  );
};

export default Home;
