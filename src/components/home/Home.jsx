import Hr from "@/common/hr/Hr";
import React from "react";
import CardProductView from "./CardProductView/CardProductView";
import { Container, Grid } from "@mui/material";
import RightbarDrawer from "./Right_bar_drawer_sm/Main";
import CategoryListMain from "./Right_bar/Main";
import Market_item from "./market_list/market_item";
import Explore from "@/common/explore/Explore";
import Carousel from "./Carousel/Carousel";

const Home = () => {
  return (
    <Grid container sx={{ pt: { xs: 0, md: 10 } }}>
      <Grid item xs={2} sm={2} md={2} lg={2} sx={{ mt: { xs: 0 } }}>
        <Grid sx={{ mt: "15%", display: { xs: "flex", md: "none" } }}>
          <RightbarDrawer />
        </Grid>
        <Grid sx={{ display: { md: "flex", xs: "none" } }}>
          <CategoryListMain />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
        <Carousel />
      </Grid>
      <Container maxWidth="lg">
        <Hr paragraph={"لیست فروشگاه های فعال"} />
      </Container>
      <Grid item xs={12}>
        <Market_item />
      </Grid>

      <Container maxWidth="lg">
        <Grid item xs={12}>
          <Hr paragraph={"محصولات پر بازدید"} />
          <CardProductView />
        </Grid>
        <Grid item xs={12}>
          <Explore />
        </Grid>
      </Container>
    </Grid>
  );
};

export default Home;
