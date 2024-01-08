import Home from "@/components/home/Home";
import Layout from "@/layout";
import React from "react";
import CarouselMain from "@/components/home/Carousel/CarouselMain";
import Explore from "@/common/explore/Explore";
import Productimg from "@/components/Productimg/Productimg";
import Market_list_main from "@/components/home/market_list/Main";

const index = () => {
  return (
    <Layout>
      <CarouselMain />
      <Explore />
      <Market_list_main />
      <Productimg />
    </Layout>
  );
};

export default index;
{
  /* <Box sx={{ mt: { xs: 0, md: 10 } }}>
<Grid container>
  <Grid xs={12} md={3}>
    <Grid sx={{ mt: "15%", display: { xs: "flex", md: "none" } }}>
      <RightbarDrawer />
    </Grid>
    <Grid sx={{ display: { md: "flex", xs: "none" } }}>
      <CategoryListMain />
    </Grid>
  </Grid>
  <Grid xs={12} md={9}>
    <CarouselMain />
  </Grid>
</Grid>
</Box>
<Explore /> */
}
