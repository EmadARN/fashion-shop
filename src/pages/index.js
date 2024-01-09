import Home from "@/components/home/Home";
import Layout from "@/layout";
import React from "react";
import CarouselMain from "@/components/home/Carousel/CarouselMain";
import CardProductView from "@/components/home/CardProductView/CardProductView";
import Hr from "@/common/hr/Hr";


const index = () => {
  return (

<Layout>
  <Hr/>
  <CardProductView />
</Layout>

  );
};

export default index;
