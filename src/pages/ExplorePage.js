import Explore from "@/common/explore/Explore";
import CardProductView from "@/components/home/CardProductView/CardProductView";
import Layout from "@/layout";
import React from "react";

const ExplorePage = () => {
  return (
    <Layout>
      <CardProductView />
      <Explore />
    </Layout>
  );
};

export default ExplorePage;
