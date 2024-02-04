import Explore from "@/common/explore/Explore";
import CardProductView from "@/components/home/CardProductView/CardProductView";
import Layout from "@/layout";
import React from "react";

const explorePage = () => {
  return (
    <>
      <CardProductView />
      <Explore />
    </>
  );
};

export default explorePage;
